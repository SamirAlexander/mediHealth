'use client';

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Estado = "Pendiente" | "No asistió" | "Realizado";

interface Cita {
  paciente: string;
  documentoIdentidad: string;
  especialidad: string;
  fechaHora: string;
  historiaUrl: string;
  estado: Estado;
}

const AgendaMedica = () => {
  const [agenda, setAgenda] = useState<Cita[]>([
    {
      paciente: "Juan Pérez",
      documentoIdentidad: "404040401",
      especialidad: "Cardiología",
      fechaHora: "2025-05-22 08:30",
      historiaUrl: "#historia1",
      estado: "Pendiente",
    },
    {
      paciente: "María González",
      documentoIdentidad: "404040402",
      especialidad: "Dermatología",
      fechaHora: "2025-05-22 09:15",
      historiaUrl: "#historia2",
      estado: "Pendiente",
    },
    {
      paciente: "Carlos Ruiz",
      documentoIdentidad: "404040403",
      especialidad: "Neurología",
      fechaHora: "2025-05-22 10:00",
      historiaUrl: "#historia3",
      estado: "Pendiente",
    },
  ]);

  const actualizarEstado = (index: number, nuevoEstado: Estado) => {
    setAgenda((prevAgenda) => {
      const nuevaAgenda = [...prevAgenda];
      nuevaAgenda[index].estado = nuevoEstado;
      return nuevaAgenda;
    });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 20, maxWidth: 800, margin: "auto" }}>
      <h2> Agenda Médica - Agenda del Día</h2>
      <table style={{ width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#ABEAD3" }}>
            <th style={{ border: "1px solid #ccc", padding: 8, width: "25%" }}>Paciente</th>
            <th style={{ border: "1px solid #ccc", padding: 8 }}>Documento</th>
            <th style={{ border: "1px solid #ccc", padding: 8 }}>Especialidad</th>
            <th style={{ border: "1px solid #ccc", padding: 8, width: "27%" }}>Fecha y Hora</th>
            <th style={{ border: "1px solid #ccc", padding: 8, width: "22%" }}>Historia Clínica</th>
            <th style={{ border: "1px solid #ccc", padding: 8 }}>Estado de Atención</th>
          </tr>
        </thead>
        <tbody>
          {agenda.map((cita, index) => (
            <tr key={index} style={{ textAlign: "center" }}>
              <td style={{ border: "1px solid #ccc", padding: 8 }}>{cita.paciente}</td>
              <td style={{ border: "1px solid #ccc", padding: 8 }}>{cita.documentoIdentidad}</td>
              <td style={{ border: "1px solid #ccc", padding: 8 }}>{cita.especialidad}</td>
              <td style={{ border: "1px solid #ccc", padding: 8 }}>{cita.fechaHora}</td>
              <td style={{ border: "1px solid #ccc", padding: 8 }}>
                <Link href={`/dashboard/paciente/historiaClinica?documento=${encodeURIComponent(cita.documentoIdentidad)}`}>
                  <button
                    style={{
                      backgroundColor: "#4CAF50",
                      color: "white",
                      border: "none",
                      padding: "6px 15px",
                      cursor: "pointer",
                      borderRadius: 4,
                    }}
                  >
                    Ver historia
                  </button>
                </Link>
              </td>
              <td style={{ border: "1px solid #ccc", padding: 8 }}>
                <select
                  value={cita.estado}
                  onChange={(e) => actualizarEstado(index, e.target.value as Estado)}
                  style={{ padding: 6, fontSize: 14 }}
                >
                  <option value="Pendiente">Pendiente</option>
                  <option value="No asistió">No asistió</option>
                  <option value="Realizado">Realizado</option>
                </select>
              </td>
            </tr>
          ))}
          {agenda.length === 0 && (
            <tr>
              <td colSpan={6} style={{ padding: 20, textAlign: "center" }}>
                No hay citas para hoy.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="flex col-span-2 justify-end">
        <Link href="/dashboard/medico">
          <Button className="mt-2 bg-gray-500 text-white hover:bg-gray-600">
            Volver
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AgendaMedica;

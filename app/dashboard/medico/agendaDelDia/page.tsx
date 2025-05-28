'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import axios from 'axios';

type Estado = "Pendiente" | "No asistió" | "Realizado";

interface Cita {
  pacienteNombre: string;
  pacienteDocumentoIdentidad: string;
  especialidad: string;
  numeroConsultorio: string;
  fechaHora: string;
  historiaUrl: string;
  estado: Estado;
}

const AgendaMedica = () => {
  const [agenda, setAgenda] = useState<Cita[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const formatFechaHora = (fechaCita: string, horaInicio: string) => {
    try {
      const fecha = fechaCita.split('T')[0];
      const hora = horaInicio?.substring(0, 5) || '00:00';
      return `${fecha} ${hora}`;
    } catch (e) {
      console.error("Error formateando fecha:", e);
      return "Fecha no disponible";
    }
  };

  useEffect(() => {
    const fetchAgenda = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(`http://localhost:8080/medico/agendaDelDia/1?fecha=2025-04-21`);

        const citasMapeadas = response.data.map((cita: any) => ({
          pacienteNombre: `${cita.pacienteNombre || ''} ${cita.pacienteApellido || ''}`.trim() || 'Paciente no disponible',
          pacienteDocumentoIdentidad: cita.pacienteDocumentoIdentidad || 'N/A',
          especialidad: cita.especialidad || 'Especialidad no especificada',
          numeroConsultorio: cita.numeroConsultorio || "sin numero de consultorio",
          fechaHora: formatFechaHora(cita.fechaCita, cita.horaInicio),
          historiaUrl: `/dashboard/medico/historiaClinica?documento=${cita.pacienteDocumentoIdentidad || ''}`,
          estado: "Pendiente"
        }));

        setAgenda(citasMapeadas);
      } catch (err) {
        console.error("Error al cargar agenda:", err);
        setError("No se pudo cargar la agenda desde el servidor.");
        setAgenda([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAgenda();
  }, []);

  const actualizarEstado = async (index: number, nuevoEstado: Estado) => {
    if (index < 0 || index >= agenda.length) {
      console.error("Índice inválido:", index);
      return;
    }

    const documento = agenda[index].pacienteDocumentoIdentidad;
    if (!documento || documento.trim() === "") {
      console.error("Documento de identidad no válido");
      return;
    }

    const agendaActualizada = [...agenda];
    agendaActualizada[index].estado = nuevoEstado;
    setAgenda(agendaActualizada);

    try {
      await axios.patch(
        `http://localhost:8080/medico/agendaDelDia/1?fecha=${encodeURIComponent(documento)}`,
        { estado: nuevoEstado },
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        }
      );
    } catch (err) {
      console.error("Error al actualizar estado:", err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <span className="ml-4 text-gray-600">Cargando agenda médica...</span>
      </div>
    );
  }

  return (
    <div className="font-sans px-5 max-w-full bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Agenda Médica Del Día</h2>
          <Link href="/dashboard/medico" passHref>
            <Button className="bg-gray-600 text-white hover:bg-gray-700 px-6 py-2 rounded-lg shadow-sm">
              Volver al panel
            </Button>
          </Link>
        </div>

        {error && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 rounded" role="alert">
            <p>{error}</p>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Paciente</th>
                  <th className="px-6 py-4 text-left font-medium">Documento</th>
                  <th className="px-6 py-4 text-left font-medium">Especialidad</th>
                  <th className="px-6 py-4 text-left font-medium">Consultorio</th>
                  <th className="px-6 py-4 text-left font-medium">Fecha y Hora</th>
                  <th className="px-6 py-4 text-left font-medium">Historia Clínica</th>
                  <th className="px-6 py-4 text-left font-medium">Estado</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {agenda.length > 0 ? (
                  agenda.map((cita, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-gray-800 font-medium">{cita.pacienteNombre}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">{cita.pacienteDocumentoIdentidad}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">{cita.especialidad}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">{cita.numeroConsultorio}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">{cita.fechaHora}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link href={cita.historiaUrl}>
                          <Button variant="outline" className="bg-teal-600 text-white hover:bg-teal-700 px-4 py-2 rounded-md shadow-sm">
                            Ver historia
                          </Button>
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={cita.estado}
                          onChange={(e) => actualizarEstado(index, e.target.value as Estado)}
                          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
                        >
                          <option value="Pendiente">Pendiente</option>
                          <option value="No asistió">No asistió</option>
                          <option value="Realizado">Realizado</option>
                        </select>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                      No hay citas programadas para hoy.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Button className="bg-teal-600 text-white hover:bg-teal-700 px-6 py-2 rounded-lg shadow-sm">
            Cita Extra
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AgendaMedica;
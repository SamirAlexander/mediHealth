'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DetalleAgenda {
  id: number;
  fecha: string;
  horaInicio: string;
  horaFin: string;
  consultorio: string;
  idAgenda: number;
  idDetalle: number;
}

export default function SeleccionarCita() {
  const [citasDisponibles, setCitasDisponibles] = useState<DetalleAgenda[]>([]);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const fetchCitasDisponibles = async () => {
      try {
        const response = await axios.get<DetalleAgenda[]>('http://localhost:8080/paciente/asignacionCita');
        setCitasDisponibles(response.data);
      } catch (error) {
        console.error("Error al cargar las citas disponibles", error);
      }
    };

    fetchCitasDisponibles();
  }, []);

  const agendarCita = async (idDetalle: number) => {
    try {
      await axios.post(`http://localhost:8080/paciente/asignacionCita/${idDetalle}`, {
        idPaciente: 21  // <- Cambia esto por el ID real del paciente autenticado
      });
      setMensaje("✅ Cita agendada correctamente.");
    } catch (error) {
      console.error("Error al agendar cita", error);
      setMensaje("❌ Error al agendar la cita.");
    }
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Selecciona una cita disponible</h1>
      {mensaje && <p className="text-green-600">{mensaje}</p>}

      {citasDisponibles.map((cita) => (
        <Card key={cita.idDetalle} className="shadow-md border">
          <CardHeader>
            <CardTitle>{cita.fecha} - {cita.horaInicio} a {cita.horaFin}</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Consultorio:</strong> {cita.consultorio}</p>
            <Button className="mt-2 bg-blue-600 text-white hover:bg-blue-700"
                    onClick={() => agendarCita(cita.idDetalle)}>
              Agendar
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

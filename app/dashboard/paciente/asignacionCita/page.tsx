'use client';

import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface DetalleAgenda {
  idAgenda: number;
  fechaCita: string;
  idDetalleAgenda: number;
  horaInicio: string;
  horaFin: string;
  disponibilidad: string;
  idConsultorio: number;
  numeroConsultorio: string;
  idMedico: number;
  especialidad: string;
  nombreMedico: string;
  apellidoMedico: string;
}

export default function SeleccionarCita() {
  const [documento, setDocumento] = useState("");
  const [idPaciente, setIdPaciente] = useState<number | null>(null);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [documentoPaciente, setDocumentoPaciente] = useState("");
  const [citasDisponibles, setCitasDisponibles] = useState<DetalleAgenda[]>([]);
  const [fecha, setFecha] = useState("");
  const [idConsultorio, setIdConsultorio] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  const buscarPacientePorDocumento = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/paciente/asignacionCita/obtener-id/${documento}`);
      const data = response.data;
      setIdPaciente(data.idPaciente);
      setNombre(data.nombre);
      setApellido(data.apellido);
      setDocumentoPaciente(data.documento_identidad); // <- Ajustado aquí
    } catch (error) {
      console.error("No se encontró el paciente", error);
      alert("❌ Documento no encontrado en el sistema.");
      setIdPaciente(null);
      setNombre("");
      setApellido("");
      setDocumentoPaciente("");
    }
  };

  const fetchCitasDisponibles = async () => {
    const consultorioNum = parseInt(idConsultorio);
    if (!fecha || isNaN(consultorioNum) || consultorioNum < 1) return;

    try {
      const response = await axios.get<DetalleAgenda[]>('http://localhost:8080/paciente/asignacionCita/disponibles', {
        params: { fecha, idConsultorio: consultorioNum }
      });
      setCitasDisponibles(response.data);
    } catch (error) {
      console.error("Error al cargar las citas disponibles", error);
    }
  };

  const agendarCita = async (idDetalleAgenda: number) => {
    if (!idPaciente) {
      alert("Debes ingresar y validar el documento del paciente primero.");
      return;
    }

    try {
      await axios.post(`http://localhost:8080/paciente/asignacionCita/agendar/${idDetalleAgenda}?idPaciente=${idPaciente}`);
      setCitasDisponibles(prev =>
        prev.filter(cita => cita.idDetalleAgenda !== idDetalleAgenda)
      );
      setMostrarModal(true);
    } catch (error) {
      console.error("Error al agendar cita", error);
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Modal de confirmación */}
      <Dialog open={mostrarModal} onOpenChange={setMostrarModal}>
        <DialogContent className="text-center">
          <DialogHeader>
            <DialogTitle className="text-teal-700 text-xl font-bold">
              ✅ Cita Asignada Exitosamente
            </DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <Button
              className="mt-2 bg-teal-700 text-white hover:bg-teal-800 mx-auto"
              onClick={() => setMostrarModal(false)}
            >
              Cerrar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <h1 className="text-2xl font-bold text-teal-700">
        Selección de Cita
      </h1>

      {/* Input para buscar paciente */}
      <div className="flex gap-4 items-end">
        <div>
          <Label htmlFor="documento">Documento</Label>
          <Input
            id="documento"
            placeholder="Ingrese documento"
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            className="border-gray-300 focus:ring-teal-700 focus:border-teal-700"
          />
        </div>
        <Button
          className="bg-teal-700 text-white hover:bg-teal-800"
          onClick={buscarPacientePorDocumento}
        >
          Buscar Paciente
        </Button>
      </div>

      {/* Mostrar datos del paciente solo si se encontró */}
      {idPaciente && (
        <div className="flex flex-wrap gap-x-6 gap-y-2 items-center bg-white border border-gray-200 px-4 py-2 rounded shadow-sm max-w-5xl">
          <div>
            <p className="text-sm text-black">ID Paciente</p>
            <p className="text-teal-700 font-bold">{idPaciente}</p>
          </div>
          <div>
            <p className="text-sm text-black">Nombre</p>
            <p className="text-teal-700 font-bold">{nombre}</p>
          </div>
          <div>
            <p className="text-sm text-black">Apellido</p>
            <p className="text-teal-700 font-bold">{apellido}</p>
          </div>
          <div>
            <p className="text-sm text-black">Documento</p>
            <p className="text-teal-700 font-bold">{documentoPaciente}</p>
          </div>
        </div>
      )}

      {/* Filtros para citas disponibles */}
      {idPaciente && (
        <div className="flex flex-wrap gap-4 items-end pt-4">
          <div>
            <Label htmlFor="fecha">Fecha</Label>
            <Input
              type="date"
              id="fecha"
              className="focus:border-teal-700 focus:ring-teal-700 border-gray-300"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="consultorio">ID Consultorio</Label>
            <Input
              type="number"
              id="consultorio"
              min="1"
              placeholder="Ej: 1"
              value={idConsultorio}
              onChange={(e) => setIdConsultorio(e.target.value)}
            />
          </div>
          <Button
            className="bg-teal-700 text-white hover:bg-teal-800"
            onClick={fetchCitasDisponibles}
          >
            Buscar Citas
          </Button>
          <Link href="/dashboard/paciente">
            <Button className="bg-gray-600 hover:bg-gray-700 text-white">
              Volver
            </Button>
          </Link>
        </div>
      )}

      {/* Lista de citas disponibles */}
      {citasDisponibles.length > 0 && (
        <div className="grid gap-4 pt-4">
          {citasDisponibles.map((cita) => (
            <Card key={cita.idDetalleAgenda} className="border shadow-md">
              <CardHeader>
                <CardTitle className="text-teal-700 font-bold">
                  {cita.fechaCita} — {cita.horaInicio} a {cita.horaFin}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <p><strong>Consultorio:</strong> {cita.numeroConsultorio}</p>
                <p><strong>Médico:</strong> Dr. {cita.nombreMedico} {cita.apellidoMedico}</p>
                <p><strong>Especialidad:</strong> {cita.especialidad}</p>
                <Button
                  className="mt-2 bg-teal-700 text-white hover:bg-teal-800"
                  onClick={() => agendarCita(cita.idDetalleAgenda)}
                >
                  Agendar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

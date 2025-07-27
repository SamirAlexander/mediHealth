"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
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

const AgendarCitaExtra = () => {
  const [documento, setDocumento] = useState("");
  const [idPaciente, setIdPaciente] = useState<number | null>(null);
  const [datosPaciente, setDatosPaciente] = useState<any>(null);
  const [fecha, setFecha] = useState("");
  const [idConsultorio, setIdConsultorio] = useState("");
  const [agendas, setAgendas] = useState<any[]>([]);
  const [mensajeSinCitas, setMensajeSinCitas] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  const buscarPaciente = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/medico/CitaExtra/obtener-id/${documento}`
      );
      setDatosPaciente(response.data);
      setIdPaciente(response.data.idPaciente);
    } catch (error) {
      alert("❌ Documento no encontrado en el sistema.");
      setDatosPaciente(null);
      setIdPaciente(null);
    }
  };

  const buscarAgendas = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/medico/CitaExtra/disponibles?fecha=${fecha}&idConsultorio=${idConsultorio}`
      );
      setAgendas(response.data);
      setMensajeSinCitas(
        response.data.length === 0
          ? "No hay agendas disponibles para esta fecha."
          : ""
      );
    } catch (error) {
      console.error("Error al buscar agendas", error);
      setMensajeSinCitas("Error al buscar las agendas.");
    }
  };

  const agendarCita = async (idDetalle: number) => {
    if (!idPaciente) {
      alert("Debes validar el documento del paciente primero.");
      return;
    }
    try {
      await axios.post(
        `http://localhost:8080/medico/CitaExtra/agendar/${idDetalle}?idPaciente=${idPaciente}`
      );
      setMostrarModal(true);
      setAgendas((prev) => prev.filter((a) => a.idDetalleAgenda !== idDetalle));
    } catch (error) {
      console.error("Error al agendar cita", error);
      alert("No se pudo agendar la cita. Intente de nuevo.");
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

      <h1 className="text-2xl font-bold text-teal-700">Agendar Cita Extra</h1>

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
          onClick={buscarPaciente}
        >
          Buscar Paciente
        </Button>
      </div>

      {/* Mostrar datos del paciente */}
      {idPaciente && datosPaciente && (
        <div className="flex flex-wrap gap-x-6 gap-y-2 items-center bg-white border border-gray-200 px-4 py-2 rounded shadow-sm max-w-5xl">
          <div>
            <p className="text-sm text-black">ID Paciente</p>
            <p className="text-teal-700 font-bold">{idPaciente}</p>
          </div>
          <div>
            <p className="text-sm text-black">Nombre</p>
            <p className="text-teal-700 font-bold">{datosPaciente.nombre}</p>
          </div>
          <div>
            <p className="text-sm text-black">Apellido</p>
            <p className="text-teal-700 font-bold">{datosPaciente.apellido}</p>
          </div>
          <div>
            <p className="text-sm text-black">Documento</p>
            <p className="text-teal-700 font-bold">
              {datosPaciente.documento_identidad}
            </p>
          </div>
        </div>
      )}

      {/* Filtros para buscar agendas */}
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
            onClick={buscarAgendas}
          >
            Buscar Agendas
          </Button>
          <Link href="/dashboard/medico">
            <Button className="bg-gray-600 hover:bg-gray-700 text-white">
              Volver
            </Button>
          </Link>
          {mensajeSinCitas && (
            <p className="text-teal-700 font-semibold pt-2 w-full">
              {mensajeSinCitas}
            </p>
          )}
        </div>
      )}

      {/* Lista de agendas disponibles */}
      {agendas.length > 0 && (
        <div className="grid gap-4 pt-4">
          {agendas.map((agenda) => (
            <Card key={agenda.idDetalleAgenda} className="border shadow-md">
              <CardHeader>
                <CardTitle className="text-teal-700 font-bold">
                  {agenda.fechaCita} — {agenda.horaInicio}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <p>
                  <strong>Consultorio:</strong>{" "}
                  {agenda.numeroConsultorio || idConsultorio}
                </p>
                <p>
                  <strong>Médico:</strong> Dr. {agenda.nombreMedico}{" "}
                  {agenda.apellidoMedico}
                </p>
                <p>
                  <strong>Especialidad:</strong> {agenda.especialidad}
                </p>
                <Button
                  className="mt-2 bg-teal-700 text-white hover:bg-teal-800"
                  onClick={() => agendarCita(agenda.idDetalleAgenda)}
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
};

export default AgendarCitaExtra;

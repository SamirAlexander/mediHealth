'use client';

import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

interface CitaAsignada {
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
  idPaciente: number;
  documentoIdentidadPaciente: string;
  nombrePaciente: string;
  apellidoPaciente: string;
}

export default function CitasPaciente() {
  const [documento, setDocumento] = useState('');
  const [citas, setCitas] = useState<CitaAsignada[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [mostrarModal, setMostrarModal] = useState(false);
  const [modalReasignacionExitosa, setModalReasignacionExitosa] = useState(false);
  const [modalCancelacionExitosa, setModalCancelacionExitosa] = useState(false);
  const [citasDisponibles, setCitasDisponibles] = useState<CitaAsignada[]>([]);
  const [idPaciente, setIdPaciente] = useState<number | null>(null);
  const [idDetalleActual, setIdDetalleActual] = useState<number | null>(null);
  const [fecha, setFecha] = useState('');
  const [idConsultorio, setIdConsultorio] = useState('1');

  const handleBuscar = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get<CitaAsignada[]>(
        `http://localhost:8080/paciente/citaAsignada/documento/${documento}`
      );
      setCitas(res.data);

      if (res.data.length > 0 && res.data[0].idPaciente) {
        setIdPaciente(res.data[0].idPaciente);
      } else {
        setIdPaciente(null);
      }
    } catch (err) {
      setError('No se pudieron obtener las citas.');
    } finally {
      setLoading(false);
    }
  };

  const abrirModalReasignar = (detalleId: number) => {
    setIdDetalleActual(detalleId);
    setMostrarModal(true);
  };

  const fetchCitasDisponibles = async () => {
    if (!fecha || !idConsultorio) return;
    try {
      const res = await axios.get<CitaAsignada[]>(
        'http://localhost:8080/paciente/asignacionCita/disponibles',
        {
          params: {
            fecha,
            idConsultorio: parseInt(idConsultorio),
          },
        }
      );
      setCitasDisponibles(res.data);
    } catch (err) {
      console.error('Error al buscar citas disponibles', err);
    }
  };

  const handleReasignarCita = async (nuevoIdDetalle: number) => {
    try {
      const resPaciente = await axios.get<CitaAsignada[]>(
        `http://localhost:8080/paciente/citaAsignada/documento/${documento}`
      );

      if (resPaciente.data.length === 0) {
        alert('Paciente no encontrado.');
        return;
      }

      const idPacienteExtraido = resPaciente.data[0].idPaciente;

      await axios.put(
        `http://localhost:8080/paciente/asignacionCita/reasignar/${nuevoIdDetalle}`,
        null,
        {
          params: {
            idPaciente: idPacienteExtraido,
            idDetalleAnterior: idDetalleActual,
          },
        }
      );

      const citasActualizadas = await axios.get<CitaAsignada[]>(
        `http://localhost:8080/paciente/citaAsignada/documento/${documento}`
      );

      setCitas(citasActualizadas.data);
      setMostrarModal(false);
      setModalReasignacionExitosa(true);
    } catch (error) {
      console.error('❌ Error al reasignar cita', error);
      alert('❌ No se pudo reasignar la cita.');
    }
  };

  const handleCancelarCita = async (idDetalle: number) => {
    try {
      await axios.delete(`http://localhost:8080/paciente/asignacionCita/cancelar/${idDetalle}`);
      // Quitar la cita cancelada de la lista visualmente
      setCitas((prevCitas) => prevCitas.filter((cita) => cita.idDetalleAgenda !== idDetalle));
      setModalCancelacionExitosa(true);
    } catch (error) {
      console.error('❌ Error al cancelar la cita:', error);
      alert('❌ No se pudo cancelar la cita.');
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-teal-700">
            Consultar Citas Asignadas
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Mostrar input y botón sólo si no hay citas cargadas */}
          {citas.length === 0 && (
            <div className="flex flex-wrap items-center gap-4">
              <Input
                placeholder="Documento de identidad"
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
                className="w-full max-w-[700px]"
              />
              <Button
                onClick={handleBuscar}
                disabled={loading || !documento}
                className="bg-teal-600 hover:bg-teal-700 text-white"
              >
                {loading ? 'Buscando...' : 'Buscar'}
              </Button>
              <div className="flex-1" />
              <Link href="/dashboard/paciente" passHref>
                <Button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg shadow-sm">
                  Volver
                </Button>
              </Link>
            </div>
          )}
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </CardContent>
      </Card>

      {/* Datos del paciente en una sola línea */}
      {citas.length > 0 && (
        <div className="mt-6 mb-4 p-4 bg-gray-100 border rounded-md text-gray-700 flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-6">
            <span className="whitespace-nowrap">🧑 Nombre:</span>
            <span className="text-2xl font-bold text-teal-800">
              {citas[0].nombrePaciente} {citas[0].apellidoPaciente}
            </span>
            <span className="whitespace-nowrap">🪪 Documento:</span>
            <span className="text-2xl font-bold text-teal-800">
              {citas[0].documentoIdentidadPaciente}
            </span>
          </div>
          <Button
            className="bg-gray-600 text-white hover:bg-gray-700 px-4 py-2 rounded"
            onClick={() => {
              setCitas([]);
              // Si quieres limpiar el documento para volver a empezar la búsqueda, descomenta la línea siguiente:
              // setDocumento('');
              setError('');
            }}
          >
            Volver a búsqueda
          </Button>
        </div>
      )}
      {citas.length > 0 && (
        <div className="grid gap-6">
          {citas.map((cita) => (
            <Card key={cita.idDetalleAgenda} className="shadow-md border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-teal-700">
                  📅 Cita el {new Date(cita.fechaCita).toLocaleDateString()}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-1 flex justify-between items-center">
                <div>
                  <p><strong>🕒 Hora:</strong> {cita.horaInicio} - {cita.horaFin}</p>
                  <p><strong>🏥 Consultorio:</strong> {cita.numeroConsultorio}</p>
                  <p><strong>👨‍⚕️ Médico:</strong> {cita.nombreMedico} {cita.apellidoMedico}</p>
                  <p><strong>🧬 Especialidad:</strong> {cita.especialidad}</p>
                </div>
                <div className="flex gap-3">
                  <Button
                    className="bg-teal-700 text-white hover:bg-teal-800"
                    onClick={() => abrirModalReasignar(cita.idDetalleAgenda)}
                  >
                    Reasignar
                  </Button>
                  <Button
                    className="bg-gray-600 text-white hover:bg-red-700"
                    onClick={() => handleCancelarCita(cita.idDetalleAgenda)}
                  >
                    Cancelar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Modal Reasignación */}
      <Dialog open={mostrarModal} onOpenChange={setMostrarModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-teal-700 text-lg">Reasignar cita</DialogTitle>
            <DialogDescription>
              Selecciona una nueva fecha y consultorio para ver citas disponibles.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3">
            <div className="flex gap-3">
              <div>
                <Label htmlFor="fecha">Fecha</Label>
                <Input
                  type="date"
                  id="fecha"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="consultorio">Consultorio</Label>
                <Input
                  type="number"
                  id="consultorio"
                  min={1}
                  value={idConsultorio}
                  onChange={(e) => setIdConsultorio(e.target.value)}
                  placeholder="Ej: 1"
                />
              </div>
              <Button className="mt-6 bg-teal-700 text-white" onClick={fetchCitasDisponibles}>
                Buscar
              </Button>
            </div>

            {citasDisponibles.length > 0 && (
              <div className="space-y-4 mt-4 max-h-[250px] overflow-y-auto pr-2">
                {citasDisponibles.map((cita) => (
                  <Card
                    key={cita.idDetalleAgenda}
                    className="p-3 shadow border border-gray-200 flex justify-between items-center"
                  >
                    <div>
                      <p><strong>{cita.fechaCita}</strong> | {cita.horaInicio} - {cita.horaFin}</p>
                      <p><strong>Médico:</strong> {cita.nombreMedico} {cita.apellidoMedico}</p>
                      <p><strong>Especialidad:</strong> {cita.especialidad}</p>
                    </div>
                    <Button
                      className="bg-teal-600 text-white hover:bg-teal-700"
                      onClick={() => handleReasignarCita(cita.idDetalleAgenda)}
                    >
                      Reasignar Aquí
                    </Button>
                  </Card>
                ))}
              </div>
            )}
          </div>

          <DialogFooter className="justify-end mt-4">
            <Button variant="outline" onClick={() => setMostrarModal(false)}>
              Cerrar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal Éxito Reasignación */}
      <Dialog open={modalReasignacionExitosa} onOpenChange={setModalReasignacionExitosa}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-teal-700 text-xl font-bold">
              ✅ Cita Reasignada Exitosamente
            </DialogTitle>
            <DialogDescription>
              La cita ha sido reasignada correctamente.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="justify-center">
            <Button
              className="mt-2 bg-teal-700 text-white hover:bg-teal-800"
              onClick={() => setModalReasignacionExitosa(false)}
            >
              Cerrar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal Éxito Cancelación */}
      <Dialog open={modalCancelacionExitosa} onOpenChange={setModalCancelacionExitosa}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-teal-700 text-xl font-bold">
              ✅ Cita Cancelada
            </DialogTitle>
            <DialogDescription>
              La cita fue cancelada exitosamente.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="justify-center">
            <Button
              className="mt-2 bg-teal-700 text-white hover:bg-teal-800"
              onClick={() => setModalCancelacionExitosa(false)}
            >
              Cerrar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {!loading && citas.length === 0 && documento && !error && (
        <p className="text-gray-500 text-center mt-6 italic">
          No se encontraron citas asignadas para este documento.
        </p>
      )}
    </div>
  );
}

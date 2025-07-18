'use client';

import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface RecordMedico {
  id: number;
  recordMedico: string;
  fechaRegistro: string;
  signosVitales: string;
  motivoConsulta: string;
  especialidad: string;
  diagnostico: string;
  nombreMedico: string;
}

interface HistoriaClinicaData {
  idUsuario: number;
  documentoIdentidad: string;
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  rol: string;
  idPaciente: number;
  historialMedico: string;
  fechaNacimiento: string;
  sexo: string;
  ultimaCita: string;
  proximaCita: string;
  hcId: number;
  numeroHistoria: number;
  fechaCreacion: string;
  contactoEmergencia: string;
  telefonoEmergencia: number | string;
  antecedentesMedicos: string;
  direccion: string;
  records: RecordMedico[];
}

export default function HistoriaClinicaPage() {
  const [documento, setDocumento] = useState('');
  const [historia, setHistoria] = useState<HistoriaClinicaData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleBuscar = async () => {
    if (!documento) {
      setError('Por favor ingresa un documento.');
      setHistoria(null);
      return;
    }

    setLoading(true);
    setError('');
    setHistoria(null);

    try {
      const response = await axios.get<HistoriaClinicaData[]>(
        `http://localhost:8080/paciente/historiaClinicaPa/documento/${documento}`
      );

      if (response.status !== 200 || !response.data || response.data.length === 0) {
        setError('No se encontró la historia clínica para ese documento.');
        setHistoria(null);
      } else {
        setHistoria(response.data[0]);
      }
    } catch (err) {
      setError('Error al obtener la historia clínica.');
      setHistoria(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-6 text-teal-700">Consultar Historia Clínica</h1>

      {!historia && !loading && (
        <div className="flex gap-3 mb-6">
          <Input
            placeholder="Ingrese documento de identidad"
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            className="flex-1"
          />
          <Button
            onClick={handleBuscar}
            disabled={loading || !documento}
            className="bg-teal-600 hover:bg-teal-700 text-white"
          >
            Buscar
          </Button>
          <Link href="/dashboard/paciente" passHref>
            <Button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg shadow-sm">
              Volver
            </Button>
          </Link>
        </div>
      )}

      {loading && <p className="mb-6 text-teal-700 font-semibold">Buscando historia clínica...</p>}

      {error && <p className="text-red-600 mb-6">{error}</p>}

      {historia && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-teal-700">
              Historia Clínica #{historia.numeroHistoria}
            </h2>

            <div className="flex justify-end gap-4">
              <Button
                onClick={() => {
                  setHistoria(null);
                  setDocumento('');
                  setError('');
                }}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
              >
                Cerrar historia clínica
              </Button>

              <Link href="/dashboard/paciente" passHref>
                <Button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded">
                  Volver al panel
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-bold text-teal-700 mb-2">Datos del Paciente</h3>
              <p><strong>Nombre:</strong> {historia.nombre} {historia.apellido}</p>
              <p><strong>Documento:</strong> {historia.documentoIdentidad}</p>
              <p><strong>Fecha de Nacimiento:</strong> {historia.fechaNacimiento}</p>
              <p><strong>Sexo:</strong> {historia.sexo === 'M' ? 'Masculino' : 'Femenino'}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-teal-700 mb-2">Contacto</h3>
              <p><strong>Teléfono:</strong> {historia.telefono}</p>
              <p><strong>Correo:</strong> {historia.correo}</p>
              <p><strong>Dirección:</strong> {historia.direccion}</p>
              <p><strong>Contacto Emergencia:</strong> {historia.contactoEmergencia} ({historia.telefonoEmergencia})</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-teal-700 mb-2">Antecedentes Médicos</h3>
            <p>{historia.antecedentesMedicos || 'No registrado'}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-teal-700 mb-2">Historial Médico General</h3>
            <p>{historia.historialMedico || 'No registrado'}</p>
          </div>

          <div>
            <h3 className="flex justify-between items-center text-xl font-bold text-teal-700 mb-4">
              Registros Médicos <span className="text-gray-600 font-normal">{historia.records.length} registro(s)</span>
            </h3>

            {historia.records.length === 0 ? (
              <p className="italic text-gray-600">No hay registros médicos disponibles.</p>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {historia.records.map((record) => (
                  <div key={record.id} className="bg-gray-100 p-4 rounded shadow-sm">
                    <div className="flex justify-between mb-2">
                      <strong>{record.fechaRegistro}</strong>
                      <span className="bg-teal-600 text-white text-xs px-2 py-1 rounded">{record.especialidad}</span>
                    </div>
                    <p><strong>Motivo:</strong> {record.motivoConsulta}</p>
                    <p><strong>Diagnóstico:</strong> {record.diagnostico}</p>
                    <p><strong>Signos Vitales:</strong> {record.signosVitales}</p>
                    <p><strong>Médico:</strong> {record.nombreMedico}</p>
                    <div className="bg-gray-200 p-2 rounded mt-2">
                      <p><strong>Notas:</strong> {record.recordMedico}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

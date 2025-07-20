'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import axios from 'axios';

const PersonalInfo = () => {
  const [datos, setDatos] = useState<any>(null);
  const [documento, setDocumento] = useState('');
  const [buscado, setBuscado] = useState(false);
  const [error, setError] = useState('');

  const buscarDatos = () => {
    if (!documento) return;

    axios
      .get(`http://localhost:8080/paciente/datosPersonales/${documento}`)
      .then(response => {
        setDatos(response.data);
        setBuscado(true);
        setError('');
      })
      .catch(err => {
        setError('No se encontraron datos para ese documento.');
        setDatos(null);
        setBuscado(false);
      });
  };

  return (
    <div className="flex flex-col items-center bg-gray-100" style={{ minHeight: '100vh', width: '100%' }}>
      {!buscado && (
        <div className="my-10">
          <label className="block text-sm font-medium text-gray-700 mb-2">Ingrese documento del paciente:</label>
          <input
            type="text"
            value={documento}
            onChange={e => setDocumento(e.target.value)}
            className="border px-4 py-2 rounded mr-2"
          />
          <Button className="bg-teal-700 text-white hover:bg-teal-800" onClick={buscarDatos}>
            Buscar
          </Button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      )}

      {datos && (
        <div className="grid grid-cols-2 bg-white shadow-lg rounded-lg" style={{ width: '81vw', height: '70vh' }}>
          {/* Columna derecha */}
          <div className="p-8 space-y-2">
            <div className="flex justify-center items-center bg-gray-200 rounded-lg border border-gray-300" style={{ height: '34.5%', width: '100%' }}>
              <div>
                <img
                  src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-vert.png"
                  alt="Patient Photograph"
                  className="h-40 w-40 rounded-full border border-gray-400"
                />
              </div>

              <div>
                <div className="p-8 space-y-5 border-r border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-700 text-center mb-6">Datos clínicos</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Número Seguro</label>
                      <p className="mt-1 text-gray-800">{datos.paciente.numeroSeguro}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Número Historia</label>
                      <p className="mt-1 text-gray-800">{datos.paciente.historiaClinica.numeroHistoria}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Antecedentes Médicos</label>
                      <p className="mt-1 text-gray-800">{datos.paciente.historiaClinica.antecedentesMedicos}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Datos personales */}
            <div className="space-y-3 bg-gray-50 p-6 rounded-lg border border-gray-300" style={{ height: '54.5%', width: '100%' }}>
              <h3 className="text-lg font-semibold text-gray-700 text-center mb-6">Datos Personales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div><label className="block text-sm font-medium text-gray-600">Documento Identidad</label><p className="text-gray-800">{datos.documentoIdentidad}</p></div>
                  <div><label className="block text-sm font-medium text-gray-600">Nombre</label><p className="text-gray-800">{datos.nombre}</p></div>
                  <div><label className="block text-sm font-medium text-gray-600">Apellido</label><p className="text-gray-800">{datos.apellido}</p></div>
                  <div><label className="block text-sm font-medium text-gray-600">Teléfono</label><p className="text-gray-800">{datos.telefono || 'No disponible'}</p></div>
                  <div><label className="block text-sm font-medium text-gray-600">Correo</label><p className="text-gray-800">{datos.correo}</p></div>
                </div>

                <div className="space-y-3">
                  <div><label className="block text-sm font-medium text-gray-600">Dirección</label><p className="text-gray-800">{datos.paciente.direccion}</p></div>
                  <div><label className="block text-sm font-medium text-gray-600">Sexo</label><p className="text-gray-800">{datos.paciente.sexo || 'No especificado'}</p></div>
                  <div><label className="block text-sm font-medium text-gray-600">Teléfono de Emergencia</label><p className="text-gray-800">{datos.paciente.historiaClinica.telefonoEmergencia}</p></div>
                  <div><label className="block text-sm font-medium text-gray-600">Fecha de Nacimiento</label><p className="text-gray-800">{datos.paciente.fechaNacimiento}</p></div>
                  <div className="flex justify-end">
                    <Link href={`/dashboard/paciente/editDatosPersonales?documento=${datos.documentoIdentidad}`}>
                      <Button className="text-sm px-5 py-2 bg-teal-700 text-white rounded hover:bg-teal-800 transition">
                        Actualizar
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna izquierda - Records médicos */}
          <div className="p-8 space-y-6 border-r border-gray-200">
            <h2 className="text-xl font-bold text-gray-700">Records Médicos</h2>
            <div className="space-y-4">
              {datos.paciente.historiaClinica.recordsMedicos.length > 0 ? (
                <>
                  <div className="flex items-center gap-2"><label className="text-sm font-medium text-gray-600 min-w-[120px]">Fecha registro:</label><p className="text-gray-800">{datos.paciente.historiaClinica.recordsMedicos[0]?.fechaRegistro}</p></div>
                  <div className="flex items-center gap-2"><label className="text-sm font-medium text-gray-600 min-w-[120px]">Signos Vitales:</label><p className="text-gray-800">{datos.paciente.historiaClinica.recordsMedicos[0]?.signosVitales}</p></div>
                  <div className="flex items-center gap-2"><label className="text-sm font-medium text-gray-600 min-w-[120px]">Motivo Consulta:</label><p className="text-gray-800">{datos.paciente.historiaClinica.recordsMedicos[0]?.motivoConsulta}</p></div>
                  <div className="flex items-center gap-2"><label className="text-sm font-medium text-gray-600 min-w-[120px]">Especialidad:</label><p className="text-gray-800">{datos.paciente.historiaClinica.recordsMedicos[0]?.especialidad}</p></div>
                  <div className="flex items-center gap-2"><label className="text-sm font-medium text-gray-600 min-w-[120px]">Diagnóstico:</label><p className="text-gray-800">{datos.paciente.historiaClinica.recordsMedicos[0]?.diagnostico}</p></div>
                  <div className="flex items-center gap-2"><label className="text-sm font-medium text-gray-600 min-w-[120px]">Nombre Médico:</label><p className="text-gray-800">{datos.paciente.historiaClinica.recordsMedicos[0]?.nombreMedico}</p></div>
                </>
              ) : (
                <p className="text-gray-500">No hay records médicos disponibles.</p>
              )}
            </div>
            <div className="flex gap-[2vw] mt-4">
              <Link href="/dashboard/paciente">
                <Button className="bg-gray-500 text-white hover:bg-gray-600">
                  Volver
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;

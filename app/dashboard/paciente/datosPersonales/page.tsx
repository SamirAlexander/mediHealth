"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import axios from 'axios';

const Personalinfo = () => {
  const [datos, setDatos] = useState<any>(null);

  useEffect(() => {
    axios.get('http://localhost:8080/paciente/datosPersonales/667788990')
      .then(response => {
        setDatos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-100" style={{ height: '70vh', width: '81vw' }}>
      <div className="grid grid-cols-2 bg-white shadow-lg rounded-lg" style={{ height: '100%', width: '100%' }}>

        {/* Columna derecha */}
        <div className="p-8 space-y-2">

          <div className="flex justify-center items-center bg-gray-200 rounded-lg border border-gray 300" style={{ height: '34.5%', width: '100%' }}>
            <div className="">
              <img src="https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252319_1200.jpg" alt="Patient Photograph" className="h-40 w-40 rounded-full border border-gray-400" />
            </div>

            <div>
              <div className="p-8 space-y-5  border-r border-gray-200 pr 1">
                <h3 className="text-lg font-semibold text-gray-700 text-center mb-6">Datos clínicos</h3>
                <div className="space-y-3">
                  <div><label className="block text-sm font-medium text-gray-600">Número Seguro</label><p className="mt-1 text-gray-800">{datos?.paciente.numeroSeguro}</p></div>
                  <div><label className="block text-sm font-medium text-gray-600">Número Historia</label><p className="mt-1 text-gray-800">{datos?.paciente.historiaClinica.numeroHistoria}</p></div>
                  <div><label className="block text-sm font-medium text-gray-600">Antecedentes Médicos</label><p className="mt-1 text-gray-800">{datos?.paciente.historiaClinica.antecedentesMedicos}</p></div>
                </div>
              </div>
            </div>

          </div>

          {/* Datos personales */}
          <div className="space-y-3 bg-gray-50 p-6 rounded-lg border border-gray-300" style={{ height: '54.5%', width: '100%' }}>
            <h3 className="text-lg font-semibold text-gray-700 text-center mb-6">Datos Personales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Columna izquierda */}
              <div className="space-y-3">
                <div><label className="block text-sm font-medium text-gray-600">Documento Identidad</label><p className="mt 2 text-gray-800">{datos?.documentoIdentidad}</p></div>
                <div><label className="block text-sm font-medium text-gray-600">Nombre</label><p className="mt 2 text-gray-800">{datos?.nombre}</p></div>
                <div><label className="block text-sm font-medium text-gray-600">Apellido</label><p className="mt 2 text-gray-800">{datos?.apellido}</p></div>
                <div><label className="block text-sm font-medium text-gray-600">Teléfono</label><p className="mt 2 text-gray-800">{datos?.telefono}</p></div>
                <div><label className="block text-sm font-medium text-gray-600">Correo</label><p className="mt 2 text-gray-800">{datos?.correo}</p></div>
              </div>
              {/* Columna derecha */}
              <div className="space-y-3">
                <div><label className="block text-sm font-medium text-gray-600">Dirección</label><p className="mt 2 text-gray-800">{datos?.paciente.direccion}</p></div>
                <div><label className="block text-sm font-medium text-gray-600">Sexo</label><p className="mt 2 text-gray-800">{datos?.paciente.sexo}</p></div>
                <div><label className="block text-sm font-medium text-gray-600">Teléfono de Emergencia</label><p className="mt 2 text-gray-800">{datos?.paciente.historiaClinica.telefonoEmergencia}</p></div>
                <div><label className="block text-sm font-medium text-gray-600">Fecha de Nacimiento</label><p className="mt 2 text-gray-800">{datos?.paciente.fechaNacimiento}</p></div>
                <div className="flex justify-end space-y 15">
                  <Link href="/dashboard/paciente/editDatosPersonales">
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
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-600 min-w-[120px]">Fecha registro:</label>
              <p className="text-gray-800">{datos?.paciente.historiaClinica.recordsMedicos[0]?.fechaRegistro}</p>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-600 min-w-[120px]">Signos Vitales:</label>
              <p className="text-gray-800">{datos?.paciente.historiaClinica.recordsMedicos[0]?.signosVitales}</p>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-600 min-w-[120px]">Motivo Consulta:</label>
              <p className="text-gray-800">{datos?.paciente.historiaClinica.recordsMedicos[0]?.motivoConsulta}</p>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-600 min-w-[120px]">Especialidad:</label>
              <p className="text-gray-800">{datos?.paciente.historiaClinica.recordsMedicos[0]?.especialidad}</p>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-600 min-w-[120px]">Diagnóstico:</label>
              <p className="text-gray-800">{datos?.paciente.historiaClinica.recordsMedicos[0]?.diagnostico}</p>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-600 min-w-[120px]">Nombre Médico:</label>
              <p className="text-gray-800">{datos?.paciente.historiaClinica.recordsMedicos[0]?.nombreMedico}</p>
            </div>
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
    </div>
  );
};

export default Personalinfo;

"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import axios from 'axios';

const Personalinfo = () => {
    const [datos, setDatos] = useState<any>(null);

    useEffect(() => {
        axios.get('http://localhost:8080/medico/datossPersonales/444000999')
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
                            <img src="https://us.123rf.com/450wm/alenanv/alenanv2206/alenanv220600054/187643487-m%C3%A9dico-avatar-redondo-medicina-avatar-plano-con-m%C3%A9dico-masculino-cl%C3%ADnica-m%C3%A9dica-equipo.jpg?ver=6" alt="Patient Photograph" className="h-40 w-40 rounded-full border border-gray-400" />
                        </div>

                        <div>
                            <div className="p-8 space-y-5  border-r border-gray-200 pr 1">
                                <h3 className="text-lg font-semibold text-gray-700 text-center mb-6">Datos clínicos</h3>
                                <div className="space-y-3">
                                    <div><label className="block text-sm font-medium text-gray-600">dependencia</label><p className="mt-1 text-gray-800">{datos?.medico.dependencia}</p></div>
                                    <div><label className="block text-sm font-medium text-gray-600">Número Licencia</label><p className="mt-1 text-gray-800">{datos?.medico.numeroLicencia}</p></div>
                                    <div><label className="block text-sm font-medium text-gray-600">Especialidad</label><p className="mt-1 text-gray-800">{datos?.medico.especialidad}</p></div>
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

                            <div className="flex justify-end space-y 15">
                                <Link href="/dashboard/medico/editDatossPersonales">
                                    <Button className="text-sm px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
                                        Actualizar
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex gap-[2vw] mt-4">
                    <Link href="/dashboard/medico">
                        <Button className="bg-gray-500 text-white hover:bg-gray-600">
                            Volver
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Personalinfo;

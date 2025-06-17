'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const NuevoRecordMedico = () => {
    const [formData, setFormData] = useState({
        motivoConsulta: '',
        diagnostico: '',
        fechaRegistro: '',
        signosVitales: '',
        recordMedico: '',
        especialidad: '',
        nombreMedico: '',
    });

    const [success, setSuccess] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const hcId = searchParams.get('hcId');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/medico/nuevoRecordMedico/${hcId}`, {
                ...formData,
                hcId,
            });

            setSuccess(true);

            // Opcional: Esperar 1 segundo antes de redirigir
            setTimeout(() => {
                router.push(`/dashboard/medico`);
            }, 1000);

        } catch (err) {
            console.error('Error al registrar:', err);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <Card className="w-full max-w-2xl shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-gray-800">Nuevo Record Médico</CardTitle>
                </CardHeader>

                {success && (
                    <div className="bg-green-100 text-green-800 px-4 py-2 mx-6 mt-2 rounded-md font-semibold border border-green-300">
                        ✅ Record Médico Creado Exitosamente.
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="fechaRegistro" className="text-teal-700 font-bold">Fecha de Registro</Label>
                            <Input type="date" name="fechaRegistro" onChange={handleChange} required />
                        </div>
                        <div>
                            <Label htmlFor="motivoConsulta" className="text-teal-700 font-bold">Motivo de Consulta</Label>
                            <Input name="motivoConsulta" onChange={handleChange} required />
                        </div>
                        <div>
                            <Label htmlFor="diagnostico" className="text-teal-700 font-bold">Diagnóstico</Label>
                            <Input name="diagnostico" onChange={handleChange} required />
                        </div>
                        <div>
                            <Label htmlFor="signosVitales" className="text-teal-700 font-bold">Signos Vitales</Label>
                            <Input name="signosVitales" onChange={handleChange} required />
                        </div>
                        <div>
                            <Label htmlFor="especialidad" className="text-teal-700 font-bold">Especialidad</Label>
                            <Input name="especialidad" onChange={handleChange} required />
                        </div>
                        <div>
                            <Label htmlFor="nombreMedico" className="text-teal-700 font-bold">Nombre del Médico</Label>
                            <Input name="nombreMedico" onChange={handleChange} required />
                        </div>
                        <div>
                            <Label htmlFor="recordMedico" className="text-teal-700 font-bold">Notas</Label>
                            <textarea
                                name="recordMedico"
                                rows={8}
                                onChange={handleChange}
                                required
                                className="w-full rounded-md border border-gray-300 px-4 py-4 text-base shadow-sm focus:border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700"
                                placeholder="Notas detalladas del registro médico..."
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="bg-teal-700 text-white hover:bg-[#2B8ABA]">Guardar Registro</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
};

export default NuevoRecordMedico;

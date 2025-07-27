"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const CrearAgenda = () => {
    const [formulario, setFormulario] = useState({
        fechaInicio: "",
        fechaFin: "",
        numeroConsultorios: "",
        horaInicioJornada: "",
        horaFinJornada: "",
        duracionCitaMinutos: "",
        estadoDiaDefault: "Disponible",
    });

    const [resultado, setResultado] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setResultado(null);

        try {
            const response = await axios.post("http://localhost:8080/administrador/agenda", {
                ...formulario,
                numeroConsultorios: parseInt(formulario.numeroConsultorios),
                duracionCitaMinutos: parseInt(formulario.duracionCitaMinutos),
            });
            setResultado(response.data);
        } catch (err: any) {
            setError(err.response?.data?.message || "Error al crear la agenda");
        }
    };

    return (
        <div className="flex flex-col items-center mt-10 gap-6">
            {!resultado && (
                <Card className="w-full max-w-2xl shadow-xl border border-gray-200">
                    <CardHeader>
                        <CardTitle className="text-xl text-teal-700">Crear Agenda Médica</CardTitle>
                    </CardHeader>

                    <form onSubmit={handleSubmit}>
                        <CardContent className="grid gap-4">
                            {[
                                { label: "Fecha Inicio", name: "fechaInicio", type: "date" },
                                { label: "Fecha Fin", name: "fechaFin", type: "date" },
                                { label: "Número de Consultorios", name: "numeroConsultorios", type: "number" },
                                { label: "Hora Inicio Jornada", name: "horaInicioJornada", type: "time" },
                                { label: "Hora Fin Jornada", name: "horaFinJornada", type: "time" },
                                { label: "Duración Cita (minutos)", name: "duracionCitaMinutos", type: "number" },
                                { label: "Estado por defecto", name: "estadoDiaDefault", type: "text" },
                            ].map(({ label, name, type }) => (
                                <div key={name}>
                                    <Label className="text-teal-700">{label}</Label>
                                    <Input
                                        type={type}
                                        name={name}
                                        value={(formulario as any)[name]}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            ))}
                        </CardContent>

                        <CardFooter className="flex justify-between items-center gap-4">
                            <Link href="/dashboard/administrador" passHref>
                                <Button className="bg-gray-600 hover:bg-gray-700 text-white">
                                    Volver
                                </Button>
                            </Link>
                            <Button className="bg-teal-700 hover:bg-teal-800 text-white" type="submit">
                                Crear Agenda
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            )}

            {resultado && (
                <div className="w-full max-w-2xl p-6 bg-green-100 rounded-lg text-green-800 border border-green-300 shadow">
                    <p className="text-lg font-semibold mb-2">✅ {resultado.message}</p>
                    <p>Total agendas creadas: {resultado.totalAgendasCreadas}</p>
                    <p>Total detalles creados: {resultado.totalDetallesCreados}</p>
                    <p className="mt-2">Fechas generadas:</p>
                    <ul className="list-disc list-inside mb-4">
                        {resultado.fechasGeneradas.map((fecha: string, index: number) => (
                            <li key={index}>{fecha}</li>
                        ))}
                    </ul>

                    <div className="flex justify-end gap-4 mt-4">
                        <Button
                            className="bg-gray-600 hover:bg-gray-700 text-white"
                            onClick={() => setResultado(null)}
                        >
                            Volver a Agenda
                        </Button>
                        <Link href="/dashboard/administrador" passHref>
                            <Button className="bg-teal-700 hover:bg-teal-800 text-white">
                                Volver al Panel
                            </Button>
                        </Link>
                    </div>
                </div>
            )}

            {error && (
                <div className="w-full max-w-2xl p-4 bg-red-100 rounded-lg text-red-800 border border-red-300 shadow">
                    <strong>Error:</strong> {error}
                </div>
            )}
        </div>
    );
};

export default CrearAgenda;

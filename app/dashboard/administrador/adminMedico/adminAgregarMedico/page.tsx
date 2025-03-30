"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { redirect } from "next/dist/server/api-utils"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    idUsuario: z.number().min(1, {
        message: "Username must be at least 2 characters.",
    }),
    documentoIdentidad: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    nombre: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    apellido: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    telefono: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    correo: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    contrasena: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    rol: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    idMedico: z.string().min(1, {
        message: "Username must be at least 2 characters.",
    }),
    dependencia: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    horarioTrabajo: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    numeroLicencia: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    areaEspecializacion: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    noConsultorio: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
});

export default function ProfileForm() {
    // 1. Define your form.

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            idUsuario: 1,
            documentoIdentidad: "",
            nombre: "",
            apellido: "",
            telefono: "",
            correo: "",
            contrasena: "",
            rol: "",
            idMedico: "",
            dependencia: "",
            horarioTrabajo: "",
            numeroLicencia: "",
            areaEspecializacion: "",
            noConsultorio: "",
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        const { idUsuario, ...dataWithoutId } = values
        try {
            axios.post(`http://localhost:8080/administrador/medicos`, dataWithoutId);
            console.log("SE AGREGO MEDICO");
            window.location.href = "./"
        } catch (error) {
            console.log("HUBO ERROR AL AGREGAR MEDICO " + error)
        }
    }

    return (
        <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
            <div className="w-[40vw] bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-center mb-4">Agregar Médico</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
                        <FormField control={form.control} name="idUsuario" render={({ field }) => (
                            <FormItem>
                                <FormLabel>ID Usuario</FormLabel>
                                <FormControl><Input placeholder="" {...field} readOnly /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="documentoIdentidad" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Identificación</FormLabel>
                                <FormControl><Input placeholder="" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="nombre" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre</FormLabel>
                                <FormControl><Input placeholder="" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="apellido" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Apellido</FormLabel>
                                <FormControl><Input placeholder="" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="telefono" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Teléfono</FormLabel>
                                <FormControl><Input placeholder="" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="correo" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Correo</FormLabel>
                                <FormControl><Input placeholder="" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="contrasena" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contraseña</FormLabel>
                                <FormControl><Input placeholder="" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="rol" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Rol</FormLabel>
                                <FormControl><Input placeholder="" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="idMedico" render={({ field }) => (
                            <FormItem>
                                <FormLabel>ID Médico</FormLabel>
                                <FormControl><Input placeholder="" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="dependencia" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Dependencia</FormLabel>
                                <FormControl><Input placeholder="" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="horarioTrabajo" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Horario de Trabajo</FormLabel>
                                <FormControl><Input placeholder="" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="numeroLicencia" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Número de Licencia</FormLabel>
                                <FormControl><Input placeholder="" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="areaEspecializacion" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Área de Especialización</FormLabel>
                                <FormControl><Input placeholder="" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="noConsultorio" render={({ field }) => (
                            <FormItem>
                                <FormLabel>No de Consultorio</FormLabel>
                                <FormControl><Input placeholder="" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <div className="col-span-2">
                            <Button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                                Agregar
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}

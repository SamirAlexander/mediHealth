"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    idUsuario: z.number().min(1, {
        message: "Username must be at least 2 characters.",
    }),
    documentoIdentidad: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    nombre: z.string().min(1, {
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
    idPaciente: z.number().min(1, {
        message: "Username must be at least 2 characters.",
    }),
    historialMedico: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    numeroSeguro: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    fechaNacimiento: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    sexo: z.string().min(1, {
        message: "Username must be at least 2 characters.",
    }),
    direccion: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    ultimaCita: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    proximaCita: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }) || z.null,
})

export default function page({ dataInfo }: any) {

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            idUsuario: dataInfo.usuario.idUsuario,
            documentoIdentidad: dataInfo.usuario.documentoIdentidad,
            nombre: dataInfo.usuario.nombre,
            apellido: dataInfo.usuario.apellido,
            telefono: dataInfo.usuario.telefono,
            correo: dataInfo.usuario.correo,
            contrasena: dataInfo.usuario.contrasena,
            rol: dataInfo.usuario.rol,
            idPaciente: dataInfo.idPaciente,
            historialMedico: dataInfo.historiaClinica.numeroHistoria,
            numeroSeguro: dataInfo.numeroSeguro,
            fechaNacimiento: dataInfo.fechaNacimiento,
            sexo: dataInfo.sexo,
            direccion: dataInfo.direccion,
            ultimaCita: dataInfo.ultimaCita,
            proximaCita: dataInfo.proximaCita
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        const { idUsuario, ...dataWithoutId } = values
        try {
            axios.put(`http://localhost:8080/administrador/pacientes/${values.idUsuario}`, dataWithoutId);
            console.log("SE GUARDÓ PACIENTE");
            window.location.reload()
        } catch (error) {
            console.log("HUBO ERROR AL GUARDAR PACIENTE " + error)
        }
    }

    return (
        <div className="flex justify-center items-start min-h-screen bg-gray-100 py-8">
            <div className="w-[40vw] bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                {/* Botón volver arriba derecha */}
                <div className="flex justify-end mb-2">
                    <Button
                        type="button"
                        onClick={() =>
                        (window.location.href =
                            "http://localhost:3000/dashboard/administrador/adminPaciente")
                        }
                        className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition"
                    >
                        Volver
                    </Button>
                </div>

                {/* Título centrado debajo del botón */}
                <div className="flex justify-center mb-6">
                    <h2 className="text-xl font-semibold text-teal-700 text-center">
                        Editar Paciente
                    </h2>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="idUsuario"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ID Usuario</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} readOnly />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="documentoIdentidad"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Documento de Identidad</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="nombre"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="apellido"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Apellido</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="telefono"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Teléfono</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="correo"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Correo</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="contrasena"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Contraseña</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="rol"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Rol</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="idPaciente"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Id Paciente</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="historialMedico"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Historial Medico</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="numeroSeguro"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Número de Seguro</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="fechaNacimiento"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Fecha de Nacimiento</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="sexo"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Sexo</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="direccion"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Dirección</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ultimaCita"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ultima Cita</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="proximaCita"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Proxima Cita</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="col-span-2">
                            <Button
                                type="submit"
                                className="w-full bg-teal-700 text-white py-2 rounded-lg hover:bg-teal-800 transition"
                            >
                                Actualizar
                            </Button>
                        </div>

                    </form>
                </Form>
            </div>
        </div>
    )
}


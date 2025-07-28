"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
    idAdmin: z.string().min(1, {
        message: "Username must be at least 2 characters.",
    }),
    departamento: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    nivelAcceso: z.string().min(1, {
        message: "Username must be at least 2 characters.",
    }),
    idAuxAdmin: z.string().min(1, {
        message: "Username must be at least 2 characters.",
    }),
    areaAsignada: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    tareasAsignadas: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
});

export default function page() {


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
            idAdmin: "",
            departamento: "",
            nivelAcceso: "",
            idAuxAdmin: "",
            areaAsignada: "",
            tareasAsignadas: "",
        },
    });


    
    function onSubmit(values: z.infer<typeof formSchema>) {
        const { idUsuario, ...dataWithoutId } = values;
        try {
            axios.post(`http://localhost:8080/administrador/administradores`, dataWithoutId);
            console.log("SE AGREGO ADMINISTRADOR");
            window.location.href = "./";
        } catch (error) {
            console.log("HUBO ERROR AL AGREGAR ADMINISTRADOR " + error);
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
                            "http://localhost:3000/dashboard/administrador/adminAdministrador")
                        }
                        className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition"
                    >
                        Volver
                    </Button>
                </div>

                {/* Título centrado debajo del botón */}
                <div className="flex justify-center mb-6">
                    <h2 className="text-xl font-semibold text-teal-700 text-center">
                        Agregar Administrador
                    </h2>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
                        {/* Aquí los campos iguales */}
                        <FormField
                            control={form.control}
                            name="idUsuario"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ID Usuario</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} readOnly />
                                    </FormControl>

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
                                        <Input placeholder="" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* ...otros campos iguales... */}
                        <FormField
                            control={form.control}
                            name="nombre"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} />
                                    </FormControl>

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
                                        <Input placeholder="" {...field} />
                                    </FormControl>

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
                                        <Input placeholder="" {...field} />
                                    </FormControl>

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
                                        <Input placeholder="" {...field} />
                                    </FormControl>

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
                                        <Input placeholder="" {...field} />
                                    </FormControl>

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
                                        <Input placeholder="" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="idAdmin"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ID Admin</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="departamento"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Departamento</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="nivelAcceso"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nivel de Acceso</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="idAuxAdmin"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ID Auxiliar de Admin</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="areaAsignada"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Área Asignada</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="tareasAsignadas"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tareas Asignadas</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="col-span-2">
                            <Button
                                type="submit"
                                className="w-full bg-teal-700 text-white py-2 rounded-lg hover:bg-teal-800 transition"
                            >
                                Agregar
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}

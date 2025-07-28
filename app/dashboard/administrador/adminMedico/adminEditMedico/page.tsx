"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import axios from "axios";

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
  idMedico: z.number().min(1, {
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

export default function ProfileForm({ dataInfo }: any) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      idUsuario: dataInfo.idUsuario,
      documentoIdentidad: dataInfo.documentoIdentidad,
      nombre: dataInfo.nombre,
      apellido: dataInfo.apellido,
      telefono: dataInfo.telefono,
      correo: dataInfo.correo,
      contrasena: dataInfo.contrasena,
      rol: dataInfo.rol,
      idMedico: dataInfo.idMedico,
      dependencia: dataInfo.dependencia,
      horarioTrabajo: dataInfo.horarioTrabajo,
      numeroLicencia: dataInfo.numeroLicencia,
      areaEspecializacion: dataInfo.areaEspecializacion,
      noConsultorio: dataInfo.noConsultorio,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { idUsuario, ...dataWithoutId } = values;
    try {
      axios.put(`http://localhost:8080/administrador/medicos/${values.idUsuario}`, dataWithoutId);
      console.log("SE GUARDÓ MÉDICO");
      window.location.reload();
    } catch (error) {
      console.log("HUBO ERROR AL GUARDAR MÉDICO " + error);
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
              "http://localhost:3000/dashboard/administrador/adminMedico")
            }
            className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition"
          >
            Volver
          </Button>
        </div>

        {/* Título centrado debajo del botón */}
        <div className="flex justify-center mb-6">
          <h2 className="text-xl font-semibold text-teal-700 text-center">
            Agregar Médico
          </h2>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 ml-[-10px]">
            <FormField control={form.control} name="idUsuario" render={({ field }) => (
              <FormItem>
                <FormLabel>ID Usuario</FormLabel>
                <FormControl><Input placeholder="shadcn" {...field} readOnly /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="documentoIdentidad" render={({ field }) => (
              <FormItem>
                <FormLabel>Identificación</FormLabel>
                <FormControl><Input placeholder="shadcn" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="nombre" render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl><Input placeholder="shadcn" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="apellido" render={({ field }) => (
              <FormItem>
                <FormLabel>Apellido</FormLabel>
                <FormControl><Input placeholder="shadcn" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="telefono" render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl><Input placeholder="shadcn" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="correo" render={({ field }) => (
              <FormItem>
                <FormLabel>Correo</FormLabel>
                <FormControl><Input placeholder="shadcn" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="contrasena" render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl><Input placeholder="shadcn" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="rol" render={({ field }) => (
              <FormItem>
                <FormLabel>Rol</FormLabel>
                <FormControl><Input placeholder="shadcn" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="idMedico" render={({ field }) => (
              <FormItem>
                <FormLabel>ID Médico</FormLabel>
                <FormControl><Input placeholder="shadcn" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="dependencia" render={({ field }) => (
              <FormItem>
                <FormLabel>Dependencia</FormLabel>
                <FormControl><Input placeholder="shadcn" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="horarioTrabajo" render={({ field }) => (
              <FormItem>
                <FormLabel>Horario de Trabajo</FormLabel>
                <FormControl><Input placeholder="shadcn" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="numeroLicencia" render={({ field }) => (
              <FormItem>
                <FormLabel>Número de Licencia</FormLabel>
                <FormControl><Input placeholder="shadcn" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="areaEspecializacion" render={({ field }) => (
              <FormItem>
                <FormLabel>Área de Especialización</FormLabel>
                <FormControl><Input placeholder="shadcn" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="noConsultorio" render={({ field }) => (
              <FormItem>
                <FormLabel>No de Consultorio</FormLabel>
                <FormControl><Input placeholder="shadcn" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
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
  );
}

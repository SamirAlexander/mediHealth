"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

const formSchema = z.object({
  idUsuario: z.number(),
  documentoIdentidad: z.string().min(2, "Debe tener al menos 2 caracteres."),
  nombre: z.string().min(1, "El nombre es obligatorio."),
  apellido: z.string().min(2, "Debe tener al menos 2 caracteres."),
  telefono: z.string().min(2, "Debe tener al menos 2 caracteres."),
  correo: z.string().email("Debe ser un correo válido."),
});

export default function Page() {
  const searchParams = useSearchParams();
  const documentoQuery = searchParams.get("documento") || "";

  const [mensajeExito, setMensajeExito] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      idUsuario: 0,
      documentoIdentidad: "",
      nombre: "",
      apellido: "",
      telefono: "",
      correo: "",
    },
  });

  useEffect(() => {
    if (!documentoQuery) return;

    axios
      .get(`http://localhost:8080/medico/datossPersonales/${documentoQuery}`)
      .then((response) => {
        const data = response.data;
        form.reset({
          idUsuario: data.idUsuario,
          documentoIdentidad: data.documentoIdentidad,
          nombre: data.nombre,
          apellido: data.apellido,
          telefono: data.telefono,
          correo: data.correo,
        });
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
      });
  }, [documentoQuery, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.put(
        `http://localhost:8080/medico/datossPersonales/${values.documentoIdentidad}`,
        {
          idUsuario: values.idUsuario,
          nombre: values.nombre,
          apellido: values.apellido,
          telefono: values.telefono,
          correo: values.correo,
        }
      );
      setMensajeExito("✅ Datos personales actualizados correctamente.");
      setTimeout(() => setMensajeExito(""), 5000);
    } catch (error) {
      console.error("Hubo un error al guardar los datos:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] w-full bg-gray-100 pt-4 pb-8">
      <div className="w-[40vw] bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-xl font-semibold text-center mb-4">Editar Datos Personales</h2>

        {/* Mensaje de éxito */}
        {mensajeExito && (
          <div className="mb-4 text-green-700 bg-green-100 border border-green-300 p-2 rounded text-center">
            {mensajeExito}
          </div>
        )}

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { name: "idUsuario", label: "ID Usuario", readOnly: true },
              { name: "documentoIdentidad", label: "Documento Identidad", readOnly: true },
              { name: "nombre", label: "Nombre" },
              { name: "apellido", label: "Apellido" },
              { name: "telefono", label: "Teléfono" },
              { name: "correo", label: "Correo" },
            ].map(({ name, label, readOnly = false }) => (
              <FormField
                key={name}
                control={form.control}
                name={name as keyof z.infer<typeof formSchema>}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                      <Input {...field} readOnly={readOnly} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <div className="col-span-2">
              <Button
                type="submit"
                className="w-full bg-teal-700 text-white py-2 rounded-lg hover:bg-teal-500 transition"
              >
                Actualizar
              </Button>
            </div>

            <div className="flex col-span-2 justify-end">
              <Button
                onClick={() => window.history.back()}
                className="mt-2 bg-gray-500 text-white hover:bg-gray-600"
              >
                Volver
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

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
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";

// Esquema de validación con Zod
const formSchema = z.object({
  idUsuario: z.number(),
  documentoIdentidad: z.string().min(2, "Debe tener al menos 2 caracteres."),
  nombre: z.string().min(1, "El nombre es obligatorio."),
  apellido: z.string().min(2, "Debe tener al menos 2 caracteres."),
  telefono: z.string().min(2, "Debe tener al menos 2 caracteres."),
  correo: z.string().email("Debe ser un correo válido."),
});

export default function Page() {
  const [dataInfo, setDataInfo] = useState<any>(null);
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

  // Cargar datos del usuario cuando el componente se monte
  useEffect(() => {
    axios
      .get("http://localhost:8080/medico/datossPersonales/444000999")
      .then((response) => {
        setDataInfo(response.data);
        form.reset({
          idUsuario: response.data.idUsuario,
          documentoIdentidad: response.data.documentoIdentidad,
          nombre: response.data.nombre,
          apellido: response.data.apellido,
          telefono: response.data.telefono,
          correo: response.data.correo,
        });
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
      });
  }, [form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { documentoIdentidad, ...dataWithoutDoc } = values;

    try {
      await axios.put(
        `http://localhost:8080/medico/datossPersonales/${documentoIdentidad}`,
        dataWithoutDoc,
        {
          headers: {
            "Content-Type": "application/json",
          },
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
        <h2 className="text-xl font-semibold text-center mb-4">
          Editar Datos Personales
        </h2>

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
            {/* Campos del formulario */}
            {[
              { name: "idUsuario", label: "ID Usuario", readOnly: true },
              {
                name: "documentoIdentidad",
                label: "Documento Identidad",
                readOnly: true,
              },
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
              <Link href="/dashboard/medico/datossPersonales">
                <Button className="mt-2 bg-gray-500 text-white hover:bg-gray-600">
                  Volver
                </Button>
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

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
import { useSearchParams } from "next/navigation";

// Esquema de validación con Zod
const formSchema = z.object({
  idUsuario: z.number(),
  documentoIdentidad: z.string().min(2, "Debe tener al menos 2 caracteres."),
  nombre: z.string().min(1, "El nombre es obligatorio."),
  apellido: z.string().min(2, "Debe tener al menos 2 caracteres."),
  telefono: z.string().min(2, "Debe tener al menos 2 caracteres."),
  correo: z.string().email("Debe ser un correo válido."),
  direccion: z.string().min(2, "Debe tener al menos 2 caracteres."),
  sexo: z.string().min(1, "Debe tener al menos 1 caracter."),
  telefonoEmergencia: z.string().min(2, "Debe tener al menos 2 caracteres."),
  fechaNacimiento: z.string().min(2, "Debe tener al menos 2 caracteres."),
});

export default function EditDatosPersonales() {
  const searchParams = useSearchParams();
  const documento = searchParams.get("documento");

  const [mensajeExito, setMensajeExito] = useState("");
  const [dataInfo, setDataInfo] = useState<any>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      idUsuario: 0,
      documentoIdentidad: "",
      nombre: "",
      apellido: "",
      telefono: "",
      correo: "",
      direccion: "",
      sexo: "",
      telefonoEmergencia: "",
      fechaNacimiento: "",
    },
  });

  useEffect(() => {
    if (!documento) {
      alert("Documento no especificado en la URL");
      return;
    }

    axios
      .get(`http://localhost:8080/paciente/datosPersonales/${documento}`)
      .then((response) => {
        const data = response.data;
        setDataInfo(data);
        form.reset({
          idUsuario: data.idUsuario,
          documentoIdentidad: data.documentoIdentidad,
          nombre: data.nombre,
          apellido: data.apellido,
          telefono: data.telefono,
          correo: data.correo,
          direccion: data.paciente?.direccion ?? "",
          sexo: data.paciente?.sexo ?? "",
          telefonoEmergencia: data.paciente?.historiaClinica?.telefonoEmergencia ?? "",
          fechaNacimiento: data.paciente?.fechaNacimiento ?? "",
        });
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
        alert("No se encontraron datos para el documento especificado.");
      });
  }, [documento, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!dataInfo) {
      alert("No hay datos cargados para actualizar.");
      return;
    }

    try {
      const payload = {
        idUsuario: values.idUsuario,
        documentoIdentidad: values.documentoIdentidad,
        nombre: values.nombre,
        apellido: values.apellido,
        telefono: values.telefono,
        correo: values.correo,
        contrasena: "", // si no actualizas contraseña, envía vacía o ajusta según backend
        rol: "Paciente", // o el rol que corresponda
        paciente: {
          idPaciente: dataInfo.paciente?.idPaciente ?? null,
          historialMedico: dataInfo.paciente?.historialMedico ?? null,
          numeroSeguro: dataInfo.paciente?.numeroSeguro ?? "",
          fechaNacimiento: values.fechaNacimiento,
          sexo: values.sexo,
          direccion: values.direccion,
          ultimaCita: dataInfo.paciente?.ultimaCita ?? null,
          proximaCita: dataInfo.paciente?.proximaCita ?? null,
          historiaClinica: {
            id: dataInfo.paciente?.historiaClinica?.id ?? null,
            numeroHistoria: dataInfo.paciente?.historiaClinica?.numeroHistoria ?? null,
            fechaCreacion: dataInfo.paciente?.historiaClinica?.fechaCreacion ?? null,
            contactoEmergencia: dataInfo.paciente?.historiaClinica?.contactoEmergencia ?? "",
            telefonoEmergencia: values.telefonoEmergencia,
            antecedentesMedicos: dataInfo.paciente?.historiaClinica?.antecedentesMedicos ?? "",
            recordsMedicos: dataInfo.paciente?.historiaClinica?.recordsMedicos ?? [],
          },
        },
        administrador: null,
        medico: null,
      };

      await axios.put(
        `http://localhost:8080/paciente/datosPersonales/${values.documentoIdentidad}`,
        payload
      );
      setMensajeExito("✅ Datos personales actualizados correctamente.");
      setTimeout(() => setMensajeExito(""), 5000);
    } catch (error) {
      console.error("Error al actualizar datos:", error);
      alert("Error al actualizar datos.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] w-full bg-gray-100 pt-4 pb-8">
      <div className="w-[40vw] bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-xl font-semibold text-center mb-4">
          Editar Datos Personales
        </h2>

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
              { name: "direccion", label: "Dirección" },
              { name: "sexo", label: "Sexo" },
              { name: "telefonoEmergencia", label: "Teléfono de Emergencia" },
              { name: "fechaNacimiento", label: "Fecha Nacimiento" },
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
                className="w-full bg-teal-700 text-white py-2 rounded-lg hover:bg-teal-800 transition"
              >
                Actualizar
              </Button>
            </div>

            <div className="flex col-span-2 justify-end">
              <Link href={`/dashboard/paciente?documento=${documento}`}>
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

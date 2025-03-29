"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Paciente = {
  idUsuario: string
  documentoIdentidad: string
  nombre: string
  apellido: string
  telefono: string
  correo: string
  contrasena: string
  rol: string
  idpaciente: string
  historialMedico: string
  numeroSeguro: string
  fechaNacimiento: string
  sexo: string
  direccion: string
  ultimacita: string
  proximacita: string
}

export const columns: ColumnDef<Paciente>[] = [
  {
    accessorKey: "idUsuario",
    header: "ID Usuario",
  },
  {
    accessorKey: "documentoIdentidad",
    header: "Documento de Identidad",
  },
  {
    accessorKey: "nombre",
    header: "Nombre",
  },
  {
    accessorKey: "apellido",
    header: "Apellido",
  },
  {
    accessorKey: "telefono",
    header: "Teléfono",
  },
  {
    accessorKey: "correo",
    header: "Correo",
  },
  {
    accessorKey: "contrasena",
    header: "Contraseña",
  },
  {
    accessorKey: "rol",
    header: "Rol",
  },
  {
    accessorKey: "idpaciente",
    header: "ID Paciente",
  },
  {
    accessorKey: "historialMedico",
    header: "Historial Médico",
  },
  {
    accessorKey: "numeroSeguro",
    header: "Número de Seguro",
  },
  {
    accessorKey: "fechaNacimiento",
    header: "Fecha de Nacimiento",
  },
  {
    accessorKey: "sexo",
    header: "Sexo",
  },
  {
    accessorKey: "direccion",
    header: "Dirección",
  },
  {
    accessorKey: "ultimacita",
    header: "Última Cita",
  },
  {
    accessorKey: "proximacita",
    header: "Próxima Cita",
  },
]

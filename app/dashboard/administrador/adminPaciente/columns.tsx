"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Paciente = {
  idUsuario: number
  documentoIdentidad: string
  nombre: string
  apellido: string
  telefono: string
  correo: string
  contrasena: string
  rol: string
  idpaciente: number
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
    accessorKey: "idPaciente",
    header: "ID Usuario",
  },
  {
    accessorKey: "usuario.documentoIdentidad",
    header: "Documento de Identidad",
  },
  {
    accessorKey: "usuario.nombre",
    header: "Nombre",
  },
  {
    accessorKey: "usuario.apellido",
    header: "Apellido",
  },
  {
    accessorKey: "usuario.telefono",
    header: "Teléfono",
  },
  {
    accessorKey: "usuario.correo",
    header: "Correo",
  },
  {
    accessorKey: "usuario.contrasena",
    header: "Contraseña",
  },
  {
    accessorKey: "usuario.rol",
    header: "Rol",
  },
  {
    accessorKey: "usuario.idUsuario",
    header: "ID Paciente",
  },
  {
    accessorKey: "historiaClinica.numeroHistoria",
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
    accessorKey: "ultimaCita",
    header: "Última Cita",
  },
  {
    accessorKey: "proximaCita",
    header: "Próxima Cita",
  },
]

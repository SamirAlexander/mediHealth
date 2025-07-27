"use client"

import { ColumnDef } from "@tanstack/react-table"

// Esta es la definición del tipo de datos para los administradores
export type Administrador = {
  idUsuario: number
  documentoIdentidad: string
  nombre: string
  apellido: string
  telefono: string
  correo: string
  contrasena: string
  rol: string
  idAdmin: number
  departamento: string
  nivelAcceso: string
  idAuxAdmin: string
  areaAsignada: string
  tareasAsignadas: string
}

export const columns: ColumnDef<Administrador>[] = [
  {
    accessorKey: "usuario.idUsuario",
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
    accessorKey: "rol",
    header: "Rol",
  },
  {
    accessorKey: "idAdmin",
    header: "ID Administrador",
  },
  {
    accessorKey: "departamento",
    header: "Departamento",
  },
  {
    accessorKey: "nivelAcceso",
    header: "Nivel de Acceso",
  },
  {
    accessorKey: "idAdmin",
    header: "ID Auxiliar Administrador",
  },
  {
    accessorKey: "areaAsignada",
    header: "Área Asignada",
  },
  {
    accessorKey: "tareasAsignadas",
    header: "Tareas Asignadas",
  },
]

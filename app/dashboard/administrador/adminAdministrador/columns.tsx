"use client"

import { ColumnDef } from "@tanstack/react-table"

// Esta es la definición del tipo de datos para los administradores
export type Administrador = {
  idUsuario: string
  documentoIdentidad: string
  nombre: string
  apellido: string
  telefono: string
  correo: string
  contrasena: string
  rol: string
  idAdmin: string
  departamento: string
  nivelAcceso: string
  idAuxAdmin: string
  areaAsignada: string
  tareasAsignadas: string
}

export const columns: ColumnDef<Administrador>[] = [
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
    accessorKey: "idAuxAdmin",
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

"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Medico = {
  idUsuario: string;
  documentoIdentidad: string;
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  contrasena: string;
  rol: string;
  idMedico: string;
  dependencia: string;
  horarioTrabajo: string;
  numeroLicencia: string;
  areaEspecializacion: string;
  noConsultorio: string;
};

export const columns: ColumnDef<Medico>[] = [
  
  {
    accessorKey: "usuario.idUsuario",
    header: "id Usuario",
  },
  {
    accessorKey: "usuario.documentoIdentidad",
    header: "Documento",
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
    header: "Telefono",
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
    accessorKey: "usuario.idMedico",
    header: "Id Medico",
  },
  {
    accessorKey: "dependencia",
    header: "Dependencia",
  },
  {
    accessorKey: "horarioTrabajo",
    header: "Horario de Trabajo",
  },
  {
    accessorKey: "numeroLicencia",
    header: "Numero Licencia",
  },
  {
    accessorKey: "especialidad",
    header: "Area de Especializacion",
  },
  {
    accessorKey: "noConsultorio",
    header: "No. de Consultorio",
  },
  {
    //accessorKey: "noConsultorio",
    header: "Edicion",
  },
];

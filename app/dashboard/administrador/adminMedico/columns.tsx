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
    accessorKey: "idUsuario",
    header: "id Usuario",
  },
  {
    accessorKey: "documentoIdentidad",
    header: "Documento",
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
    header: "Telefono",
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
    accessorKey: "idMedico",
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
    accessorKey: "areaEspecializacion",
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

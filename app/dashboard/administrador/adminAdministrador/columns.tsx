"use client";

import { ColumnDef } from "@tanstack/react-table";

// Definición del tipo de datos para los administradores
export type Administrador = {
  idUsuario: number;
  documentoIdentidad: string;
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  contrasena: string;
  rol: string;
  idAdmin: number;
  departamento: string;
  nivelAcceso: string;
  idAuxAdmin: string;
  areaAsignada: string;
  tareasAsignadas: string;
};

const headerStyle = {
  color: "#0f766e", // teal-700
  fontWeight: "700",
  fontSize: "1rem",
  textAlign: "center" as const,
  display: "block",
};

export const columns: ColumnDef<Administrador>[] = [
  {
    accessorKey: "usuario.idUsuario",
    header: () => <span style={headerStyle}>ID Usuario</span>,
  },
  {
    accessorKey: "usuario.documentoIdentidad",
    header: () => <span style={headerStyle}>Documento Identidad</span>,
  },
  {
    accessorKey: "usuario.nombre",
    header: () => <span style={headerStyle}>Nombre</span>,
  },
  {
    accessorKey: "usuario.apellido",
    header: () => <span style={headerStyle}>Apellido</span>,
  },
  {
    accessorKey: "usuario.telefono",
    header: () => <span style={headerStyle}>Teléfono</span>,
  },
  {
    accessorKey: "usuario.correo",
    header: () => <span style={headerStyle}>Correo</span>,
  },
  {
    accessorKey: "usuario.contrasena",
    header: () => <span style={headerStyle}>Contraseña</span>,
  },
  {
    accessorKey: "usuario.rol",
    header: () => <span style={headerStyle}>Rol</span>,
    cell: ({ getValue }) => {
      const rol = getValue() as string;
      return (
        <span
          style={{
            backgroundColor: "#0f766e", // teal-700
            color: "white",
            padding: "2px 8px",
            borderRadius: "9999px",
            fontSize: "0.75rem",
            fontWeight: "600",
            display: "inline-block",
            textTransform: "capitalize",
          }}
        >
          {rol}
        </span>
      );
    },
  },
  {
    accessorKey: "idAdmin",
    header: () => <span style={headerStyle}>Id Administrador</span>,
  },
  {
    accessorKey: "departamento",
    header: () => <span style={headerStyle}>Departamento</span>,
  },
  {
    accessorKey: "nivelAcceso",
    header: () => <span style={headerStyle}>Nivel Acceso</span>,
  },
  {
    accessorKey: "areaAsignada",
    header: () => <span style={headerStyle}>Área Asignada</span>,
  },
  {
    accessorKey: "tareasAsignadas",
    header: () => <span style={headerStyle}>Tareas Asignadas</span>,
  }, 
];

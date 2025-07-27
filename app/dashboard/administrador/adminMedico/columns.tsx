"use client";

import { ColumnDef } from "@tanstack/react-table";

// Tipo para datos de médico
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

const headerStyle = {
  color: "#0f766e", // teal-700
  fontWeight: "700",
  fontSize: "1rem",
  textAlign: "center" as const, // <-- centrado horizontal
  display: "block", // para que textAlign funcione bien en span
};

export const columns: ColumnDef<Medico>[] = [
  {
    accessorKey: "usuario.idUsuario",
    header: () => <span style={headerStyle}>ID Usuario</span>,
  },
  {
    accessorKey: "usuario.documentoIdentidad",
    header: () => <span style={headerStyle}>Documento</span>,
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
    accessorKey: "idMedico",
    header: () => <span style={headerStyle}>ID Médico</span>,
  },
  {
    accessorKey: "dependencia",
    header: () => <span style={headerStyle}>Dependencia</span>,
  },
  {
    accessorKey: "horarioTrabajo",
    header: () => <span style={headerStyle}>Horario de Trabajo</span>,
  },
  {
    accessorKey: "numeroLicencia",
    header: () => <span style={headerStyle}>Número Licencia</span>,
  },
  {
    accessorKey: "especialidad",
    header: () => <span style={headerStyle}>Área de Especialización</span>,
  },
  {
    accessorKey: "noConsultorio",
    header: () => <span style={headerStyle}>No. de Consultorio</span>,
  },  
];

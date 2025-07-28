"use client";

import { ColumnDef } from "@tanstack/react-table";

// Tipo de datos de paciente
export type Paciente = {
  idUsuario: number;
  documentoIdentidad: string;
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  contrasena: string;
  rol: string;
  idpaciente: number;
  historialMedico: string;
  numeroSeguro: string;
  fechaNacimiento: string;
  sexo: string;
  direccion: string;
  ultimacita: string;
  proximacita: string;
};

const headerStyle = {
  color: "#0f766e",
  fontWeight: "700",
  fontSize: "1rem",
  textAlign: "center" as const,
  display: "block",
};

export const columns: ColumnDef<Paciente>[] = [
  {
    accessorKey: "idPaciente",
    header: () => <span style={headerStyle}>ID Usuario</span>,
  },
  {
    accessorKey: "usuario.documentoIdentidad",
    header: () => <span style={headerStyle}>Documento de Identidad</span>,
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
            backgroundColor: "#0f766e",
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
    accessorKey: "usuario.idUsuario",
    header: () => <span style={headerStyle}>ID Paciente</span>,
  },
  {
    accessorKey: "historiaClinica.numeroHistoria",
    header: () => <span style={headerStyle}>Historial Médico</span>,
  },
  {
    accessorKey: "numeroSeguro",
    header: () => <span style={headerStyle}>Número de Seguro</span>,
  },
  {
    accessorKey: "fechaNacimiento",
    header: () => <span style={headerStyle}>Fecha de Nacimiento</span>,
  },
  {
    accessorKey: "sexo",
    header: () => <span style={headerStyle}>Sexo</span>,
  },
  {
    accessorKey: "direccion",
    header: () => <span style={headerStyle}>Dirección</span>,
  },
  {
    accessorKey: "ultimaCita",
    header: () => <span style={headerStyle}>Última Cita</span>,
  },
  {
    accessorKey: "proximaCita",
    header: () => <span style={headerStyle}>Próxima Cita</span>,
  },
];

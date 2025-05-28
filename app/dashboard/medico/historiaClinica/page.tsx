'use client';

import React from "react";

interface RecordMedico {
  id: number;
  recordMedico: string;
  fechaRegistro: string;
  signosVitales: string;
  motivoConsulta: string;
  especialidad: string;
  diagnostico: string;
  nombreMedico: string;
}

interface HistoriaClinicaData {
  id: number;
  numeroHistoria: number;
  pacienteId: string;
  fechaCreacion: string;
  contactoEmergencia: string;
  telefonoEmergencia: number | string;
  recordsMedicos: RecordMedico[];
  antecedentesMedicos: string;
}

interface Paciente {
  idPaciente: number;
  historialMedico: any; // o null
  numeroSeguro: string;
  fechaNacimiento: string;
  sexo: string;
  direccion: string;
  ultimaCita: string;
  proximaCita: string;
  historiaClinica: HistoriaClinicaData;
}

interface Usuario {
  idUsuario: number;
  documentoIdentidad: string;
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  contrasena: string;
  rol: string;
  paciente: Paciente | null;
  administrador: any;
  medico: any;
}

interface Props {
  usuario: Usuario;
  onClose: () => void;
}

const HistoriaClinica: React.FC<Props> = ({ usuario, onClose }) => {
  if (!usuario || !usuario.paciente || !usuario.paciente.historiaClinica) {
    return <p>No hay historia clínica disponible.</p>;
  }

  const historia = usuario.paciente.historiaClinica;

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 20,
        maxWidth: 700,
        margin: "20px auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2>Historia Clínica</h2>
      <p><strong>Número de Historia:</strong> {historia.numeroHistoria}</p>
      <p><strong>Fecha de Creación:</strong> {historia.fechaCreacion}</p>
      <p><strong>Contacto de Emergencia:</strong> {historia.contactoEmergencia}</p>
      <p><strong>Teléfono Emergencia:</strong> {historia.telefonoEmergencia}</p>
      <p><strong>Antecedentes Médicos:</strong> {historia.antecedentesMedicos}</p>

      <h3>Records Médicos:</h3>
      {historia.recordsMedicos.length === 0 && <p>No hay records médicos.</p>}
      <ul>
        {historia.recordsMedicos.map((record) => (
          <li key={record.id} style={{ marginBottom: 15, paddingBottom: 10, borderBottom: "1px solid #ddd" }}>
            <p><strong>Fecha Registro:</strong> {record.fechaRegistro}</p>
            <p><strong>Motivo Consulta:</strong> {record.motivoConsulta}</p>
            <p><strong>Especialidad:</strong> {record.especialidad}</p>
            <p><strong>Diagnóstico:</strong> {record.diagnostico}</p>
            <p><strong>Signos Vitales:</strong> {record.signosVitales}</p>
            <p><strong>Médico:</strong> {record.nombreMedico}</p>
            <p><em>{record.recordMedico}</em></p>
          </li>
        ))}
      </ul>

      <button
        onClick={onClose}
        style={{
          marginTop: 10,
          backgroundColor: "#d9534f",
          color: "white",
          border: "none",
          padding: "8px 15px",
          borderRadius: 5,
          cursor: "pointer",
        }}
      >
        Cerrar
      </button>
    </div>
  );
};

export default HistoriaClinica;

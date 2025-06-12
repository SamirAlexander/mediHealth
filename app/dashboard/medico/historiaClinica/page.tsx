'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
  idUsuario: number;
  documentoIdentidad: string;
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  rol: string;
  idPaciente: number;
  historialMedico: string;
  fechaNacimiento: string;
  sexo: string;
  direccion: string;
  ultimaCita: string;
  proximaCita: string;
  hcId: number;
  numeroHistoria: number;
  fechaCreacion: string;
  contactoEmergencia: string;
  telefonoEmergencia: number | string;
  antecedentesMedicos: string;
  records: RecordMedico[];
}


interface Props {
  documentoIdentidad: string | null | undefined;
  //onClose: () => void;
}

const HistoriaClinica: React.FC<Props> = ({ documentoIdentidad }) => {
  const [historia, setHistoria] = useState<HistoriaClinicaData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  

  /* setDocumentos(documentoIdentidad) */

 console.log("ESTO ES EL DOCUMENTO DE IDENTIDAD DEL HIJO LINEA 52",documentoIdentidad)



 useEffect(() => {
  const fetchHistoriaClinica = async () => {
    if (!documentoIdentidad) return;

    try {
      const response = await axios.get<HistoriaClinicaData[]>(
        `http://localhost:8080/medico/historiaClinicaP/documento/${documentoIdentidad}`
      );

      if (response.status !== 200 || !response.data) {
        throw new Error('Error al obtener la historia clínica');
      }

      setHistoria(response.data[0]);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || err.message || 'Error en la solicitud');
      } else {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      }
    } finally {
      setLoading(false);
    }
  };

  fetchHistoriaClinica();
}, [documentoIdentidad]);


  if (loading) return <div style={styles.loading}>Cargando historia clínica...</div>;
  if (error) return <div style={styles.error}>Error: {error}</div>;
  if (!historia) return <div style={styles.loading}>No se encontró la historia clínica</div>;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Historia Clínica #{historia.numeroHistoria}</h2>
        {/* <button style={styles.closeButton} onClick={onClose}>Nuevo Registro</button> */}
      </div>

      <div style={styles.grid}>
        <div>
          <h3 style={styles.sectionTitle}>Datos del Paciente</h3>
          <p><strong>Nombre:</strong> {historia.nombre} {historia.apellido}</p>
          <p><strong>Documento:</strong> {historia.documentoIdentidad}</p>
          <p><strong>Fecha de Nacimiento:</strong> {historia.fechaNacimiento}</p>
          <p><strong>Sexo:</strong> {historia.sexo === 'M' ? 'Masculino' : 'Femenino'}</p>
        </div>

        <div>
          <h3 style={styles.sectionTitle}>Contacto</h3>
          <p><strong>Teléfono:</strong> {historia.telefono}</p>
          <p><strong>Correo:</strong> {historia.correo}</p>
          <p><strong>Dirección:</strong> {historia.direccion}</p>
          <p><strong>Emergencia:</strong> {historia.contactoEmergencia} ({historia.telefonoEmergencia})</p>
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <h3 style={styles.sectionTitle}>Antecedentes Médicos</h3>
        <p>{historia.antecedentesMedicos || 'No registrado'}</p>
      </div>
      <div style={{ marginBottom: 20 }}>
        <h3 style={styles.sectionTitle}>Historial Médico General</h3>
        <p>{historia.historialMedico || 'No registrado'}</p>
      </div>

      <div>
        <div style={styles.registrosHeader}>
          <h3 style={styles.sectionTitle}>Registros Médicos</h3>
          <span style={{ color: '#555' }}>{historia.records.length} registro(s)</span>
        </div>

        {historia.records.length === 0 ? (
          <p style={styles.noRegistros}>No hay registros médicos disponibles.</p>
        ) : (
          <div style={styles.registrosList}>
            {historia.records.map((record) => (
              <div key={record.id} style={styles.recordCard}>
                <div style={styles.recordHeader}>
                  <strong>{record.fechaRegistro}</strong>
                  <span style={styles.badge}>{record.especialidad}</span>
                </div>
                <p><strong>Motivo:</strong> {record.motivoConsulta}</p>
                <p><strong>Diagnóstico:</strong> {record.diagnostico}</p>
                <p><strong>Signos Vitales:</strong> {record.signosVitales}</p>
                <p><strong>Médico:</strong> {record.nombreMedico}</p>
                <div style={styles.recordNotas}>
                  <p style={{ margin: 0 }}><strong>Notas:</strong> {record.recordMedico}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Tus estilos permanecen igual...
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: 10,
    padding: 25,
    maxWidth: 800,
    margin: '30px auto',
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    fontFamily: 'Segoe UI, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  title: {
    fontSize: 22,
    margin: 0,
    color: '#333',
  },
  closeButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: 6,
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 25,
    marginBottom: 25,
  },
  sectionTitle: {
    borderBottom: '2px solid #eee',
    paddingBottom: 6,
    marginBottom: 12,
    fontSize: 18,
    color: '#444',
  },
  registrosHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  noRegistros: {
    color: '#888',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  registrosList: {
    maxHeight: 400,
    overflowY: 'auto',
    paddingRight: 8,
  },
  recordCard: {
    backgroundColor: '#f8f9fa',
    border: '1px solid #e0e0e0',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  recordHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  badge: {
    backgroundColor: '#0d6efd',
    color: '#fff',
    padding: '4px 10px',
    borderRadius: 12,
    fontSize: 12,
  },
  recordNotas: {
    marginTop: 12,
    backgroundColor: '#e9ecef',
    padding: 12,
    borderRadius: 6,
  },
  loading: {
    padding: 30,
    textAlign: 'center',
    color: '#666',
  },
  error: {
    padding: 30,
    textAlign: 'center',
    color: '#dc3545',
    fontWeight: 'bold',
  },
};

export default HistoriaClinica;
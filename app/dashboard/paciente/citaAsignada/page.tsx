'use client'

import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface CitaAsignada {
  idAgenda: number
  fechaCita: string
  idDetalleAgenda: number
  horaInicio: string
  horaFin: string
  disponibilidad: string
  idConsultorio: number
  numeroConsultorio: string
  idMedico: number
  especialidad: string
  nombreMedico: string
  apellidoMedico: string
}

export default function CitasPaciente() {
  const [documento, setDocumento] = useState('')
  const [citas, setCitas] = useState<CitaAsignada[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleBuscar = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await axios.get<CitaAsignada[]>(
        `http://localhost:8080/paciente/citaAsignada/documento/${documento}`
      )
      setCitas(res.data)
    } catch (err) {
      setError('No se pudieron obtener las citas.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-teal-700">
            Consultar Citas Asignadas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-4">
            <Input
              placeholder="Documento de identidad"
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
              className="w-full max-w-[700px]"
            />
            <Button
              onClick={handleBuscar}
              disabled={loading || !documento}
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              {loading ? 'Buscando...' : 'Buscar'}
            </Button>
            <div className="flex-1" />
            <Link href="/dashboard/paciente" passHref>
              <Button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg shadow-sm">
                Volver
              </Button>
            </Link>
          </div>

          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </CardContent>
      </Card>

      {citas.length > 0 && (
        <div className="mt-8 grid gap-6">
          {citas.map((cita) => (
            <Card key={cita.idDetalleAgenda} className="shadow-md border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-teal-700">
                  📅 Cita el {new Date(cita.fechaCita).toLocaleDateString()}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-1">
                <p><strong>🕒 Hora:</strong> {cita.horaInicio} - {cita.horaFin}</p>
                <p><strong>🏥 Consultorio:</strong> {cita.numeroConsultorio}</p>
                <p><strong>👨‍⚕️ Médico:</strong> {cita.nombreMedico} {cita.apellidoMedico}</p>
                <p><strong>🧬 Especialidad:</strong> {cita.especialidad}</p>
                <p><strong>📌 Disponibilidad:</strong> {cita.disponibilidad}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {!loading && citas.length === 0 && documento && !error && (
        <p className="text-gray-500 text-center mt-6 italic">
          No se encontraron citas asignadas para este documento.
        </p>
      )}
    </div>
  )
}

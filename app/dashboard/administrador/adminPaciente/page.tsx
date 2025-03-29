import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { Paciente, columns } from "./columns"
import { DataTable } from "./data-table"
 
async function getData(): Promise<Paciente[]> {
  // Fetch data from your API here.
  return [
    {
      idUsuario: "728ed52f",
      documentoIdentidad: "12345678",
      nombre: "Juan",
      apellido: "Pérez",
      telefono: "123-456-7890",
      correo: "juan@example.com",
      contrasena: "password123",
      rol: "Paciente",
      idpaciente: "1001",
      historialMedico: "Historial médico de Juan",
      numeroSeguro: "A123456789",
      fechaNacimiento: "1990-01-01",
      sexo: "Masculino",
      direccion: "Calle Ficticia 123",
      ultimacita: "2025-03-15",
      proximacita: "2025-04-15",
    },
    // ...
  ]  
}


export default async function page() {
  const data = await getData()
  return (
    <div>
      <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
      <Link href="../administrador">
        <Button className="mt-0 rounded-lg bg-primary text-white px-6 py-3 text-lg font-medium tracking-wide shadow-md hover:shadow-lg transition-all hover:bg-primary/80">
        Administrador
      </Button>
      </Link>
    </div>
  )
}


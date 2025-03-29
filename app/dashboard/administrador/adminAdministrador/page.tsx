import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { Administrador, columns } from './columns'
import { DataTable } from './data-table'

async function getData(): Promise<Administrador[]> {
  // Aquí puedes obtener los datos desde tu API.
  return [
    {
      idUsuario: "728ed52f",
      documentoIdentidad: "12345678",
      nombre: "Juan",
      apellido: "Pérez",
      telefono: "123-456-7890",
      correo: "juan@example.com",
      contrasena: "password123",
      rol: "Administrador",
      idAdmin: "A123",
      departamento: "Recursos Humanos",
      nivelAcceso: "Alta",
      idAuxAdmin: "AUX001",
      areaAsignada: "Gestión de Personal",
      tareasAsignadas: "Revisión de reportes, actualización de registros",
    },
    // Aquí agregarías más datos si es necesario
  ]
}

export default async function Page() {
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

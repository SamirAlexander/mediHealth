import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { Paciente, columns } from "./columns"
import { DataTable } from "./data-table"
import axios from 'axios'

async function getData(): Promise<Paciente[]> {
  // Fetch data from your API here.
  try {
    const response = await axios.get<Paciente[]>("http://localhost:8080/administrador/pacientes");
    console.log("DATA RECIVIDA DE PACIENTE" + response);
    return response.data
  } catch (error) {
    console.error("ERROR AL OBTENER DATA EN PACIENTE" + error)
    return []
  }
}


export default async function page() {
  const data = await getData()
  return (
    <div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
      <div className="flex gap-[2vw]">
        <Link href="../administrador">
          <Button className="mt-0 rounded-lg bg-primary text-white px-6 py-3 text-lg font-medium tracking-wide shadow-md hover:shadow-lg transition-all hover:bg-primary/80">
            Administrador
          </Button>
        </Link>

        <Link href="./adminPaciente/adminAgregarPaciente">
          <Button className="mt-0 rounded-lg bg-primary text-white px-6 py-3 text-lg font-medium tracking-wide shadow-md hover:shadow-lg transition-all hover:bg-primary/80">
            Agregar
          </Button>
        </Link>
      </div>
    </div>
  )
}


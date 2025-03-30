import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from 'react'
import { Medico, columns } from "./columns";
import { DataTable } from "./data-table";
import axios from "axios";

async function getData(): Promise<Medico[]> {
  // Fetch data from your API here.
  //get con xios
  try {
    const response = await axios.get<Medico[]>("http://localhost:8080/administrador/medicos");
    console.log("Data received:", response.data);
    return response.data; // Devuelve los datos obtenidos
  } catch (err) {
    console.error("Error fetching data:", err);
    return []; // Retorna un array vacío en caso de error
  }

}

export default async function page() {
  const data = await getData();


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

        <Link href="./adminMedico/adminAgregarMedico">
          <Button className="mt-0 rounded-lg bg-primary text-white px-6 py-3 text-lg font-medium tracking-wide shadow-md hover:shadow-lg transition-all hover:bg-primary/80">
            Agregar
          </Button>
        </Link>
      </div>
    </div>
  );
}

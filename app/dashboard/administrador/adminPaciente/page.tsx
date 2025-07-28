"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Paciente, columns } from "./columns";
import { DataTable } from "./data-table";
import axios from "axios";

async function getData(): Promise<Paciente[]> {
  try {
    const response = await axios.get<Paciente[]>(
      "http://localhost:8080/administrador/pacientes"
    );
    console.log("DATA RECIBIDA DE PACIENTE", response.data);
    return response.data;
  } catch (error) {
    console.error("ERROR AL OBTENER DATA EN PACIENTE", error);
    return [];
  }
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="min-h-screen w-full bg-gray-100 px-10 py-10">
      {/* Título */}
      <h2 className="text-3xl font-bold text-teal-700 mb-8">Pacientes Registrados</h2>

      {/* Botones alineados a la izquierda */}
      <div className="flex gap-4 mb-6">
        <Link href="../administrador">
          <Button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg shadow-md transition-all">
            Volver al Panel
          </Button>
        </Link>

        <Link href="./adminPaciente/adminAgregarPaciente">
          <Button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded-lg shadow-md transition-all">
            Agregar
          </Button>
        </Link>
      </div>

      {/* Tabla con mayor amplitud visual */}
      <div className="w-full bg-white rounded-2xl shadow-md p-6">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}

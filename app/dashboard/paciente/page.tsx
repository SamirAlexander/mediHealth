"use client"; // This is a client component
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

const page = () => {
  function hadleDirection(){
    window.location.href = "/dashboard/paciente";
  }
  return (
    <div>
      <div
        className="w-full h-[66vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/pacientes.jpg')" }}
      >
        {/* Add content here if needed */}
        <div className="pt-14 pl-5">
          <h1 className="text-sky-900  text-3xl font-bold drop-shadow-lg">
            Modulo Paciente,
          </h1>
          <h1 className="text-sky-900 text-3xl font-bold drop-shadow-lg">
          Gestión Integral de los Procesos Médicos
          </h1>
          <p className="text-sky-500 text-lg mt-2">Dashboard Paciente.</p>
        </div>
      </div>
      <div className="pl-56 rounded-lg p-2 flex flex-wrap gap-x-4 gap-y-2">
        <Link href="paciente/datosPersonales">
          <Button className="mt-0 rounded-lg bg-primary text-white px-6 py-3 text-lg font-medium tracking-wide shadow-md hover:shadow-lg transition-all hover:bg-primary/80">
            Datos personales
          </Button>
        </Link>
        <Link href="paciente/asignacionCitas">
          <Button className="mt-0 rounded-lg bg-primary text-white px-6 py-3 text-lg font-medium tracking-wide shadow-md hover:shadow-lg transition-all hover:bg-primary/80">
            Asignación Citas
          </Button>
        </Link>
        <Link href="paciente/citasAsignadas">
          <Button className="mt-0 rounded-lg bg-primary text-white px-6 py-3 text-lg font-medium tracking-wide shadow-md hover:shadow-lg transition-all hover:bg-primary/80">
            Citas asignadas
          </Button>
        </Link>            
      </div>
    </div>
  );
};

export default page;

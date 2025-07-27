"use client"; // This is a client component
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

const page = () => {
  function hadleDirection(){
    window.location.href = "/dashboard/administrador";
  }
  return (
    <div>
      <div
         className="w-full h-[68vh] relative"
        style={{ 
          backgroundImage: "url('/images/perfil_buen_administrador.jpg')",
          backgroundSize: "100% 130%", // Ancho 35%, alto 50% (relativo al contenedor)
          backgroundPosition: "center", // Centra la imagen reducida
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Fondo opcional para espacios vacíos
        }}
      >
        {/* Add content here if needed */}
        <div className="pt-14 pl-5">
          <h1 className="text-sky-900  text-3xl font-bold drop-shadow-lg">
            Modulo Administrador,
          </h1>
          <h1 className="text-sky-900 text-3xl font-bold drop-shadow-lg">
          Gestión Integral de los Procesos Médicos
          </h1>
          <p className="text-sky-500 text-lg mt-2">Dashboard Administrador.</p>
        </div>
      </div>
      <div className="pl-56 rounded-lg p-2 flex flex-wrap gap-x-4 gap-y-2">
        <Link href="administrador/adminPaciente">
          <Button className="mt-0 rounded-lg bg-primary text-white px-6 py-3 text-lg font-medium tracking-wide shadow-md hover:shadow-lg transition-all hover:bg-primary/80">
            Administrar Pacientes
          </Button>
        </Link>
        <Link href="administrador/adminMedico">
          <Button className="mt-0 rounded-lg bg-primary text-white px-6 py-3 text-lg font-medium tracking-wide shadow-md hover:shadow-lg transition-all hover:bg-primary/80">
            Administrar Médicos
          </Button>
        </Link>
        <Link href="administrador/adminAdministrador">
          <Button className="mt-0 rounded-lg bg-primary text-white px-6 py-3 text-lg font-medium tracking-wide shadow-md hover:shadow-lg transition-all hover:bg-primary/80">
            Administrar Administradores
          </Button>
        </Link>      
        <Link href="administrador/agenda">
          <Button className="mt-0 rounded-lg bg-primary text-white px-6 py-3 text-lg font-medium tracking-wide shadow-md hover:shadow-lg transition-all hover:bg-primary/80">
            Crear Agenda
          </Button>
        </Link>        
      </div>
    </div>
  );
};

export default page;

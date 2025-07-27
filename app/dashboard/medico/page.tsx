"use client"; // This is a client component

import { Button } from "@/components/ui/button";
import Link from "next/link";


import React, { useEffect, useState } from "react";
import axios from "axios";



const page = () => {
  function hadleDirection() {
    window.location.href = "/dashboard/medico";
  }
  return (        
        <div>
          <div
            className="w-full h-[66vh] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/professional.jpg')" }}
          >
            {/* Add content here if needed */}
            <div className="pt-14 pl-5">
              <h1 className="text-white text-3xl font-bold drop-shadow-lg">
                Modulo Medico,
              </h1>
              <h1 className="text-white text-3xl font-bold drop-shadow-lg">
                Gestión Integral de los Procesos Médicos
              </h1>
              <p className="text-sky-500 text-lg mt-2">Dashboard Medico.</p>
            </div>
          </div>
          <div className="pl-56 rounded-lg p-2 flex flex-wrap gap-x-4 gap-y-2">
            <Link href="medico/datossPersonales">
              <Button className="mt-0 rounded-lg bg-primary text-white px-6 py-3 text-lg font-medium tracking-wide shadow-md hover:shadow-lg transition-all hover:bg-primary/80">
                Datos Personales
              </Button>
            </Link>
            <Link href="medico/agendaDelDia">
            <Button
              className="mt-0 rounded-lg bg-primary text-white px-6 py-3 text-lg font-medium tracking-wide shadow-md hover:shadow-lg transition-all hover:bg-primary/80"              
            >
              Agenda del dia
            </Button>
            </Link>            
            <Link href="medico/citaExtra">
              <Button className="mt-0 rounded-lg bg-primary text-white px-6 py-3 text-lg font-medium tracking-wide shadow-md hover:shadow-lg transition-all hover:bg-primary/80">
                Cita Extra
              </Button>
            </Link>
          </div>
        </div>
      
    
  );
};

export default page;

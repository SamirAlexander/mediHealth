"use client"; // This is a client component
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Personalinfo from "./personalinfo/page";
import Antecedentes from "./antecedentes/page";
import Explorfisica from "./explorfisica/page";
import Interrogatorio from "./interrogatorio/page";
import Estilovida from "./estilovida/page";
import Documentos from "./documentos/page";
import Alergias from "./alergias/page";
import Incapacidades from "./incapacidades/page";
import Consultas from "./consultas/page";

const page = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Historial Médico</h1>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="personalinfo">Información Personal</TabsTrigger>
          <TabsTrigger value="antecedentes">Antecedentes</TabsTrigger>
          <TabsTrigger value="explorfisica">Exploración Física</TabsTrigger>
          <TabsTrigger value="interrogatorio">Interrogatorio</TabsTrigger>
          <TabsTrigger value="estilovida">Estilo de Vida</TabsTrigger>
          <TabsTrigger value="documentos">Documentos</TabsTrigger>
          <TabsTrigger value="alergias">Alergías</TabsTrigger>
          <TabsTrigger value="incapacidades">Incapacidades</TabsTrigger>
          <TabsTrigger value="consultas">Consultas</TabsTrigger>
        </TabsList>
        <TabsContent value="personalinfo">
          <Personalinfo />
        </TabsContent>
        <TabsContent value="antecedentes">
          <Antecedentes />
        </TabsContent>
        <TabsContent value="explorfisica">
          <Explorfisica />
        </TabsContent>
        <TabsContent value="interrogatorio">
          <Interrogatorio />
        </TabsContent>
        <TabsContent value="estilovida">
          <Estilovida />
        </TabsContent>
        <TabsContent value="documentos">
          <Documentos />
        </TabsContent>
        <TabsContent value="alergias">
          <Alergias />
        </TabsContent>
        <TabsContent value="incapacidades">
          <Incapacidades />
        </TabsContent>
        <TabsContent value="consultas">
          <Consultas />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default page;

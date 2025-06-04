"use client"; // This is a client component

import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import React, { useEffect, useState } from "react";
import axios from "axios";

// Define the options for the dropdown
const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const page = () => {
  function hadleDirection() {
    window.location.href = "/dashboard/medico";
  }

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/medico/consultorio/")
      .then((response) => {
        // Handle the response data if needed
        console.log("Consultorio data:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching consultorio data:", error);
      });
    }, []);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      {isOpen ? (
        <div className="flex items-center h-[70vh] justify-center bg-gray-100">
          <div className="w-[30%] ">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Selección de Consultorio</CardTitle>
                <CardDescription>
                  Elegir consultorio asignado para la atención
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-[200px] justify-between"
                    >
                      {value
                        ? frameworks.find(
                            (framework) => framework.value === value
                          )?.label
                        : "Select framework..."}
                      <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search framework..." />
                      <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {frameworks.map((framework) => (
                            <CommandItem
                              key={framework.value}
                              value={framework.value}
                              onSelect={(currentValue) => {
                                setValue(
                                  currentValue === value ? "" : currentValue
                                );
                                setOpen(false);
                              }}
                            >
                              <CheckIcon
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  value === framework.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {framework.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </CardContent>
              <CardFooter>
                <div className="flex justify-end">
                  <Button
                    onClick={toggleDropdown}
                    className="mt-0 rounded-lg bg-primary text-white px-6 py-3 text-lg font-medium tracking-wide shadow-md hover:shadow-lg transition-all hover:bg-primary/80"
                  >
                    Cerrar
                  </Button>
                  <Link href="medico/agendaDelDia">
                    <Button className="mt-0 rounded-lg bg-primary text-white px-6 py-3 text-lg font-medium tracking-wide shadow-md hover:shadow-lg transition-all hover:bg-primary/80">
                      Apceptar
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
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
            {/* <Link href="medico/agendaDelDia"> */}
            <Button
              className="mt-0 rounded-lg bg-primary text-white px-6 py-3 text-lg font-medium tracking-wide shadow-md hover:shadow-lg transition-all hover:bg-primary/80"
              onClick={() => {
                toggleDropdown();
              }}
            >
              Agenda del dia
            </Button>
            {/* </Link> */}
            <Link href="medico/agendaSemanal">
              <Button className="mt-0 rounded-lg bg-primary text-white px-6 py-3 text-lg font-medium tracking-wide shadow-md hover:shadow-lg transition-all hover:bg-primary/80">
                Agenda Semanal
              </Button>
            </Link>
            <Link href="medico/citaExtra">
              <Button className="mt-0 rounded-lg bg-primary text-white px-6 py-3 text-lg font-medium tracking-wide shadow-md hover:shadow-lg transition-all hover:bg-primary/80">
                Cita Extra
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;

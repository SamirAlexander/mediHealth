import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div
        className="w-full h-[66vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
      >
        {/* Add content here if needed */}
        <div className="pt-28 pl-5">
          <h1 className="text-white text-3xl font-bold drop-shadow-lg">
            Cuidamos de Ti,
          </h1>
          <h1 className="text-white text-3xl font-bold drop-shadow-lg">
            Porque Tu Salud es Nuestra Prioridad
          </h1>
          <p className="text-sky-500 text-lg mt-2">
            Atención médica integral con calidad, confianza y calidez humana.
          </p>
          <div className="pl-56">
            <Link href="/dashboard/gestiondecitas">
              <Button className="mt-5">Agendar Cita</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-10">
        {/* Card: About Us */}
        <Card className="w-[350px] bg-gray-50 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-sky-500 text-center drop-shadow-md">
              Acerca de Nosotros
            </CardTitle>
            <CardDescription className="text-gray-600 text-center">
              Conozca nuestra misión y visión.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-justify">
              En el Centro Médico Integral, nos dedicamos a brindar atención
              médica de alta calidad, priorizando el bienestar de nuestros
              pacientes. Contamos con un equipo de profesionales comprometidos
              con su salud.
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-gray-500 text-sm">Fundado en 1995</p>
          </CardFooter>
        </Card>

        {/* Card: Services */}
        <Card className="w-[350px] bg-gray-50 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-sky-500 text-center drop-shadow-md">
              Servicios
            </CardTitle>
            <CardDescription className="text-gray-600 text-center">
              Explora nuestros servicios médicos.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Consultas generales</li>
              <li>Especialidades médicas</li>
              <li>Laboratorio clínico</li>
              <li>Diagnóstico por imágenes</li>
              <li>Terapias físicas y rehabilitación</li>
            </ul>
          </CardContent>
          <CardFooter>
            <p className="text-gray-500 text-sm">
              Más información en la sección de servicios
            </p>
          </CardFooter>
        </Card>

        {/* Card: Contact */}
        <Card className="w-[350px] bg-gray-50 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-sky-500 text-center drop-shadow-md">
              Contacto
            </CardTitle>
            <CardDescription className="text-gray-600 text-center">
              Comuníquese con nosotros.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              📍 Dirección: Calle 123 #45-67, Ciudad, País
            </p>
            <p className="text-gray-700">📞 Teléfono: +57 123 456 7890</p>
            <p className="text-gray-700">
              📧 Email: contacto@clinicaintegral.com
            </p>
            <p className="text-gray-700">
              🕒 Horario: Lunes a Viernes, 8:00 AM - 6:00 PM
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-gray-500 text-sm">
              ¡Estamos aquí para ayudarle!
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

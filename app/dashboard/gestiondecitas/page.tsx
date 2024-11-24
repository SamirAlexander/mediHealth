"use client";
import { useState } from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ScheduleAppointment() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [availability, setAvailability] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const availableSlots: { [key: string]: string[] } = {
    "2024-12-01": ["09:00 AM", "10:00 AM", "11:00 AM"],
    "2024-12-02": ["02:00 PM", "03:00 PM", "04:00 PM"],
  };

  const handleCheckAvailability = () => {
    setIsLoading(true);
    setTimeout(() => {
      const available =
        availableSlots[selectedDate]?.includes(selectedTime) || false;
      setAvailability(available);
      setIsLoading(false);
    }, 1000); // Simula la validación (ejemplo de booking API call)
  };

  const handleBooking = () => {
    if (availability) {
      alert("Cita agendada con éxito");
      setSelectedDate("");
      setSelectedTime("");
      setAvailability(null);
    } else {
      alert("Selected time slot is no longer available.");
    }
  };

  function alertmessage() {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Agenda No Disponible!</AlertTitle>
        <AlertDescription>
          Lo sentimos, no tenemos agenda para este día.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div
      className="grid grid-cols-2 bg-white shadow-lg rounded-lg"
      style={{ height: "70vh", width: "81vw" }}
    >
      <div className="flex items-center justify-center p-8 space-y-6 border-r border-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Agendar una Cita de Medicina General
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Nota: Las citas para especialistas están sujetas a la remisión de un
            médico general.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Seleccione Fecha:
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Horarios Disponibles:
              </label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">-- Select a Time --</option>
                {selectedDate &&
                  (availableSlots[selectedDate] || []).map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
              </select>
            </div>

            <button
              onClick={handleCheckAvailability}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
              {isLoading ? "Checking..." : "Verifica Disponibilidad"}
            </button>

            {availability !== null && (
              <p
                className={`text-center font-semibold mt-4 ${
                  availability ? "text-green-500" : "text-red-500"
                }`}
              >
                {availability
                  ? "El horario seleccionado está disponible."
                  : alertmessage()}
              </p>
            )}

            {availability && (
              <button
                onClick={handleBooking}
                className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
              >
                Confirmar Cita
              </button>
            )}
          </div>
        </div>
      </div>

      <div>
        <div
          className="flex items-center justify-center p-8 rounded-lg shadow-md overflow-auto"
          style={{ height: "70vh", width: "41vw" }}
        >
          <div
            className="p-6 rounded-lg shadow-2xl overflow-auto"
            style={{ width: "80vw", height: "70vh" }}
          >
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Agenda Disponible
            </h2>
            <div className="space-y-6">
              {Object.entries(availableSlots).map(([date, slots]) => (
                <div key={date}>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    {date}
                  </h3>
                  <ul className="list-disc list-inside text-gray-800">
                    {slots.map((slot, index) => (
                      <li key={index}>{slot}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

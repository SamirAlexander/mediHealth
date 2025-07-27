"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface RecordMedico {
  recordMedico: string;
  fechaRegistro: string;
  signosVitales: string;
  motivoConsulta: string;
  especialidad: string;
  diagnostico: string;
  nombreMedico: string;
}

interface FormData {
  numeroHistoria: number;
  fechaCreacion: string;
  contactoEmergencia: string;
  telefonoEmergencia: number;
  antecedentesMedicos: string;
  recordsMedicos: RecordMedico[];
}

interface HistoriaClinicaFormProps {
  pacienteId: number;
  onSuccess?: () => void;
}

export default function HistoriaClinicaForm({
  pacienteId,
  onSuccess,
}: HistoriaClinicaFormProps) {
  const [formData, setFormData] = useState<FormData>({
    numeroHistoria: 0,
    fechaCreacion: new Date().toISOString().split("T")[0],
    contactoEmergencia: "",
    telefonoEmergencia: 0,
    antecedentesMedicos: "",
    recordsMedicos: [
      {
        recordMedico: "",
        fechaRegistro: new Date().toISOString().split("T")[0],
        signosVitales: "",
        motivoConsulta: "",
        especialidad: "",
        diagnostico: "",
        nombreMedico: "",
      },
    ],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRecordChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newRecords = [...prev.recordsMedicos];
      newRecords[index] = { ...newRecords[index], [name]: value };
      return { ...prev, recordsMedicos: newRecords };
    });
  };

  const handleDateChange = (date: Date | undefined, field: string) => {
    if (!date) return;
    const dateString = date.toISOString().split("T")[0];
    setFormData(prev => ({ ...prev, [field]: dateString }));
  };

  const handleRecordDateChange = (index: number, date: Date | undefined) => {
    if (!date) return;
    const dateString = date.toISOString().split("T")[0];
    setFormData(prev => {
      const newRecords = [...prev.recordsMedicos];
      newRecords[index] = { ...newRecords[index], fechaRegistro: dateString };
      return { ...prev, recordsMedicos: newRecords };
    });
  };

  const addRecordMedico = () => {
    setFormData(prev => ({
      ...prev,
      recordsMedicos: [
        ...prev.recordsMedicos,
        {
          recordMedico: "",
          fechaRegistro: new Date().toISOString().split("T")[0],
          signosVitales: "",
          motivoConsulta: "",
          especialidad: "",
          diagnostico: "",
          nombreMedico: "",
        },
      ],
    }));
  };

  const removeRecordMedico = (index: number) => {
    setFormData(prev => ({
      ...prev,
      recordsMedicos: prev.recordsMedicos.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/historias-clinicas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          pacienteId,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al crear la historia clínica");
      }

      toast.success("Historia clínica creada correctamente");
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Error al crear la historia clínica"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Número de Historia</label>
          <Input
            type="number"
            name="numeroHistoria"
            value={formData.numeroHistoria}
            onChange={(e) => setFormData({...formData, numeroHistoria: parseInt(e.target.value)})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Fecha de Creación</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full pl-3 text-left font-normal",
                  !formData.fechaCreacion && "text-muted-foreground"
                )}
              >
                {formData.fechaCreacion ? (
                  format(new Date(formData.fechaCreacion), "PPP")
                ) : (
                  <span>Selecciona una fecha</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={new Date(formData.fechaCreacion)}
                onSelect={(date) => handleDateChange(date, "fechaCreacion")}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Contacto de Emergencia</label>
          <Input
            name="contactoEmergencia"
            value={formData.contactoEmergencia}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Teléfono de Emergencia</label>
          <Input
            type="number"
            name="telefonoEmergencia"
            value={formData.telefonoEmergencia}
            onChange={(e) => setFormData({...formData, telefonoEmergencia: parseInt(e.target.value)})}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Antecedentes Médicos</label>
        <Textarea
          name="antecedentesMedicos"
          value={formData.antecedentesMedicos}
          onChange={handleChange}
          className="min-h-[100px]"
          placeholder="Describa los antecedentes médicos del paciente"
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Registros Médicos</h3>
          <Button type="button" variant="outline" onClick={addRecordMedico}>
            Añadir Registro
          </Button>
        </div>

        {formData.recordsMedicos.map((record, index) => (
          <div key={index} className="border p-4 rounded-lg space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-medium">Registro #{index + 1}</h4>
              <Button
                type="button"
                variant="destructive"
                size="sm"
                onClick={() => removeRecordMedico(index)}
              >
                Eliminar
              </Button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Registro Médico</label>
              <Textarea
                name="recordMedico"
                value={record.recordMedico}
                onChange={(e) => handleRecordChange(index, e)}
                className="min-h-[80px]"
                placeholder="Detalles del registro médico"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Fecha de Registro</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !record.fechaRegistro && "text-muted-foreground"
                      )}
                    >
                      {record.fechaRegistro ? (
                        format(new Date(record.fechaRegistro), "PPP")
                      ) : (
                        <span>Selecciona una fecha</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={new Date(record.fechaRegistro)}
                      onSelect={(date) => handleRecordDateChange(index, date)}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Signos Vitales</label>
                <Input
                  name="signosVitales"
                  value={record.signosVitales}
                  onChange={(e) => handleRecordChange(index, e)}
                  placeholder="Ej: TA: 120/80, FC: 70"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Motivo de Consulta</label>
                <Input
                  name="motivoConsulta"
                  value={record.motivoConsulta}
                  onChange={(e) => handleRecordChange(index, e)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Especialidad</label>
                <Input
                  name="especialidad"
                  value={record.especialidad}
                  onChange={(e) => handleRecordChange(index, e)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Diagnóstico</label>
                <Input
                  name="diagnostico"
                  value={record.diagnostico}
                  onChange={(e) => handleRecordChange(index, e)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Nombre del Médico</label>
                <Input
                  name="nombreMedico"
                  value={record.nombreMedico}
                  onChange={(e) => handleRecordChange(index, e)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Guardando..." : "Guardar Historia Clínica"}
      </Button>
    </form>
  );
}
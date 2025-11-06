import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SpecialistList } from "@/components/SpecialistList";
import { BookingCalendar } from "@/components/BookingCalendar";
import { TimeSlotSelector } from "@/components/TimeSlotSelector";

interface Specialist {
  id: string;
  name: string;
  email: string;
  specialty: string;
  image: string;
}

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  specialtyType?: "primaria" | "psicologica" | "dental" | "medica";
}

export function BookingDialog({ open, onOpenChange, specialtyType = "primaria" }: BookingDialogProps) {
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Define specialists for each specialty type
  const specialistsByType: Record<string, Specialist[]> = {
    primaria: [
      {
        id: "1",
        name: "Dr. Carlos Mendoza Silva",
        email: "carlos.mendoza@usm.cl",
        specialty: "MEDICINA GENERAL",
        image: "/placeholder.svg"
      },
      {
        id: "2",
        name: "Dra. María González López",
        email: "maria.gonzalez@usm.cl",
        specialty: "MEDICINA GENERAL",
        image: "/placeholder.svg"
      },
      {
        id: "3",
        name: "Dr. Roberto Fernández Castro",
        email: "roberto.fernandez@usm.cl",
        specialty: "MEDICINA GENERAL",
        image: "/placeholder.svg"
      },
      {
        id: "4",
        name: "Dra. Patricia Rojas Vidal",
        email: "patricia.rojas@usm.cl",
        specialty: "MEDICINA GENERAL",
        image: "/placeholder.svg"
      },
    ],
    psicologica: [
      {
        id: "1",
        name: "Ps. Ana María Torres Ruiz",
        email: "ana.torres@usm.cl",
        specialty: "PSICOLOGÍA CLÍNICA",
        image: "/placeholder.svg"
      },
      {
        id: "2",
        name: "Ps. Juan Pablo Morales Soto",
        email: "juan.morales@usm.cl",
        specialty: "PSICOLOGÍA EDUCACIONAL",
        image: "/placeholder.svg"
      },
      {
        id: "3",
        name: "Ps. Carmen Valenzuela Pérez",
        email: "carmen.valenzuela@usm.cl",
        specialty: "PSICOLOGÍA CLÍNICA",
        image: "/placeholder.svg"
      },
      {
        id: "4",
        name: "Ps. Diego Ramírez Muñoz",
        email: "diego.ramirez@usm.cl",
        specialty: "PSICOLOGÍA ORGANIZACIONAL",
        image: "/placeholder.svg"
      },
    ],
    dental: [
      {
        id: "1",
        name: "Dr. Luis Herrera Espinoza",
        email: "luis.herrera@usm.cl",
        specialty: "ODONTOLOGÍA GENERAL",
        image: "/placeholder.svg"
      },
      {
        id: "2",
        name: "Dra. Sandra Pinto Vargas",
        email: "sandra.pinto@usm.cl",
        specialty: "ENDODONCIA",
        image: "/placeholder.svg"
      },
      {
        id: "3",
        name: "Dr. Andrés Soto Bravo",
        email: "andres.soto@usm.cl",
        specialty: "ORTODONCIA",
        image: "/placeholder.svg"
      },
      {
        id: "4",
        name: "Dra. Claudia Núñez Lagos",
        email: "claudia.nunez@usm.cl",
        specialty: "PERIODONCIA",
        image: "/placeholder.svg"
      },
    ],
    medica: [
      {
        id: "1",
        name: "Dr. Sebastián Jaña",
        email: "sebastian.jana@usm.cl",
        specialty: "MEDICINA INTERNA",
        image: "/placeholder.svg"
      },
      {
        id: "2",
        name: "Dra. Paulina Castro Vera",
        email: "paulina.castro@usm.cl",
        specialty: "CARDIOLOGÍA",
        image: "/placeholder.svg"
      },
      {
        id: "3",
        name: "Dr. Miguel Ángel Reyes Díaz",
        email: "miguel.reyes@usm.cl",
        specialty: "TRAUMATOLOGÍA",
        image: "/placeholder.svg"
      },
      {
        id: "4",
        name: "Dra. Isabel Fuentes Alarcón",
        email: "isabel.fuentes@usm.cl",
        specialty: "GINECOLOGÍA",
        image: "/placeholder.svg"
      },
    ],
  };

  const specialists = specialistsByType[specialtyType] || specialistsByType.primaria;

  const handleReset = () => {
    setSelectedSpecialist(null);
    setSelectedDate(undefined);
    setSelectedTime(null);
  };

  const handleConfirm = () => {
    if (selectedSpecialist && selectedDate && selectedTime) {
      alert(`Reserva confirmada:\nEspecialista: ${selectedSpecialist.name}\nFecha: ${selectedDate.toLocaleDateString('es-ES')}\nHora: ${selectedTime}`);
      handleReset();
      onOpenChange(false);
    }
  };

  const getSpecialtyTitle = () => {
    const titles: Record<string, string> = {
      primaria: "Atención Primaria",
      psicologica: "Atención Psicológica",
      dental: "Atención Dental",
      medica: "Atención Médica"
    };
    return titles[specialtyType] || "Atención Médica";
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Reserva de Hora - {getSpecialtyTitle()}
          </DialogTitle>
          <DialogDescription>
            Selecciona un especialista, fecha y hora para tu cita médica
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          {!selectedSpecialist ? (
            <SpecialistList 
              specialists={specialists} 
              onSelectSpecialist={setSelectedSpecialist} 
            />
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 border rounded-lg bg-card">
                <div>
                  <h3 className="font-semibold">{selectedSpecialist.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedSpecialist.specialty}</p>
                  <p className="text-sm text-muted-foreground">{selectedSpecialist.email}</p>
                </div>
                <button
                  onClick={handleReset}
                  className="text-sm text-primary hover:underline"
                >
                  Cambiar especialista
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <BookingCalendar 
                  selectedDate={selectedDate}
                  onSelectDate={setSelectedDate}
                />
                
                {selectedDate && (
                  <TimeSlotSelector
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                    onSelectTime={setSelectedTime}
                    onConfirm={handleConfirm}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

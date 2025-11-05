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
}

export function BookingDialog({ open, onOpenChange }: BookingDialogProps) {
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const specialists: Specialist[] = [
    {
      id: "1",
      name: "MONICA ALEJANDRA HEVIA VIAL",
      email: "monica.hevia@hospital.cl",
      specialty: "PEDIATRIA",
      image: "/placeholder.svg"
    },
    {
      id: "2",
      name: "ROBERTO BALASSA EHRENSTEIN",
      email: "roberto.balassa@hospital.cl",
      specialty: "PEDIATRIA",
      image: "/placeholder.svg"
    },
    {
      id: "3",
      name: "AURORA JESSICA BRAVO MUÑOZ",
      email: "aurora.bravo@hospital.cl",
      specialty: "PEDIATRIA",
      image: "/placeholder.svg"
    },
    {
      id: "4",
      name: "SHUY LING CHANG NIEMANN",
      email: "shuy.chang@hospital.cl",
      specialty: "PEDIATRIA",
      image: "/placeholder.svg"
    },
  ];

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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Reserva de Hora Médica</DialogTitle>
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

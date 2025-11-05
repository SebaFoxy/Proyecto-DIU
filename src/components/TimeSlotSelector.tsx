import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface TimeSlotSelectorProps {
  selectedDate: Date;
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
  onConfirm: () => void;
}

export function TimeSlotSelector({ 
  selectedDate, 
  selectedTime, 
  onSelectTime,
  onConfirm 
}: TimeSlotSelectorProps) {
  const timeSlots = [
    "8:30",
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
  ];

  return (
    <div className="space-y-4">
      <div className="text-center p-4 bg-selected rounded-lg">
        <p className="text-selected-foreground font-semibold text-lg">
          {format(selectedDate, "dd/MM/yyyy", { locale: es })}
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Horarios Disponibles</h3>
        <div className="grid grid-cols-2 gap-2 max-h-96 overflow-y-auto pr-2">
          {timeSlots.map((time) => (
            <div key={time} className="flex items-center justify-between p-3 border rounded-lg bg-card">
              <span className="text-sm font-medium">{time}</span>
              <Button
                size="sm"
                variant={selectedTime === time ? "default" : "outline"}
                onClick={() => onSelectTime(time)}
              >
                {selectedTime === time ? "Seleccionado" : "Reservar"}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {selectedTime && (
        <Button 
          className="w-full" 
          size="lg"
          onClick={onConfirm}
        >
          Confirmar Reserva
        </Button>
      )}
    </div>
  );
}

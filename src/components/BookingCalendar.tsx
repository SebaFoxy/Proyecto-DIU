import { Calendar } from "@/components/ui/calendar";
import { es } from "date-fns/locale";

interface BookingCalendarProps {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
}

export function BookingCalendar({ selectedDate, onSelectDate }: BookingCalendarProps) {
  // Mock available dates (in a real app, these would come from the backend)
  const availableDates = [
    new Date(2025, 10, 10), // Nov 10
    new Date(2025, 10, 12), // Nov 12
    new Date(2025, 10, 13), // Nov 13
    new Date(2025, 10, 17), // Nov 17
    new Date(2025, 10, 19), // Nov 19
    new Date(2025, 10, 20), // Nov 20
    new Date(2025, 10, 24), // Nov 24
    new Date(2025, 10, 26), // Nov 26
    new Date(2025, 10, 27), // Nov 27
  ];

  const isDateAvailable = (date: Date) => {
    return availableDates.some(
      (availableDate) =>
        availableDate.getDate() === date.getDate() &&
        availableDate.getMonth() === date.getMonth() &&
        availableDate.getFullYear() === date.getFullYear()
    );
  };

  const isDayDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || !isDateAvailable(date);
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-4">Selecciona una Fecha</h3>
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={onSelectDate}
        disabled={isDayDisabled}
        locale={es}
        className="rounded-lg border bg-card p-3 pointer-events-auto"
        classNames={{
          day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
          day: "h-10 w-10 text-sm font-medium",
          day_today: "bg-accent text-accent-foreground font-semibold",
        }}
      />
    </div>
  );
}

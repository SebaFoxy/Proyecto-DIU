import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Specialist {
  id: string;
  name: string;
  email: string;
  specialty: string;
  image: string;
}

interface SpecialistListProps {
  specialists: Specialist[];
  onSelectSpecialist: (specialist: Specialist) => void;
}

export function SpecialistList({ specialists, onSelectSpecialist }: SpecialistListProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Selecciona un Especialista</h3>
      <div className="grid gap-4">
        {specialists.map((specialist) => (
          <Card key={specialist.id} className="p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-1">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={specialist.image} alt={specialist.name} />
                  <AvatarFallback>{getInitials(specialist.name)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold">{specialist.name}</h4>
                  <p className="text-sm text-muted-foreground">{specialist.specialty}</p>
                  <p className="text-xs text-muted-foreground">{specialist.email}</p>
                </div>
              </div>
              <Button onClick={() => onSelectSpecialist(specialist)}>
                Seleccionar
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

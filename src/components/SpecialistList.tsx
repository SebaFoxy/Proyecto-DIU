import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

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
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold mb-4">Especialistas Disponibles</h3>
      {specialists.map((specialist) => (
        <div
          key={specialist.id}
          className="flex items-center justify-between p-4 border rounded-lg hover:border-primary transition-colors bg-card"
        >
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={specialist.image} alt={specialist.name} />
              <AvatarFallback>
                {specialist.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium">{specialist.name}</h4>
              <p className="text-sm text-muted-foreground">{specialist.specialty}</p>
              <p className="text-xs text-muted-foreground">{specialist.email}</p>
            </div>
          </div>
          <Button onClick={() => onSelectSpecialist(specialist)}>
            Seleccionar
          </Button>
        </div>
      ))}
    </div>
  );
}

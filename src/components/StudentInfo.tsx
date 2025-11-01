import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const StudentInfo = () => {
  const infoCards = [{
    title: "Información Académica",
    description: "Acceso a información académica, expedientes y servicios relacionados con tu formación universitaria. Expedientes Académicos, Certificados, Concentración de Notas e Información de Carreras.",
    backgroundImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://dee.usm.cl/"
  },];
  return <section id="student-info" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Información importante para el estudiante</h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infoCards.map((card, index) => <div 
              key={index} 
              className="relative h-80 rounded-lg overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105" 
              style={{
                backgroundImage: `url(${card.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              onClick={() => card.link && window.open(card.link, '_blank')}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="text-white text-xl font-semibold mb-2 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default StudentInfo;
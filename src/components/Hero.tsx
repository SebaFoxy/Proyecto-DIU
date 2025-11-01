import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, BookOpen } from "lucide-react";
import campusHero from "@/assets/campus-hero.jpg";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={campusHero} alt="Prestige University Campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-secondary">Dirección de relaciones estudiantiles</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">La Dirección de Relaciones Estudiantiles contribuye a la formación integral de la comunidad estudiantil de todos los Campus y Sedes de la USM. Provee apoyo psicosocial, asistencial y de fomento a iniciativas del estudiantado, con el objetivo de acompañarlos y ayudarlos durante su vida universitaria, especialmente atendiendo al legado testamentario de nuestro fundador.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" onClick={() => window.location.href = '#contact-form'}>Contactar</Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <Users className="h-12 w-12 text-secondary mb-4" />
            <div className="text-3xl font-bold mb-2">15,000+</div>
            <div className="text-white/80">Estudiantes</div>
          </div>
          <div className="flex flex-col items-center">
            <Award className="h-12 w-12 text-secondary mb-4" />
            <div className="text-3xl font-bold mb-2">Top 10</div>
            <div className="text-white/80">Ranking Nacional</div>
          </div>
          <div className="flex flex-col items-center">
            <BookOpen className="h-12 w-12 text-secondary mb-4" />
            <div className="text-3xl font-bold mb-2">80+</div>
            <div className="text-white/80">Programas</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>;
};
export default Hero;
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Portals = () => {
  const portals = [
    
    {
      title: "Fondos Concursables Actividades e Iniciativas Extracurriculares", 
      image: "/api/placeholder/400/300",
      description: "Postula a fondos para financiar actividades estudiantiles",
      url: "https://rree.usm.cl/fomento-iniciativas-estudiantiles/fondos-concursables/fondos-concursables-direccion-de-relaciones-estudiantiles-y-direccion-general-de-docencia/"
    },
    {
      title: "Fondo Concursable Apoyo Viajes Académicos Estudiantiles (versión 2025-2)",
      image: "/api/placeholder/400/300", 
      description: "Solicita apoyo financiero para viajes académicos",
      url: "https://rree.usm.cl/fomento-iniciativas-estudiantiles/fondos-concursables/fondo-concursable-apoyo-viajes-academicos-estudiantiles/"
    }
  ];

  return (
    <section id="portals" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Portales de Servicios Dirección de Relaciones Estudiantiles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Accede a nuestros portales especializados para gestionar trámites, 
            postular a fondos y acceder a servicios estudiantiles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portals.map((portal, index) => (
            <a
              key={index}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg bg-gray-900 aspect-[4/3] cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${portal.image})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-start justify-between mb-2">
                  <div className="w-1 h-8 bg-yellow-400 mr-4 flex-shrink-0" />
                  <h3 className="text-white font-semibold text-lg leading-tight flex-1">
                    {portal.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            ¿Necesitas ayuda con algún portal? Nuestro equipo de soporte está disponible para asistirte.
          </p>
          <Button size="lg" onClick={() => window.location.href = '#contact-form'}>
            Contactar Soporte
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portals;
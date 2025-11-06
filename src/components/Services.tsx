import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
const Services = () => {
  const services = [{
    title: "Tarjeta Universitaria Inteligente (TUI)",
    description: "Gestión y servicios relacionados con tu Tarjeta Universitaria Inteligente.",
    icon: CreditCard,
    features: ["Activación de Tarjeta", "Recarga de Saldo", "Historial de Transacciones", "Reposición de Tarjeta"],
    link: "https://tui.usm.cl/"
  }];
  return <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Tarjeta USM</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ve como sacar tu Tarjeta Universitaria Inteligente (TUI) y los servicios que puedes realizar con ella.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
          {services.map((service, index) => {
          const IconComponent = service.icon;
          return <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>)}
                  </ul>
                  
                  <Link to="/tarjeta-tui">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Más Información
                    </Button>
                  </Link>
                </CardContent>
              </Card>;
        })}
        </div>

      </div>
    </section>;
};
export default Services;
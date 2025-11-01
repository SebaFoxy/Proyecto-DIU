import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
const News = () => {
  const newsItems = [{
    title: "USM recibe 50 millones de pesos para investigación en energías renovables",
    excerpt: "La fundacion de ciencias ha otorgado un financiamiento significativo para proyectos innovadores en energías limpias.",
    date: "15 de diciembre, 2023",
    author: "Dr. Sarah Johnson",
    category: "Investigaci'on",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center"
  }, {
    title: "Biotecnología USM lanza nuevo programa de magíster",
    excerpt: "La nueva mención en biotecnología médica busca formar profesionales especializados en terapias avanzadas.",
    date: "10 de diciembre, 2023",
    author: "Oficina de Postgrados USM",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center"
  }, {
    title: "EStudiante de Ciencias de la Computación gana concurso internacional de programación",
    excerpt: "El estudiante Juan Pérez destacó entre miles de participantes con su innovadora solución algorítmica.",
    date: "8 de Diciembre, 2023",
    author: "Prof. Michael Roberts",
    category: "Logros Estudiantiles",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop&crop=center"
  }];
  return <section id="news" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Noticias</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Noticias importantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-card">
              <div className="relative overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{item.category}</Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {item.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {item.author}
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default News;
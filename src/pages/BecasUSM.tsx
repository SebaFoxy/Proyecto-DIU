import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, GraduationCap, Award, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BecasUSM = () => {
  const becas = [
    {
      title: "Beca Excelencia Académica USM",
      porcentaje: "100%",
      requisitos: [
        "Puntaje PSU/PAES destacado",
        "Ranking escolar top 10%",
        "Promedio NEM sobre 6.0"
      ],
      descripcion: "Beca completa por mérito académico para estudiantes con excelente rendimiento en educación media.",
      tipo: "Mérito Académico",
      icon: GraduationCap
    },
    {
      title: "Beca Deportiva USM",
      porcentaje: "50-100%",
      requisitos: [
        "Destacado desempeño deportivo",
        "Participación en competencias nacionales",
        "Compromiso con selección USM"
      ],
      descripcion: "Apoyo para deportistas destacados que representen a la universidad en competencias.",
      tipo: "Deportiva",
      icon: Trophy
    },
    {
      title: "Beca Liderazgo Estudiantil",
      porcentaje: "30-70%",
      requisitos: [
        "Participación en actividades comunitarias",
        "Liderazgo demostrado",
        "Proyecto de impacto social"
      ],
      descripcion: "Reconoce el liderazgo y compromiso social de estudiantes con trayectoria en su comunidad.",
      tipo: "Liderazgo",
      icon: Users
    },
    {
      title: "Beca de Mantención USM",
      porcentaje: "Variable",
      requisitos: [
        "Promedio ponderado sobre 5.0",
        "Situación socioeconómica vulnerable",
        "Estudiante regular"
      ],
      descripcion: "Apoyo económico mensual para gastos de mantención durante el semestre académico.",
      tipo: "Mantención",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Link 
        to="/" 
        className="fixed top-24 left-4 z-40 inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg hover:bg-primary/90 transition-all"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver
      </Link>
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Becas y Créditos USM
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              La Universidad Técnica Federico Santa María ofrece diversos programas de becas institucionales 
              para reconocer la excelencia académica, deportiva y el liderazgo estudiantil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {becas.map((beca, index) => {
              const IconComponent = beca.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="h-10 w-10 text-primary" />
                      <Badge variant="secondary">{beca.tipo}</Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">{beca.title}</CardTitle>
                    <CardDescription className="text-2xl font-bold text-primary">
                      {beca.porcentaje}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{beca.descripcion}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Requisitos:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {beca.requisitos.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle>Proceso de Postulación</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Postulación</h4>
                <p className="text-muted-foreground">
                  Las becas USM se postulan automáticamente al momento de la matrícula o mediante formulario especial 
                  disponible en la Dirección de Asuntos Estudiantiles.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">2. Evaluación</h4>
                <p className="text-muted-foreground">
                  Los antecedentes son evaluados por comisión especializada según el tipo de beca.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">3. Resultados</h4>
                <p className="text-muted-foreground">
                  Los resultados se publican en el portal estudiantil y se notifica vía correo electrónico.
                </p>
              </div>
              
              <div className="pt-4">
                <Button size="lg" className="w-full md:w-auto">
                  Contactar Asuntos Estudiantiles
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BecasUSM;

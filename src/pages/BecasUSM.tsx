import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, GraduationCap, Award, Users, ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  nombre: z.string().min(1, "El nombre es requerido").max(100, "Máximo 100 caracteres"),
  rut: z.string()
    .regex(/^\d{7,8}-[\dkK]$/, "Formato de RUT inválido (xxxxxxxx-x)"),
  correo: z.string()
    .email("Correo inválido")
    .refine((email) => email.endsWith("@gmail.com"), "Solo se aceptan correos @gmail.com")
});

type FormData = z.infer<typeof formSchema>;

const BecasUSM = () => {
  const [selectedBeca, setSelectedBeca] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      rut: "",
      correo: ""
    }
  });
   useEffect(() => {
    // Scroll al inicio de la página al cargar
    window.scrollTo(0, 0);
  }, []);
  const onSubmit = (data: FormData) => {
    console.log("Postulación enviada:", { ...data, beca: selectedBeca });
    toast({
      title: "Solicitud enviada",
      description: "Su postulación será revisada por el equipo de Asuntos Estudiantiles. Recibirá una respuesta en su correo electrónico.",
    });
    setIsDialogOpen(false);
    form.reset();
  };

  const handlePostular = (becaTitle: string) => {
    setSelectedBeca(becaTitle);
    setIsDialogOpen(true);
  };

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
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-foreground">Requisitos:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {beca.requisitos.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      onClick={() => handlePostular(beca.title)}
                      className="w-full"
                    >
                      Postular
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          
        </div>
      </main>
      <Footer />
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[700px]" hideClose>
          <Button
            variant="ghost"
            className="absolute left-4 top-4 gap-2"
            onClick={() => setIsDialogOpen(false)}
          >
            <ArrowLeft className="h-4 w-4" />
            Volver
          </Button>
          
          <DialogHeader>
            <DialogTitle className="text-center pt-2">
              Postulación a {selectedBeca}
            </DialogTitle>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre Completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingrese su nombre completo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="rut"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>RUT</FormLabel>
                    <FormControl>
                      <Input placeholder="12345678-9" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="correo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo Electrónico</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="ejemplo@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full">
                Enviar Postulación
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BecasUSM;

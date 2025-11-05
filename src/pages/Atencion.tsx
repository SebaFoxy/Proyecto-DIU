import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Stethoscope, Brain, Activity, Clock, MapPin, Phone, Mail, ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/BookingDialog.tsx";

const Atencion = () => {
  const location = useLocation();
  const [bookingOpen, setBookingOpen] = useState(false);
  
  // Determinar el tab activo desde el inicio basado en el hash
  const getInitialTab = () => {
    const hash = location.hash.substring(1);
    if (hash === "primaria" || hash === "psicologica" || hash === "dental"|| hash === "medica") {
      return hash;
    }
    return "primaria";
  };
  
  const [activeTab, setActiveTab] = useState(getInitialTab);

  useEffect(() => {
    // Scroll al inicio de la página al cargar
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const tabValue = location.hash.substring(1);
      if (tabValue === "primaria" || tabValue === "psicologica" || tabValue === "dental"|| tabValue === "medica") {
        setActiveTab(tabValue);
      }
    }
  }, [location.hash]);

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
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Servicios de Atención</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conoce los diferentes tipos de atención médica disponibles para ti
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="primaria" className="flex items-center gap-2">
                <Stethoscope className="h-4 w-4" />
                Atención Primaria
              </TabsTrigger>
              <TabsTrigger value="psicologica" className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                Atención Psicológica
              </TabsTrigger>
              <TabsTrigger value="dental" className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Atención Dental
              </TabsTrigger>
              <TabsTrigger value="medica" className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Atención Medica
              </TabsTrigger>
              
            </TabsList>

            {/* Atención Primaria */}
            <TabsContent value="primaria" className="space-y-6">
              <Card className="relative">
                <Button
                  onClick={() => setBookingOpen(true)}
                  className="absolute top-4 right-4 z-40 flex items-center gap-2 shadow-lg"
                >
                  <Calendar className="h-4 w-4" />
                  Pedir Hora Médica
                </Button>
                <CardHeader>
          
                  <div className="flex items-center gap-3 mb-2">
                    <Stethoscope className="h-8 w-8 text-primary" />
                    <CardTitle>Atención Primaria de Salud</CardTitle>
                  </div>
                  <CardDescription>
                    Servicios médicos generales y de prevención para la comunidad universitaria
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-foreground">Servicios Disponibles</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Consultas médicas generales</li>
                      <li>• Control de enfermedades crónicas</li>
                      <li>• Atención de urgencias menores</li>
                      <li>• Vacunación y campañas preventivas</li>
                      <li>• Exámenes de laboratorio básicos</li>
                      <li>• Recetas médicas y tratamientos</li>
                      <li>• Certificados médicos</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-foreground">¿Cuándo Acudir?</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Síntomas gripales o resfriados</li>
                      <li>• Dolores musculares o de cabeza</li>
                      <li>• Problemas digestivos</li>
                      <li>• Control de presión arterial</li>
                      <li>• Evaluación de salud general</li>
                      <li>• Seguimiento de tratamientos</li>
                    </ul>
                  </div>

                  

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-2">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Horario</p>
                        <p className="text-muted-foreground">Lunes a Viernes: 8:00 - 18:00</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Ubicación</p>
                        <p className="text-muted-foreground">Edificio Central, 2do Piso</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Teléfono</p>
                        <p className="text-muted-foreground">+56 2 2303 5000</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">atencion.primaria@usm.cl</p>
                      </div>
                    </div>
                  </div>

                  
                </CardContent>
              </Card>
            </TabsContent>

            {/* Atención Psicológica */}
            <TabsContent value="psicologica" className="space-y-6">
              <Card className="relative">
                <Button
                  onClick={() => setBookingOpen(true)}
                  className="absolute top-4 right-4 z-40 flex items-center gap-2 shadow-lg"
                >
                  <Calendar className="h-4 w-4" />
                  Pedir Hora Médica
                </Button>
                
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Brain className="h-8 w-8 text-primary" />
                    <CardTitle>Atención Psicológica</CardTitle>
                  </div>
                  <CardDescription>
                    Apoyo profesional para tu bienestar emocional y mental
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-foreground">Servicios Disponibles</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Evaluación psicológica inicial</li>
                      <li>• Terapia individual</li>
                      <li>• Orientación vocacional</li>
                      <li>• Manejo de estrés académico</li>
                      <li>• Apoyo en crisis emocionales</li>
                      <li>• Talleres de desarrollo personal</li>
                      <li>• Derivación a especialistas</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-foreground">¿Cuándo Acudir?</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Ansiedad o estrés constante</li>
                      <li>• Dificultades en el rendimiento académico</li>
                      <li>• Problemas de adaptación universitaria</li>
                      <li>• Conflictos interpersonales</li>
                      <li>• Baja autoestima o motivación</li>
                      <li>• Necesidad de orientación personal</li>
                    </ul>
                  </div>

                  <div className="bg-accent/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Confidencialidad:</strong> Todas las consultas son estrictamente confidenciales y se realizan en un ambiente seguro y profesional.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-2">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Horario</p>
                        <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 17:00</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Ubicación</p>
                        <p className="text-muted-foreground">Edificio de Servicios, 3er Piso</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Teléfono</p>
                        <p className="text-muted-foreground">+56 2 2303 5200</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">psicologia@usm.cl</p>
                      </div>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </TabsContent>

            {/* Atención Dental */}
            <TabsContent value="dental" className="space-y-6">
              <Card className="relative">
                <Button
                  onClick={() => setBookingOpen(true)}
                  className="absolute top-4 right-4 z-40 flex items-center gap-2 shadow-lg"
                >
                  <Calendar className="h-4 w-4" />
                  Pedir Hora Médica
                </Button>
                

                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Activity className="h-8 w-8 text-primary" />
                    <CardTitle>Atención Dental</CardTitle>
                  </div>
                  <CardDescription>
                    Rehabilitación física y prevención de lesiones
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-foreground">Servicios Disponibles</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Evaluación kinesiológica completa</li>
                      <li>• Rehabilitación de lesiones deportivas</li>
                      <li>• Tratamiento de lesiones musculares</li>
                      <li>• Terapia post-quirúrgica</li>
                      <li>• Tratamiento de dolor de espalda</li>
                      <li>• Prevención de lesiones</li>
                      <li>• Ejercicios terapéuticos personalizados</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-foreground">¿Cuándo Acudir?</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Lesiones deportivas o físicas</li>
                      <li>• Dolores musculares persistentes</li>
                      <li>• Problemas de postura</li>
                      <li>• Recuperación post-operatoria</li>
                      <li>• Tendinitis o contracturas</li>
                      <li>• Prevención antes de actividad física intensa</li>
                    </ul>
                  </div>

                  <div className="bg-accent/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Importante:</strong> Se recomienda traer ropa cómoda para las sesiones de terapia y seguir las indicaciones del kinesiólogo para mejores resultados.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-2">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Horario</p>
                        <p className="text-muted-foreground">Lunes a Viernes: 8:30 - 17:30</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Ubicación</p>
                        <p className="text-muted-foreground">Centro Deportivo, 1er Piso</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Teléfono</p>
                        <p className="text-muted-foreground">+56 2 2303 5300</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">kinesiologia@usm.cl</p>
                      </div>
                    </div>
                  </div>

                  
                </CardContent>
              </Card>
            </TabsContent>

            {/* Atención Medica */}
            <TabsContent value="medica" className="space-y-6">
              <Card className="relative">
                <Button
                  onClick={() => setBookingOpen(true)}
                  className="absolute top-4 right-4 z-40 flex items-center gap-2 shadow-lg"
                >
                  <Calendar className="h-4 w-4" />
                  Pedir Hora Médica
                </Button>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Activity className="h-8 w-8 text-primary" />
                    <CardTitle>Atención Médica</CardTitle>
                  </div>
                  <CardDescription>
                    Rehabilitación física y prevención de lesiones
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-foreground">Servicios Disponibles</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Evaluación kinesiológica completa</li>
                      <li>• Rehabilitación de lesiones deportivas</li>
                      <li>• Tratamiento de lesiones musculares</li>
                      <li>• Terapia post-quirúrgica</li>
                      <li>• Tratamiento de dolor de espalda</li>
                      <li>• Prevención de lesiones</li>
                      <li>• Ejercicios terapéuticos personalizados</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-foreground">¿Cuándo Acudir?</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Lesiones deportivas o físicas</li>
                      <li>• Dolores musculares persistentes</li>
                      <li>• Problemas de postura</li>
                      <li>• Recuperación post-operatoria</li>
                      <li>• Tendinitis o contracturas</li>
                      <li>• Prevención antes de actividad física intensa</li>
                    </ul>
                  </div>

                  <div className="bg-accent/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Importante:</strong> Se recomienda traer ropa cómoda para las sesiones de terapia y seguir las indicaciones del kinesiólogo para mejores resultados.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-2">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Horario</p>
                        <p className="text-muted-foreground">Lunes a Viernes: 8:30 - 17:30</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Ubicación</p>
                        <p className="text-muted-foreground">Centro Deportivo, 1er Piso</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Teléfono</p>
                        <p className="text-muted-foreground">+56 2 2303 5300</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">kinesiologia@usm.cl</p>
                      </div>
                    </div>
                  </div>

                  
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
      <Footer />
    </div>
  );
};

export default Atencion;

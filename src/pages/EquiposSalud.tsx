import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Phone, Mail, Clock, ArrowLeft, Stethoscope, Brain, Activity } from "lucide-react";

const EquiposSalud = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const getInitialTab = () => {
    const hash = location.hash.substring(1);
    if (hash === "primaria" || hash === "psicologica" || hash === "dental" || hash === "medica") {
      return hash;
    }
    return "primaria";
  };
  
  const [activeTab, setActiveTab] = useState(getInitialTab);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const tabValue = location.hash.substring(1);
      if (tabValue === "primaria" || tabValue === "psicologica" || tabValue === "dental" || tabValue === "medica") {
        setActiveTab(tabValue);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <button
        onClick={() => navigate(-1)}
        className="fixed top-24 left-4 z-40 inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg hover:bg-primary/90 transition-all cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver
      </button>
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Equipos de Salud</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conoce a los profesionales que velan por tu bienestar
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
                Atención Médica
              </TabsTrigger>
            </TabsList>

            {/* Equipo Atención Primaria */}
            <TabsContent value="primaria" className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Equipo de Atención Primaria</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Médicos Generales</CardTitle>
                    <CardDescription>Atención médica integral</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Dr. Carlos Mendoza Silva - Medicina General</li>
                      <li>• Dra. María González López - Medicina General</li>
                      <li>• Dr. Roberto Fernández Castro - Medicina General</li>
                      <li>• Dra. Patricia Rojas Vidal - Medicina General</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Enfermería</CardTitle>
                    <CardDescription>Cuidado y atención profesional</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Enf. Ana López Morales - Enfermera Jefe</li>
                      <li>• Enf. Pedro Martínez Ruiz - Atención Primaria</li>
                      <li>• Enf. Laura Sánchez Pérez - Urgencias</li>
                      <li>• Enf. Javier Torres Silva - Procedimientos</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Servicios Disponibles</CardTitle>
                    <CardDescription>Atención integral de salud</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Consultas médicas generales</li>
                      <li>• Control de enfermedades crónicas</li>
                      <li>• Atención de urgencias menores</li>
                      <li>• Vacunación preventiva</li>
                      <li>• Exámenes de laboratorio</li>
                      <li>• Certificados médicos</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Horarios y Contacto</CardTitle>
                    <CardDescription>Información de atención</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Lunes a Viernes: 8:00 - 18:00</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>+56 2 2303 5000</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span>atencion.primaria@usm.cl</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Equipo Atención Psicológica */}
            <TabsContent value="psicologica" className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Equipo de Atención Psicológica</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Psicólogos Clínicos</CardTitle>
                    <CardDescription>Apoyo emocional y terapéutico</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Ps. Ana María Torres Ruiz - Psicología Clínica</li>
                      <li>• Ps. Juan Pablo Morales Soto - Psicología Educacional</li>
                      <li>• Ps. Carmen Valenzuela Pérez - Psicología Clínica</li>
                      <li>• Ps. Diego Ramírez Muñoz - Psicología Organizacional</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Áreas de Especialización</CardTitle>
                    <CardDescription>Diferentes enfoques terapéuticos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Terapia cognitivo-conductual</li>
                      <li>• Orientación vocacional</li>
                      <li>• Manejo de ansiedad y estrés</li>
                      <li>• Desarrollo personal</li>
                      <li>• Apoyo en crisis</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Servicios Disponibles</CardTitle>
                    <CardDescription>Atención psicológica integral</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Evaluación psicológica inicial</li>
                      <li>• Terapia individual</li>
                      <li>• Orientación vocacional</li>
                      <li>• Manejo de estrés académico</li>
                      <li>• Apoyo en crisis emocionales</li>
                      <li>• Talleres grupales</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Horarios y Contacto</CardTitle>
                    <CardDescription>Información de atención</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Lunes a Viernes: 9:00 - 17:00</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>+56 2 2303 5200</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span>psicologia@usm.cl</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Equipo Atención Dental */}
            <TabsContent value="dental" className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Equipo de Atención Dental</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Odontólogos</CardTitle>
                    <CardDescription>Especialistas en salud dental</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Dr. Luis Herrera Espinoza - Odontología General</li>
                      <li>• Dra. Sandra Pinto Vargas - Endodoncia</li>
                      <li>• Dr. Andrés Soto Bravo - Ortodoncia</li>
                      <li>• Dra. Claudia Núñez Lagos - Periodoncia</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Higienistas Dentales</CardTitle>
                    <CardDescription>Prevención y cuidado dental</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Hig. Daniela Morales Vera - Higiene Dental</li>
                      <li>• Hig. Andrés Jiménez Castro - Profilaxis</li>
                      <li>• Hig. Gabriela Rojas Pinto - Educación Dental</li>
                      <li>• Hig. Carolina Méndez Silva - Prevención</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Servicios Disponibles</CardTitle>
                    <CardDescription>Tratamientos dentales completos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Exámenes dentales preventivos</li>
                      <li>• Limpieza y profilaxis dental</li>
                      <li>• Tratamiento de caries</li>
                      <li>• Endodoncia (tratamiento de conducto)</li>
                      <li>• Extracciones dentales</li>
                      <li>• Ortodoncia básica</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Horarios y Contacto</CardTitle>
                    <CardDescription>Información de atención</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Lunes a Viernes: 8:30 - 17:30</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>+56 2 2303 5100</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span>salud.dental@usm.cl</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Equipo Atención Médica */}
            <TabsContent value="medica" className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Equipo de Atención Médica Especializada</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Médicos Especialistas</CardTitle>
                    <CardDescription>Atención médica especializada</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Dr. Fernando Ibáñez Cortés - Medicina Interna</li>
                      <li>• Dra. Paulina Castro Vera - Cardiología</li>
                      <li>• Dr. Miguel Ángel Reyes Díaz - Traumatología</li>
                      <li>• Dra. Isabel Fuentes Alarcón - Ginecología</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Personal de Apoyo</CardTitle>
                    <CardDescription>Equipo multidisciplinario</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Tecnólogos médicos</li>
                      <li>• Personal de enfermería especializada</li>
                      <li>• Técnicos paramédicos</li>
                      <li>• Administrativos de coordinación</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Servicios Disponibles</CardTitle>
                    <CardDescription>Atención médica especializada</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Consultas de medicina interna</li>
                      <li>• Evaluación cardiológica</li>
                      <li>• Atención traumatológica</li>
                      <li>• Consultas ginecológicas</li>
                      <li>• Exámenes especializados</li>
                      <li>• Derivaciones a especialistas</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Horarios y Contacto</CardTitle>
                    <CardDescription>Información de atención</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Lunes a Viernes: 9:00 - 18:00</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>+56 2 2303 5300</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span>especialidades@usm.cl</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EquiposSalud;

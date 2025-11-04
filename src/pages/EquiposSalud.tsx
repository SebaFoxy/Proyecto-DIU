import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Phone, Mail, Clock, ArrowLeft } from "lucide-react";

const EquiposSalud = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
            <h1 className="text-4xl font-bold mb-4 text-foreground">Equipos de Salud</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conoce a los profesionales que velan por tu bienestar
            </p>
          </div>

          {/* Equipo Servicio Médico */}
          <section id="medico" className="mb-16 scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Equipo Servicio Médico</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Médicos Generales</CardTitle>
                  <CardDescription>Atención médica integral</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Dr. Juan Pérez - Medicina General</li>
                    <li>• Dra. María González - Medicina Interna</li>
                    <li>• Dr. Carlos Rodríguez - Medicina Familiar</li>
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
                    <li>• Enf. Ana López - Enfermera Jefe</li>
                    <li>• Enf. Pedro Martínez - Atención Primaria</li>
                    <li>• Enf. Laura Sánchez - Urgencias</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Psicología</CardTitle>
                  <CardDescription>Apoyo emocional y mental</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Ps. Sofía Ramírez - Psicología Clínica</li>
                    <li>• Ps. Diego Torres - Orientación Vocacional</li>
                    <li>• Ps. Carmen Flores - Terapia Individual</li>
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
                    <span>salud.medico@usm.cl</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Equipo Servicio Dental */}
          <section id="dental" className="mb-16 scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Equipo Servicio Dental</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Odontólogos</CardTitle>
                  <CardDescription>Especialistas en salud dental</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Dr. Roberto Silva - Odontología General</li>
                    <li>• Dra. Patricia Vargas - Endodoncia</li>
                    <li>• Dr. Fernando Castro - Ortodoncia</li>
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
                    <li>• Hig. Daniela Morales - Higiene Dental</li>
                    <li>• Hig. Andrés Jiménez - Profilaxis</li>
                    <li>• Hig. Gabriela Rojas - Educación Dental</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Servicios Disponibles</CardTitle>
                  <CardDescription>Tratamientos ofrecidos</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Exámenes dentales preventivos</li>
                    <li>• Limpieza dental</li>
                    <li>• Tratamiento de caries</li>
                    <li>• Endodoncia</li>
                    <li>• Extracciones</li>
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
                    <span>+56 2 2303 5100</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>salud.dental@usm.cl</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EquiposSalud;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Stethoscope, Shield, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const HealthCare = () => {
  return (
    <section id="health-care" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Atención en Salud</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Servicios de salud integral para la comunidad universitaria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Equipo de Servicios */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-8 w-8 text-primary" />
                <CardTitle>Equipo de Servicios</CardTitle>
              </div>
              <CardDescription>
                Profesionales de salud al servicio de la comunidad universitaria
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/equipos-salud#primaria" 
                    className="text-primary hover:underline font-medium flex items-center gap-2"
                  >
                    • Equipo Bienestar Estudiantil
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/equipos-salud#psicologica" 
                    className="text-primary hover:underline font-medium flex items-center gap-2"
                  >
                    • Equipo Psicología
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/equipos-salud#dental" 
                    className="text-primary hover:underline font-medium flex items-center gap-2"
                  >
                    • Equipo Servicio Dental
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/equipos-salud#medica" 
                    className="text-primary hover:underline font-medium flex items-center gap-2"
                  >
                    • Equipo Servicio Médico
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Atención */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Stethoscope className="h-8 w-8 text-primary" />
                <CardTitle>Atención</CardTitle>
              </div>
              <CardDescription>
                Tipos de atención médica disponibles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/atencion#primaria" 
                    className="text-primary hover:underline font-medium flex items-center gap-2"
                  >
                    • Atencion al Bienestar Estudiantil
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/atencion#psicologica" 
                    className="text-primary hover:underline font-medium flex items-center gap-2"
                  >
                    • Atención Psicológica
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/atencion#dental" 
                    className="text-primary hover:underline font-medium flex items-center gap-2"
                  >
                    • Atención Dental
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/atencion#medica" 
                    className="text-primary hover:underline font-medium flex items-center gap-2"
                  >
                    • Atención Medica
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Seguros */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="h-8 w-8 text-primary" />
                <CardTitle>Seguros</CardTitle>
              </div>
              <CardDescription>
                Cobertura de salud para la comunidad estudiantil
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Seguro de accidentes estudiantiles</li>
                <li>• Cobertura en campus</li>
                <li>• Atención de emergencias</li>
                <li>• Derivaciones a especialistas</li>
                <li>• Convenios con centros de salud</li>
              </ul>
            </CardContent>
          </Card>

          {/* Normativa */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <FileText className="h-8 w-8 text-primary" />
                <CardTitle>Normativa</CardTitle>
              </div>
              <CardDescription>
                Reglamentos y protocolos de atención en salud
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Reglamento de servicios médicos</li>
                <li>• Protocolos de atención</li>
                <li>• Derechos y deberes del estudiante</li>
                <li>• Procedimientos de emergencia</li>
                <li>• Confidencialidad médica</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HealthCare;

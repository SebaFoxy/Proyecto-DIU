import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CreditCard, Key, Store } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TarjetaTUI = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("beneficios");

  useEffect(() => {
    window.scrollTo(0, 0);
    const hash = location.hash.replace('#', '');
    if (hash) {
      setActiveTab(hash);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Volver
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tarjeta de Inteligencia Universitaria (TUI)
            </h1>
            <p className="text-xl text-muted-foreground">
              Toda la información sobre tu tarjeta universitaria inteligente
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="beneficios">Beneficios</TabsTrigger>
              <TabsTrigger value="activacion">Activación</TabsTrigger>
              <TabsTrigger value="convenios">Convenios</TabsTrigger>
            </TabsList>

            <TabsContent value="beneficios" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Beneficios de la Tarjeta TUI</CardTitle>
                      <CardDescription>
                        Conoce todas las ventajas de tu tarjeta universitaria
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Beneficios Principales</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Identificación oficial como estudiante USM</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Acceso a todas las instalaciones universitarias</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Monedero electrónico para compras dentro del campus</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Descuentos en comercios adheridos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Registro automático de asistencia</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Acceso a bibliotecas y préstamo de libros</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Importante</h4>
                    <p className="text-sm text-muted-foreground">
                      Mantén tu tarjeta en buen estado y cárgala regularmente para aprovechar todos sus beneficios.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activacion" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Key className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Activación de tu Tarjeta TUI</CardTitle>
                      <CardDescription>
                        Pasos para activar y comenzar a usar tu tarjeta
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Proceso de Activación</h3>
                    <ol className="space-y-4">
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                          1
                        </div>
                        <div>
                          <strong>Retira tu tarjeta</strong>
                          <p className="text-sm text-muted-foreground mt-1">
                            Dirígete a la oficina de servicios estudiantiles con tu cédula de identidad
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                          2
                        </div>
                        <div>
                          <strong>Ingresa al portal TUI</strong>
                          <p className="text-sm text-muted-foreground mt-1">
                            Accede a https://tui.usm.cl/ con tu usuario y contraseña institucional
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                          3
                        </div>
                        <div>
                          <strong>Activa tu tarjeta</strong>
                          <p className="text-sm text-muted-foreground mt-1">
                            Sigue las instrucciones en pantalla para completar el proceso de activación
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                          4
                        </div>
                        <div>
                          <strong>Recarga tu saldo</strong>
                          <p className="text-sm text-muted-foreground mt-1">
                            Utiliza los puntos de recarga disponibles en el campus
                          </p>
                        </div>
                      </li>
                    </ol>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Puntos de Recarga</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Oficina de Servicios Estudiantiles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Casinos universitarios</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Bibliotecas</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="convenios" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Store className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Convenios y Descuentos</CardTitle>
                      <CardDescription>
                        Comercios y servicios con descuentos para estudiantes USM
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Alimentación</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Casinos universitarios - Descuento especial para estudiantes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Cafeterías dentro del campus - 10% de descuento</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Restaurantes asociados - Descuentos variables</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Transporte</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Buses interurbanos - Tarifa estudiantil</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Metro Valparaíso - Tarifa preferencial</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Servicios</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Fotocopiadoras y impresiones - Precio preferencial</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Librerías universitarias - Descuentos en materiales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Gimnasios y deportes - Acceso a instalaciones deportivas</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">¿Más convenios?</h4>
                    <p className="text-sm text-muted-foreground">
                      Visita el portal TUI para conocer la lista completa y actualizada de comercios adheridos.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TarjetaTUI;

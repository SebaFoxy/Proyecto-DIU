import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Calendar, FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CAE = () => {
  const requisitos = [
    "Ser ciudadano chileno o extranjero con permanencia definitiva",
    "Tener un promedio de notas de enseñanza media igual o superior a 5.3",
    "Haber rendido la PSU/PAES",
    "Pertenecer a una institución acreditada",
    "No superar los 41 años de edad al 31 de diciembre del año de postulación",
    "Acreditar necesidad socioeconómica mediante FUAS"
  ];

  const pasos = [
    {
      numero: 1,
      titulo: "Completar el FUAS",
      descripcion: "Ingresa al sitio web de FUAS y completa el formulario con tu información socioeconómica.",
      fecha: "Del 3 de octubre al 31 de enero"
    },
    {
      numero: 2,
      titulo: "Seleccionar el CAE",
      descripcion: "En el FUAS, marca la opción de postular al Crédito con Aval del Estado.",
      fecha: "Durante el período FUAS"
    },
    {
      numero: 3,
      titulo: "Esperar resultados",
      descripcion: "Los resultados de preselección se publican generalmente en marzo.",
      fecha: "Marzo de cada año"
    },
    {
      numero: 4,
      titulo: "Firmar el pagaré",
      descripcion: "Si resultas preseleccionado, debes firmar el pagaré en la institución financiera asignada.",
      fecha: "Después de la publicación de resultados"
    },
    {
      numero: 5,
      titulo: "Matrícula",
      descripcion: "Matricúlate en la institución y carrera para la cual fuiste asignado.",
      fecha: "Según calendario de matrícula"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Crédito con Aval del Estado (CAE)
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              El CAE es un crédito estatal que te permite financiar tus estudios superiores 
              con tasas de interés preferenciales y condiciones de pago favorables.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 mr-2 text-primary" />
                  Monto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">Hasta el arancel completo</p>
                <p className="text-muted-foreground">
                  El crédito puede cubrir hasta el valor total del arancel de tu carrera.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-6 w-6 mr-2 text-primary" />
                  Tasa de Interés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">2% anual</p>
                <p className="text-muted-foreground">
                  Tasa de interés preferencial fija durante todo el período del crédito.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle2 className="h-6 w-6 mr-2 text-primary" />
                  Período de Pago
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">10, 15 o 20 años</p>
                <p className="text-muted-foreground">
                  Plazo flexible de pago según tu situación laboral y económica.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Requisitos para Postular</CardTitle>
              <CardDescription>
                Para acceder al CAE debes cumplir con los siguientes requisitos:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requisitos.map((requisito, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{requisito}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Cómo Postular al CAE
            </h2>
            <div className="space-y-4">
              {pasos.map((paso) => (
                <Card key={paso.numero} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                        {paso.numero}
                      </div>
                      <div className="flex-grow">
                        <CardTitle className="text-xl mb-2">{paso.titulo}</CardTitle>
                        <CardDescription className="text-base">{paso.descripcion}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-muted-foreground ml-16">
                      <Calendar className="h-4 w-4 mr-2" />
                      {paso.fecha}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-muted/30">
            <CardHeader>
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-primary mt-1" />
                <div>
                  <CardTitle>Información Importante</CardTitle>
                  <CardDescription className="mt-2">
                    El CAE comienza a pagarse después de haber egresado, con cuotas calculadas según tus ingresos. 
                    Si tu ingreso es menor al umbral establecido, puedes suspender temporalmente los pagos.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>Portal oficial:</strong> Puedes revisar tu estado de postulación y más información en el portal de Beneficios Estudiantiles.
                </p>
                <Button 
                  size="lg" 
                  className="w-full md:w-auto"
                  onClick={() => window.open('https://portal.beneficiosestudiantiles.cl/', '_blank')}
                >
                  Ir al Portal de Beneficios Estudiantiles
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

export default CAE;

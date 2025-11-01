import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Clock, Users, Trophy, CreditCard, GraduationCap, Heart } from "lucide-react";
import { Link } from "react-router-dom";
const Scholarships = () => {
  const scholarships = [{
    title: "Gratuidad",
    amount: "100%",
    deadline: "31 de enero, 2024",
    eligibility: "Quintiles I-VI",
    description: "Financiamiento completo de aranceles para estudiantes de familias vulnerables según FUAS.",
    type: "Estatal",
    icon: Heart,
    link: "https://portal.beneficiosestudiantiles.cl/gratuidad",
    external: true
  }, {
    title: "Becas y Créditos MINEDUC",
    amount: "Variable",
    deadline: "31 de enero, 2024",
    eligibility: "Según FUAS",
    description: "Becas estatales como Beca Excelencia Académica, Beca Bicentenario y otros apoyos del Ministerio.",
    type: "Ministerial",
    icon: GraduationCap,
    link: "https://portal.beneficiosestudiantiles.cl/",
    external: true
  }, {
    title: "Becas USM",
    amount: "50-100%",
    deadline: "15 de marzo, 2024",
    eligibility: "Mérito académico",
    description: "Becas institucionales por excelencia académica, deportiva y liderazgo estudiantil.",
    type: "Institucional",
    icon: Trophy,
    link: "/becas-usm",
    external: false
  }, {
    title: "Becas JUNAEB",
    amount: "Variable",
    deadline: "Permanente",
    eligibility: "Vulnerabilidad social",
    description: "Apoyo alimentario, residencia estudiantil y otros beneficios sociales para estudiantes vulnerables.",
    type: "Social",
    icon: Users,
    link: "https://www.junaeb.cl/becas-junaeb/",
    external: true
  }, {
    title: "Tarjeta Nacional Estudiantil (TNE)",
    amount: "Descuentos",
    deadline: "Anual",
    eligibility: "Estudiante regular",
    description: "Tarjeta que otorga beneficios en transporte público y descuentos en diversos servicios.",
    type: "Beneficio",
    icon: CreditCard,
    link: "https://www.tne.cl/",
    external: true
  }, {
    title: "Crédito Aval del Estado (CAE)",
    amount: "Hasta arancel",
    deadline: "31 de enero, 2024",
    eligibility: "Según FUAS",
    description: "Crédito estatal con aval del Estado para financiar estudios superiores con tasa preferencial.",
    type: "Crediticio",
    icon: DollarSign,
    link: "/cae",
    external: false
  }];
  return <section id="scholarships" className="py-20 bg-muted/30">
      <div className="container mx-auto px-[16px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Beneficios Estudiantiles</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Accede a diversos beneficios y apoyos financieros disponibles para estudiantes. 
            Conoce las opciones de financiamiento y beneficios que te ayudarán en tu formación académica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {scholarships.map((scholarship, index) => {
          const IconComponent = scholarship.icon;
          return <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                    <Badge variant="secondary">{scholarship.type}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{scholarship.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {scholarship.amount}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{scholarship.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      Plazo: {scholarship.deadline}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      Requisitos: {scholarship.eligibility}
                    </div>
                  </div>

                  {scholarship.external ? (
                    <Button 
                      className="w-full group-hover:bg-primary/90"
                      onClick={() => window.open(scholarship.link, '_blank')}
                    >
                      Más Información
                    </Button>
                  ) : (
                    <Link to={scholarship.link}>
                      <Button className="w-full group-hover:bg-primary/90">
                        Más Información
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>;
        })}
        </div>


      </div>
    </section>;
};
export default Scholarships;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube, MessageSquare } from "lucide-react";
const Contact = () => {
  const campuses = [
    {
      name: "Sede Concepción",
      address: "Arteaga Alemparte 943, Edificio H, Hualpén, Concepción",
      phone: "(+56-41) 2407622",
      email: "rree.concepcion@usm.cl"
    },
    {
      name: "Campus San Joaquín",
      address: "Av. Vicuña Mackenna 3939, Edificio P, San Joaquín, Santiago",
      phone: "(+56-2) 23037070",
      email: "rree.cssj@usm.cl"
    },
    {
      name: "Campus Vitacura",
      address: "Av. Santa María 6400, Edificio Vitacura, Santiago",
      phone: "(+56-2) 32028070",
      email: "rree.csv@usm.cl"
    },
    {
      name: "Sede Viña del Mar",
      address: "Av. Federico Santa María 6090, Edificio H, Viña del Mar",
      phone: "(+56-32) 2277881 / (+56-32) 2277891",
      email: "consultasbienestar.jmc@usm.cl"
    },
    {
      name: "Campus Casa Central Valparaíso",
      address: "Av. España 1680, Edificio R, Valparaíso",
      phone: "(+56 32) 2652 889",
      email: "info.rree@usm.cl"
    }
  ];

  const generalInfo = [{
    title: "Horarios de Atención",
    icon: Clock,
    details: ["Lunes - Viernes: 8:00 AM - 6:00 PM", "Sábado: 9:00 AM - 1:00 PM", "Domingo: Cerrado"]
  }];
  const departments = [{
    name: "Admissions Office",
    phone: "(555) 123-4568",
    email: "admissions@prestige.edu"
  }, {
    name: "Financial Aid",
    phone: "(555) 123-4570",
    email: "finaid@prestige.edu"
  }, {
    name: "Student Services",
    phone: "(555) 123-4571",
    email: "studentservices@prestige.edu"
  }, {
    name: "Academic Affairs",
    phone: "(555) 123-4572",
    email: "academics@prestige.edu"
  }, {
    name: "Housing Office",
    phone: "(555) 123-4573",
    email: "housing@prestige.edu"
  }, {
    name: "IT Help Desk",
    phone: "(555) 123-4574",
    email: "ithelp@prestige.edu"
  }];
  return <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contactanos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help! Reach out to us with any questions about admissions, 
            academics, or campus life. Our dedicated team is ready to assist you.
          </p>
        </div>

        {/* Contact Form */}
        <div id="contact-form" className="max-w-2xl mx-auto mb-12">
          <Card className="border-0 bg-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                Envíanos un Mensaje
              </CardTitle>
              <CardDescription>
                Completa el formulario y te responderemos en menos de 24 horas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input id="firstName" placeholder="Juan" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input id="lastName" placeholder="Pérez" className="mt-1" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="juan.perez@usm.cl" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" placeholder="¿En qué te podemos ayudar?" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" placeholder="Cuéntanos cómo podemos ayudarte..." className="mt-1 min-h-[120px]" />
                </div>
                
                <Button type="submit" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Campus Information - Compact Layout */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Sedes y Campus</h3>
          
          {/* First row - 3 campuses */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {campuses.slice(0, 3).map((campus, index) => (
              <Card key={index} className="border-0 bg-muted/50">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <MapPin className="h-4 w-4 text-primary mr-2" />
                    {campus.name}
                  </h4>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p>{campus.address}</p>
                    <div className="flex items-center">
                      <Phone className="h-3 w-3 mr-1" />
                      {campus.phone}
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-3 w-3 mr-1" />
                      {campus.email}
                    </div>
                  </div>
                  <div className="flex space-x-1 mt-3">
                    {[Facebook, Instagram, Youtube].map((SocialIcon, socialIndex) => (
                      <Button key={socialIndex} variant="outline" size="sm" className="p-1 h-6 w-6">
                        <SocialIcon className="h-3 w-3" />
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Second row - 2 campuses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
            {campuses.slice(3, 5).map((campus, index) => (
              <Card key={index + 3} className="border-0 bg-muted/50">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <MapPin className="h-4 w-4 text-primary mr-2" />
                    {campus.name}
                  </h4>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p>{campus.address}</p>
                    <div className="flex items-center">
                      <Phone className="h-3 w-3 mr-1" />
                      {campus.phone}
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-3 w-3 mr-1" />
                      {campus.email}
                    </div>
                  </div>
                  <div className="flex space-x-1 mt-3">
                    {[Facebook, Instagram, Youtube].map((SocialIcon, socialIndex) => (
                      <Button key={socialIndex} variant="outline" size="sm" className="p-1 h-6 w-6">
                        <SocialIcon className="h-3 w-3" />
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* General Info */}
          <div className="max-w-md mx-auto">
            {generalInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="border-0 bg-muted/50">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <IconComponent className="h-4 w-4 text-primary mr-2" />
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                    </div>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground text-sm mb-1">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Department Contacts */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Contactos por Departamento</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.map((dept, index) => <Card key={index} className="border-0 bg-muted/30">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">{dept.name}</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Phone className="h-3 w-3 mr-2" />
                      {dept.phone}
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-3 w-3 mr-2" />
                      {dept.email}
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
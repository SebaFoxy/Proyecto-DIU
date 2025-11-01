import { useState } from "react"; // <-- Importar useState
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, MessageSquare } from "lucide-react";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState(""); // <-- Estado para mensaje
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Datos enviados:", formData); 
    setSuccessMessage("¡Mensaje enviado correctamente!"); 
    
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    });

    
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contáctanos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Ya sea que tengas preguntas sobre nuestras becas, servicios estudiantiles o cualquier otra inquietud, no dudes en ponerte en contacto con nosotros.
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
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input id="firstName" placeholder="Juan" className="mt-1" value={formData.firstName} onChange={handleChange} />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input id="lastName" placeholder="Pérez" className="mt-1" value={formData.lastName} onChange={handleChange} />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="juan.perez@usm.cl" className="mt-1" value={formData.email} onChange={handleChange} />
                </div>
                
                <div>
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" placeholder="¿En qué te podemos ayudar?" className="mt-1" value={formData.subject} onChange={handleChange} />
                </div>
                
                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" placeholder="Cuéntanos cómo podemos ayudarte..." className="mt-1 min-h-[120px]" value={formData.message} onChange={handleChange} />
                </div>
                
                <Button type="submit" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>

              {/* Mensaje de éxito */}
              {successMessage && (
                <p className="mt-4 text-green-600 font-semibold">{successMessage}</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Campus Information y generalInfo aquí sigue igual... */}
      </div>
    </section>
  );
};

export default Contact;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, FileText, Video, Globe, Database } from "lucide-react";
const Resources = () => {
  const resources = [{
    title: "Library Digital Collections",
    description: "Access millions of books, journals, and research materials online.",
    url: "https://library.university.edu",
    category: "Academic",
    icon: BookOpen
  }, {
    title: "Student Portal",
    description: "Check grades, register for classes, and manage your academic records.",
    url: "https://portal.university.edu",
    category: "Academic",
    icon: FileText
  }, {
    title: "Learning Management System",
    description: "Access course materials, assignments, and communicate with instructors.",
    url: "https://lms.university.edu",
    category: "Academic",
    icon: Video
  }, {
    title: "Career Development Center",
    description: "Job search tools, resume builder, and career planning resources.",
    url: "https://careers.university.edu",
    category: "Career",
    icon: Globe
  }, {
    title: "Research Database Access",
    description: "Access to scholarly databases, journals, and research tools.",
    url: "https://research.university.edu",
    category: "Research",
    icon: Database
  }, {
    title: "Alumni Network",
    description: "Connect with graduates and access professional networking opportunities.",
    url: "https://alumni.university.edu",
    category: "Network",
    icon: Globe
  }];
  const externalLinks = [{
    title: "National Student Financial Aid",
    description: "Federal student aid information and application portal.",
    url: "https://studentaid.gov"
  }, {
    title: "Academic Calendar",
    description: "Important dates, deadlines, and university holidays.",
    url: "#calendar"
  }, {
    title: "Campus Safety",
    description: "Emergency contacts, safety tips, and campus security information.",
    url: "#safety"
  }, {
    title: "Parking Services",
    description: "Parking permits, campus maps, and transportation options.",
    url: "#parking"
  }];
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Academic":
        return "bg-primary/10 text-primary";
      case "Career":
        return "bg-secondary/10 text-secondary-foreground";
      case "Research":
        return "bg-accent text-accent-foreground";
      case "Network":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };
  return <section id="resources" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Publicaciones</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access essential tools, databases, and external resources to support 
            your academic journey and personal development.
          </p>
        </div>

        {/* Digital Resources */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Recursos digitales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(resource.category)}`}>
                        {resource.category}
                      </div>
                    </div>
                    <CardTitle className="text-lg mb-2">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full group" onClick={() => window.open(resource.url, '_blank')}>
                      Access Resource
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Enlaces externos de interes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {externalLinks.map((link, index) => <Card key={index} className="group hover:shadow-md transition-all duration-300 border-0 bg-card">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {link.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{link.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Our help desk is available 24/7.
          </p>
          <Button variant="outline" size="lg" onClick={() => window.location.href = '#contact-form'}>Contacta al soporte</Button>
        </div>
      </div>
    </section>;
};
export default Resources;
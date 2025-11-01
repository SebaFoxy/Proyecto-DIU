import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md">
          {/* University Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold">USM</span>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Excellence in higher education since 1985. Shaping the leaders of tomorrow 
              through innovative programs and world-class research.
            </p>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                123 University Avenue, Academic City, ST 12345
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                (555) 123-4567
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@prestige.edu
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Prestige University. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#accessibility" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
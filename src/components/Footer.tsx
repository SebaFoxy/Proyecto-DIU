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
              Excelencia academica.
            </p>
            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} USM. Derecechos reservados.
            </p>
            
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isHomePage = location.pathname === "/";

  const handleNavigation = (sectionId: string) => {
    if (isHomePage) {
      // Si ya estamos en home, hacer scroll directo
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si estamos en otra página, navegar a home con el hash
      navigate(`/#${sectionId}`);
    }
    setIsMenuOpen(false);
  };
  const menuItems = [{
    name: "Inicio",
    href: "#home"
  }, {
    name: "Becas",
    href: "#scholarships"
  }, {
    name: "Tarjeta USM",
    href: "#services"
  }, {
    name: "Atención en Salud",
    href: "#health-care"
  }, {
    name: "Contacto",
    href: "#contact"
  }];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Universidad Tecnica Federico Santa Maria</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map(item => {
              const sectionId = item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(sectionId)}
                  className={`transition-colors font-medium ${
                    isHomePage && activeSection === sectionId
                      ? 'text-primary font-bold'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map(item => {
                const sectionId = item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(sectionId)}
                    className={`transition-colors font-medium text-left ${
                      isHomePage && activeSection === sectionId
                        ? 'text-primary font-bold'
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;
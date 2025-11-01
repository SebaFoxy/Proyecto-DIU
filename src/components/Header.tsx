import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";
const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isHomePage = location.pathname === "/";
  const menuItems = [{
    name: "Inicio",
    href: "#home"
  }, {
    name: "Becas",
    href: "#scholarships"
  }, {
    name: "Fondos Concursables",
    href: "#portals"
  }, {
    name: "Información Estudiantil",
    href: "#student-info"
  }, {
    name: "Tarjeta USM",
    href: "#services"
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
            <span className="text-xl font-bold text-foreground">Prestige University</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map(item => {
              if (item.name === "Inicio") {
                return isHomePage ? (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    className={`transition-colors font-medium ${
                      activeSection === item.href.substring(1) 
                        ? 'text-primary font-bold' 
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link 
                    key={item.name} 
                    to="/" 
                    className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                );
              }
              return (
                <a 
                  key={item.name} 
                  href={isHomePage ? item.href : `/${item.href}`} 
                  className={`transition-colors font-medium ${
                    isHomePage && activeSection === item.href.substring(1) 
                      ? 'text-primary font-bold' 
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </a>
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
                if (item.name === "Inicio") {
                  return isHomePage ? (
                    <a 
                      key={item.name} 
                      href={item.href} 
                      className={`transition-colors font-medium ${
                        activeSection === item.href.substring(1) 
                          ? 'text-primary font-bold' 
                          : 'text-muted-foreground hover:text-primary'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link 
                      key={item.name} 
                      to="/" 
                      className="text-muted-foreground hover:text-primary transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                }
                return (
                  <a 
                    key={item.name} 
                    href={isHomePage ? item.href : `/${item.href}`} 
                    className={`transition-colors font-medium ${
                      isHomePage && activeSection === item.href.substring(1) 
                        ? 'text-primary font-bold' 
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;
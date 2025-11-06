import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // Esperar un poco para que el DOM esté listo
    const scrollToSection = () => {
      const hash = location.hash.replace('#', '');
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          // Scroll con un pequeño delay para asegurar que todo está renderizado
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };

    scrollToSection();
  }, [location.hash]);
}
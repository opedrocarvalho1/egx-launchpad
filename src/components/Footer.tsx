import { Phone, Mail, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-egx-dark text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Column 1 - Branding */}
          <div className="lg:col-span-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">EGX</h3>
            <p className="text-primary-foreground/60 text-xs md:text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Inteligência financeira aplicada ao crescimento de PMEs brasileiras.
              Decisão com base em dados. Crescimento com eficiência. Gestão sem achismo.
            </p>
          </div>

          {/* Column 2 - Soluções */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-3 md:mb-4 text-primary-foreground/90 text-sm md:text-base">Soluções</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li>
                <a
                  href="#andre"
                  onClick={(e) => scrollToSection(e, "#andre")}
                  className="text-primary-foreground/60 hover:text-egx-blue transition-colors"
                >
                  anDRE
                </a>
              </li>
              <li>
                <a
                  href="#diagnostico"
                  onClick={(e) => scrollToSection(e, "#diagnostico")}
                  className="text-primary-foreground/60 hover:text-egx-blue transition-colors"
                >
                  IAs Diagnóstico
                </a>
              </li>
              <li>
                <a
                  href="#crescimento"
                  onClick={(e) => scrollToSection(e, "#crescimento")}
                  className="text-primary-foreground/60 hover:text-egx-blue transition-colors"
                >
                  IAs Crescimento
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Recursos */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-3 md:mb-4 text-primary-foreground/90 text-sm md:text-base">Recursos</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li>
                <a
                  href="#webinar"
                  onClick={(e) => scrollToSection(e, "#webinar")}
                  className="text-primary-foreground/60 hover:text-egx-blue transition-colors"
                >
                  Webinar Semanal
                </a>
              </li>
              <li>
                <a
                  href="#conteudos"
                  onClick={(e) => scrollToSection(e, "#conteudos")}
                  className="text-primary-foreground/60 hover:text-egx-blue transition-colors"
                >
                  Conteúdos
                </a>
              </li>
              <li>
                <a
                  href="#estudos"
                  onClick={(e) => scrollToSection(e, "#estudos")}
                  className="text-primary-foreground/60 hover:text-egx-blue transition-colors"
                >
                  Estudos de Caso
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  onClick={(e) => scrollToSection(e, "#sobre")}
                  className="text-primary-foreground/60 hover:text-egx-blue transition-colors"
                >
                  Sobre a EGX
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contato */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-3 md:mb-4 text-primary-foreground/90 text-sm md:text-base">Contato</h4>
            <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <a
                href="https://wa.me/5543988139897"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 md:gap-3 text-primary-foreground/60 hover:text-egx-blue transition-colors"
              >
                <Phone className="h-3.5 w-3.5 md:h-4 md:w-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:contato@ogrupoegx.com"
                className="flex items-center justify-center md:justify-start gap-2 md:gap-3 text-primary-foreground/60 hover:text-egx-blue transition-colors"
              >
                <Mail className="h-3.5 w-3.5 md:h-4 md:w-4" />
                <span>contato@ogrupoegx.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4 mt-4 md:mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-egx-blue transition-colors"
              >
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-egx-blue transition-colors"
              >
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-primary-foreground/50 text-center md:text-left">
            <p>
              © {currentYear} EGX. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Termos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

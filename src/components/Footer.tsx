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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 - Branding */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold mb-4">EGX</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Inteligência financeira aplicada ao crescimento de PMEs brasileiras.
              Decisão com base em dados. Crescimento com eficiência. Gestão sem achismo.
            </p>
          </div>

          {/* Column 2 - Soluções */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground/90">Soluções</h4>
            <ul className="space-y-3 text-sm">
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
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground/90">Recursos</h4>
            <ul className="space-y-3 text-sm">
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
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground/90">Contato</h4>
            <div className="space-y-3 text-sm">
              <a
                href="https://wa.me/5543988139897"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/60 hover:text-egx-blue transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:contato@ogrupoegx.com"
                className="flex items-center gap-3 text-primary-foreground/60 hover:text-egx-blue transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>contato@ogrupoegx.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-egx-blue transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-egx-blue transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>
              © {currentYear} EGX. Todos os direitos reservados. | CNPJ: 63.616.332/0001-15
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

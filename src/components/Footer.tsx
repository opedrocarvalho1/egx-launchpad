import { Phone, Mail, Linkedin, Instagram } from "lucide-react";
import logoEgx from "@/assets/logo-egx-branco.png";

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
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Branding */}
          <div className="lg:col-span-1">
            <img src={logoEgx} alt="EGX" className="h-8 w-auto mb-5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Inteligência financeira aplicada ao crescimento de PMEs brasileiras.
              Decisão com base em dados. Crescimento com eficiência.
            </p>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-primary mb-5">Soluções</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#andre" onClick={(e) => scrollToSection(e, "#andre")} className="text-muted-foreground hover:text-foreground transition-colors">
                  anDRE
                </a>
              </li>
              <li><span className="text-muted-foreground/50">IAs Diagnóstico (Em breve)</span></li>
              <li><span className="text-muted-foreground/50">IAs Crescimento (Em breve)</span></li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-primary mb-5">Recursos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#resultados" onClick={(e) => scrollToSection(e, "#resultados")} className="text-muted-foreground hover:text-foreground transition-colors">
                  Resultados
                </a>
              </li>
              <li>
                <a href="#quem-somos" onClick={(e) => scrollToSection(e, "#quem-somos")} className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre a EGX
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => scrollToSection(e, "#faq")} className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-primary mb-5">Contato</h4>
            <div className="space-y-3 text-sm">
              <a href="https://wa.me/5543988139897" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
              <a href="mailto:contato@ogrupoegx.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" />
                <span>contato@ogrupoegx.com</span>
              </a>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} EGX. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
            <a href="#" className="hover:text-foreground transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

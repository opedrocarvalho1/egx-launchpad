import { useState } from "react";
import { Phone, Mail, Linkedin, Instagram, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoEgx from "@/assets/logo-egx-branco.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus('loading');

    // Track event
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'newsletter_signup',
        email: email
      });
    }

    // Simulate API call
    setTimeout(() => {
      setNewsletterStatus('success');
      setEmail('');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Branding + Newsletter */}
          <div className="lg:col-span-1">
            <img src={logoEgx} alt="EGX" className="h-8 w-auto mb-5" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Inteligência financeira aplicada ao crescimento de PMEs brasileiras.
              Decisão com base em dados. Crescimento com eficiência.
            </p>

            {/* Newsletter */}
            <div>
              <h4 className="text-xs font-medium tracking-widest uppercase text-primary mb-3">
                Newsletter
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Receba insights sobre gestão financeira
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={newsletterStatus === 'success'}
                  className="h-10 text-sm bg-background border-border/50"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                  className="h-10 w-10 shrink-0 bg-primary hover:bg-primary/90"
                >
                  {newsletterStatus === 'success' ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </form>
              {newsletterStatus === 'success' && (
                <p className="text-xs text-primary mt-2">Inscrito com sucesso!</p>
              )}
            </div>
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
              <a
                href="https://wa.me/5543988139897?text=Olá!%20Vim%20do%20site%20da%20EGX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Phone className="h-4 w-4 group-hover:text-primary transition-colors" />
                <span>(43) 98813-9897</span>
              </a>
              <a href="mailto:contato@ogrupoegx.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                <Mail className="h-4 w-4 group-hover:text-primary transition-colors" />
                <span>contato@ogrupoegx.com</span>
              </a>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com/company/egx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn da EGX"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/ogrupoegx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram da EGX"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} EGX. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to="/politica-privacidade" className="hover:text-foreground transition-colors">
              Privacidade
            </Link>
            <Link to="/termos-uso" className="hover:text-foreground transition-colors">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { Menu, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Para Quem É", href: "#para-quem" },
  { label: "Estudos de Caso", href: "#estudos" },
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Sobre", href: "#sobre" },
];

const solutionItems = [
  { label: "anDRE", href: "#andre", badge: null },
  { label: "IAs Diagnóstico", href: "#diagnostico", badge: "Em breve" },
  { label: "IAs Crescimento", href: "#crescimento", badge: "Em breve" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-md shadow-md border-b border-border"
          : "bg-background backdrop-blur-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#inicio" 
            onClick={(e) => scrollToSection(e, "#inicio")}
            className="text-2xl md:text-3xl font-bold text-egx-dark hover:text-egx-blue transition-colors"
          >
            EGX
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <a
              href="#inicio"
              onClick={(e) => scrollToSection(e, "#inicio")}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-egx-blue transition-colors rounded-lg hover:bg-muted"
            >
              Início
            </a>

            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="px-4 py-2 text-sm font-medium text-foreground hover:text-egx-blue transition-colors rounded-lg hover:bg-muted flex items-center gap-1 outline-none">
                Soluções
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-popover border border-border shadow-lg">
                {solutionItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <a
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                          {item.badge}
                        </Badge>
                      )}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(1).map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-egx-blue transition-colors rounded-lg hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button asChild size="default">
              <a href="#formulario" onClick={(e) => scrollToSection(e, "#formulario")}>
                Fale com um especialista
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-2xl font-bold text-egx-dark">EGX</span>
                </div>

                <nav className="flex flex-col gap-2">
                  <SheetClose asChild>
                    <a
                      href="#inicio"
                      onClick={(e) => scrollToSection(e, "#inicio")}
                      className="px-4 py-3 text-base font-medium text-foreground hover:text-egx-blue hover:bg-muted rounded-lg transition-colors"
                    >
                      Início
                    </a>
                  </SheetClose>

                  {/* Solutions Section */}
                  <div className="px-4 py-2">
                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      Soluções
                    </span>
                  </div>
                  {solutionItems.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <a
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        className="px-6 py-2 text-base font-medium text-foreground hover:text-egx-blue hover:bg-muted rounded-lg transition-colors flex items-center justify-between"
                      >
                        <span>{item.label}</span>
                        {item.badge && (
                          <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                            {item.badge}
                          </Badge>
                        )}
                      </a>
                    </SheetClose>
                  ))}

                  <div className="h-px bg-border my-2" />

                  {navLinks.slice(1).map((link) => (
                    <SheetClose asChild key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className="px-4 py-3 text-base font-medium text-foreground hover:text-egx-blue hover:bg-muted rounded-lg transition-colors"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>

                <div className="mt-auto pt-8">
                  <SheetClose asChild>
                    <Button asChild size="lg" className="w-full">
                      <a href="#formulario" onClick={(e) => scrollToSection(e, "#formulario")}>
                        Fale com um especialista
                      </a>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useState, useEffect } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Para Quem É", href: "#para-quem" },
  { label: "Resultados", href: "#resultados" },
  { label: "Sobre", href: "#quem-somos" },
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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a 
            href="#inicio" 
            onClick={(e) => scrollToSection(e, "#inicio")}
            className="relative group"
          >
            <span className="font-display text-2xl lg:text-3xl font-semibold text-foreground tracking-tight">
              EGX
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <a
              href="#inicio"
              onClick={(e) => scrollToSection(e, "#inicio")}
              className="px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Início
            </a>

            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-1.5 outline-none">
                Soluções
                <ChevronDown className="h-4 w-4 opacity-60" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-card/95 backdrop-blur-xl border-border/50 shadow-elevated">
                {solutionItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <a
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="flex items-center justify-between cursor-pointer text-muted-foreground hover:text-foreground"
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="text-xs bg-muted/50 text-muted-foreground border-0">
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
                className="px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 h-11 rounded-full transition-all duration-300 hover:shadow-soft"
            >
              <a href="#formulario" onClick={(e) => scrollToSection(e, "#formulario")}>
                Fale conosco
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted/50">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-background border-l border-border/50">
              <div className="flex flex-col h-full pt-8">
                <div className="mb-12">
                  <span className="font-display text-2xl font-semibold text-foreground">EGX</span>
                </div>

                <nav className="flex flex-col gap-1">
                  <SheetClose asChild>
                    <a
                      href="#inicio"
                      onClick={(e) => scrollToSection(e, "#inicio")}
                      className="px-4 py-4 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border/30"
                    >
                      Início
                    </a>
                  </SheetClose>

                  {/* Solutions Section */}
                  <div className="px-4 py-3 border-b border-border/30">
                    <span className="text-xs font-medium text-primary uppercase tracking-widest">
                      Soluções
                    </span>
                  </div>
                  {solutionItems.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <a
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        className="px-6 py-3 text-base text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between"
                      >
                        <span>{item.label}</span>
                        {item.badge && (
                          <Badge variant="secondary" className="text-xs bg-muted/50 text-muted-foreground border-0">
                            {item.badge}
                          </Badge>
                        )}
                      </a>
                    </SheetClose>
                  ))}

                  <div className="h-px bg-border/30 my-2" />

                  {navLinks.slice(1).map((link) => (
                    <SheetClose asChild key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className="px-4 py-4 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border/30"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>

                <div className="mt-auto pb-8">
                  <SheetClose asChild>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-14 rounded-full">
                      <a href="#formulario" onClick={(e) => scrollToSection(e, "#formulario")}>
                        Fale conosco
                      </a>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

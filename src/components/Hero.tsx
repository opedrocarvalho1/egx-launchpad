import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with subtle gradient and noise */}
      <div className="absolute inset-0 bg-background noise-overlay">
        {/* Radial gradient accent */}
        <div className="absolute inset-0 bg-gradient-radial from-charcoal-light/50 via-background to-background" />
        
        {/* Subtle gold glow */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[150px]" 
        />

        {/* Decorative lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border/30 to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-border/30 to-transparent" />
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/20 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 text-xs font-medium tracking-widest uppercase text-primary border border-primary/30 rounded-full">
              Inteligência Financeira para PMEs
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-foreground leading-[1.1] mb-8 tracking-tight"
          >
            Eliminamos o{" "}
            <span className="text-primary italic">achismo</span>
            <br className="hidden sm:block" />
            {" "}financeiro
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-sans"
          >
            Combinamos inteligência artificial, análise financeira e visão de
            negócios para transformar números dispersos em decisões claras
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 h-14 text-base rounded-full transition-all duration-300 hover:shadow-soft group"
            >
              <a href="#formulario" onClick={(e) => scrollToSection(e, "#formulario")}>
                Falar com um especialista
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              asChild 
              variant="ghost"
              className="text-muted-foreground hover:text-foreground font-medium px-8 h-14 text-base rounded-full border border-border/50 hover:border-border transition-all duration-300"
            >
              <a href="#andre" onClick={(e) => scrollToSection(e, "#andre")}>
                Conhecer o anDRE
              </a>
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="pt-8 border-t border-border/30"
          >
            <p className="text-sm text-muted-foreground">
              Metodologias aplicadas em negócios que somam{" "}
              <span className="text-primary font-medium">R$ 200M+</span>{" "}
              em faturamento anual
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;

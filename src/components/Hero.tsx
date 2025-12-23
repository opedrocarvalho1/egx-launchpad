import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-egx-dark via-egx-dark to-egx-blue/20"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-egx-blue/10 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-egx-blue-light/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--egx-blue)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--egx-blue)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 pt-24 md:pt-32">
        <div className="text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-4 md:mb-6 px-2"
          >
            Eliminamos o{" "}
            <span className="text-egx-blue">achismo financeiro</span>{" "}
            e ajudamos PMEs brasileiras a crescer com eficiência
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/70 mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed px-2"
          >
            A EGX combina inteligência artificial, análise financeira e visão de
            negócios para transformar números dispersos em decisões claras
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-4"
          >
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
              <a href="#formulario" onClick={(e) => scrollToSection(e, "#formulario")}>
                Falar com um especialista
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl" className="w-full sm:w-auto">
              <a href="#andre" onClick={(e) => scrollToSection(e, "#andre")}>
                <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Ver o anDRE em ação
              </a>
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center gap-2 text-primary-foreground/60 px-4"
          >
            <span className="text-lg md:text-xl">✨</span>
            <p className="text-xs sm:text-sm md:text-base">
              Metodologias aplicadas em negócios que somam{" "}
              <span className="text-egx-blue font-semibold">R$ 100M+</span>{" "}
              em faturamento anual.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;

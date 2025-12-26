import { motion } from "framer-motion";
import { MessageCircle, Link, Zap, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Entendimento do negócio",
    description:
      "Agendamos uma conversa estratégica para entender modelo de negócio, estrutura de custos, fluxo de receitas e desafios atuais.",
  },
  {
    number: "02",
    icon: Link,
    title: "Conexão dos dados",
    description:
      "Conectamos as principais fontes de informação, padronizamos a leitura e estruturamos a geração da DRE.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Ativação do anDRE",
    description:
      "O anDRE começa a operar: gera visões claras dos números, responde perguntas e entrega leituras financeiras diretamente no WhatsApp.",
  },
  {
    number: "04",
    icon: Repeat,
    title: "Rotina de decisão orientada",
    description:
      "Você passa a tomar decisões com base em números confiáveis, com apoio da EGX e da inteligência do anDRE.",
  },
];

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const ComoFunciona = () => {
  return (
    <section id="como-funciona" className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-border/50 via-primary/20 to-border/50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs font-medium tracking-widest uppercase text-primary mb-6"
          >
            Processo
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-6"
          >
            Como a <span className="text-primary italic">EGX</span> entra na sua empresa
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground"
          >
            Sem complicar a sua rotina
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-6 md:space-y-0 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`relative flex items-center gap-8 md:gap-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Number */}
              <div className="hidden md:flex items-center justify-center w-24 shrink-0">
                <span className="font-display text-6xl lg:text-7xl text-border font-medium">
                  {step.number}
                </span>
              </div>

              {/* Content Card */}
              <div className="flex-1 group">
                <div className="relative p-6 md:p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    {/* Mobile number */}
                    <div className="md:hidden flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-medium text-sm">{step.number}</span>
                    </div>

                    <div className="hidden md:block p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-500">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer for alignment */}
              <div className="hidden md:block w-24 shrink-0" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button
            asChild
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 h-14 text-base rounded-full transition-all duration-300"
          >
            <a href="#formulario" onClick={(e) => scrollToSection(e, "#formulario")}>
              Ver como isso funciona na minha empresa
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ComoFunciona;

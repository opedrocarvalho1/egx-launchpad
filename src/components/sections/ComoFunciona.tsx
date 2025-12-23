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
      "Conectamos as principais fontes de informação (sistema financeiro, controles internos, relatórios existentes), padronizamos a leitura e estruturamos a geração da DRE.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Ativação do anDRE",
    description:
      "O anDRE começa a operar: gera visões claras dos números, responde perguntas e entrega leituras financeiras em linguagem acessível, diretamente no WhatsApp.",
  },
  {
    number: "04",
    icon: Repeat,
    title: "Rotina de decisão orientada por dados",
    description:
      "A partir daí, você passa a tomar decisões com base em números confiáveis, com apoio da EGX e da inteligência do anDRE – em um modelo de acompanhamento contínuo.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const ComoFunciona = () => {
  return (
    <section
      id="como-funciona"
      className="bg-gradient-to-b from-secondary/50 to-background py-12 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-2">
            Como a <span className="text-egx-blue">EGX</span> entra na sua empresa
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
            Sem complicar a sua rotina
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 md:space-y-8 max-w-4xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Step Card */}
              <div className="relative pl-0 md:pl-20">
                {/* Number (hidden on mobile, visible on desktop) */}
                <div className="hidden md:block absolute left-0 top-0 text-7xl lg:text-8xl font-bold text-secondary select-none">
                  {step.number}
                </div>

                {/* Content Card */}
                <div className="relative bg-background p-4 md:p-8 rounded-xl md:rounded-2xl shadow-sm border border-border hover:border-egx-blue/50 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-3 md:gap-4">
                    {/* Mobile number badge */}
                    <div className="md:hidden flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-egx-blue/10 rounded-full flex items-center justify-center">
                      <span className="text-egx-blue font-bold text-xs sm:text-sm">{step.number}</span>
                    </div>
                    
                    {/* Icon (desktop only) */}
                    <div className="hidden md:flex p-3 bg-egx-blue/10 rounded-xl flex-shrink-0">
                      <step.icon className="h-6 w-6 text-egx-blue" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 md:mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connector Line (not on last item, desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-10 top-28 h-8 w-0.5 border-l-2 border-dashed border-muted-foreground/30" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 md:mt-16"
        >
          <Button
            asChild
            size="xl"
            variant="outline"
            className="w-full sm:w-auto border-2 border-egx-blue text-egx-blue hover:bg-egx-blue hover:text-primary-foreground text-sm md:text-base px-4 md:px-6"
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

import { motion } from "framer-motion";
import { Check, FileText, PieChart, AlertCircle, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: FileText,
    title: "DRE automática e inteligível",
    description: "Demonstrativo de resultado claro e atualizado",
  },
  {
    icon: PieChart,
    title: "Visão de margem e custos",
    description: "Análise detalhada por período e categoria",
  },
  {
    icon: AlertCircle,
    title: "Alertas de risco",
    description: "Identificação de distorções e comportamentos críticos",
  },
  {
    icon: Lightbulb,
    title: "Apoio à decisão",
    description: "Insights para crescer, ajustar, cortar ou investir",
  },
];

const checklistItems = [
  "Organiza e lê os números da sua empresa de forma estruturada",
  "Gera dados de uma DRE de forma clara, atualizável e compreensível",
  "Mostra onde você ganha e onde perde dinheiro",
  "Aponta suas despesas fixas e variáveis de forma discretizada",
];

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Andre = () => {
  return (
    <section id="andre" className="relative py-24 md:py-32 overflow-hidden bg-secondary">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 text-xs font-medium tracking-widest uppercase text-primary border border-primary/30 rounded-full mb-6"
          >
            Nosso Produto Principal
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 leading-[1.15]"
          >
            Conheça o <span className="text-primary italic">anDRE</span>
            <br className="hidden sm:block" />
            <span className="text-muted-foreground">sua DRE de bolso 24/7</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="divider-gold mt-8 mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            O anDRE é o seu executivo financeiro virtual, sempre disponível para traduzir seus lançamentos direto no
            plano de contas da sua empresa — você só lança, ele faz o trabalho difícil.
          </motion.p>
        </div>

        {/* Explanatory Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 mb-12"
        >
          <p className="text-base md:text-lg text-foreground mb-8">
            Em vez de planilhas espalhadas, relatórios atrasados e interpretações subjetivas, o anDRE:
          </p>

          <ul className="space-y-4 mb-10">
            {checklistItems.map((item, index) => (
              <motion.li 
                key={index} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                </div>
                <span className="text-base md:text-lg text-muted-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>

          <div className="p-6 md:p-8 bg-background rounded-2xl border-l-2 border-primary">
            <p className="font-display text-lg md:text-xl text-foreground italic">
              "Com o anDRE, você enxerga suas despesas e a margem real do negócio, e toma decisões com dados, não no achismo."
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 md:p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-500">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
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
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 h-14 text-base rounded-full transition-all duration-300 hover:shadow-soft group"
          >
            <a href="#formulario" onClick={(e) => scrollToSection(e, "#formulario")}>
              Quero testar o anDRE por 7 dias
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Sem compromisso • Acompanhamento guiado
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Andre;

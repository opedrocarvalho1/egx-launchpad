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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Andre = () => {
  return (
    <section id="andre" className="bg-background py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-egx-blue/10 rounded-full mb-3 md:mb-4"
          >
            <span className="text-egx-blue font-semibold text-sm md:text-base">🤖 Nosso produto principal</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight px-2"
          >
            Conheça o <span className="text-egx-blue">anDRE</span>: sua DRE de bolso 24/7
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2"
          >
            O anDRE atua como um analista financeiro digital, sempre disponível
            para traduzir dados em decisões.
          </motion.p>
        </div>

        {/* Explanatory Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-secondary/50 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-10 lg:p-12 mb-8 md:mb-12"
        >
          <p className="text-sm md:text-base lg:text-lg text-foreground leading-relaxed mb-4 md:mb-6">
            Em vez de planilhas espalhadas, relatórios atrasados e interpretações
            subjetivas, o anDRE:
          </p>

          <ul className="space-y-3 md:space-y-4">
            {checklistItems.map((item, index) => (
              <li key={index} className="flex items-start gap-2 md:gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-egx-blue" />
                </div>
                <span className="text-sm md:text-base text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 md:mt-8 p-4 md:p-6 bg-background rounded-lg md:rounded-xl border-l-4 border-egx-blue">
            <p className="text-foreground italic text-sm md:text-base lg:text-lg">
              "O anDRE não opina. Ele mostra a realidade. A decisão continua sendo sua,
              mas agora com clareza de cenário."
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-4 md:p-6 bg-background rounded-lg md:rounded-xl border border-border hover:border-egx-blue hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-2.5 bg-egx-blue/10 rounded-lg group-hover:bg-egx-blue/20 transition-colors flex-shrink-0">
                  <feature.icon className="h-4 w-4 md:h-5 md:w-5 text-egx-blue" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm md:text-base lg:text-lg font-bold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8 md:mt-12"
        >
          <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
            <a href="#formulario" onClick={(e) => scrollToSection(e, "#formulario")}>
              Quero testar o anDRE por 7 dias
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </a>
          </Button>
          <p className="text-xs md:text-sm text-muted-foreground mt-3 md:mt-4">
            Sem compromisso • Acompanhamento guiado
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Andre;

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
  "Gera uma DRE clara, atualizável e compreensível",
  "Mostra onde você ganha e onde perde dinheiro",
  "Aponta tendências e riscos que o empresário não enxerga no dia a dia",
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
    <section id="andre" className="bg-background py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-egx-blue/10 rounded-full mb-4"
          >
            <span className="text-egx-blue font-semibold">🤖 Nosso produto principal</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
          >
            Conheça o <span className="text-egx-blue">anDRE</span>: o analista financeiro
            <br className="hidden md:block" />
            {" "}que trabalha 24h dentro do WhatsApp
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
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
          className="bg-secondary/50 rounded-3xl p-6 md:p-10 lg:p-12 mb-12"
        >
          <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
            Em vez de planilhas espalhadas, relatórios atrasados e interpretações
            subjetivas, o anDRE:
          </p>

          <ul className="space-y-4">
            {checklistItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <Check className="h-5 w-5 text-egx-blue" />
                </div>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-5 md:p-6 bg-background rounded-xl border-l-4 border-egx-blue">
            <p className="text-foreground italic text-base md:text-lg">
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
          className="grid md:grid-cols-2 gap-4 md:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-5 md:p-6 bg-background rounded-xl border border-border hover:border-egx-blue hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-egx-blue/10 rounded-lg group-hover:bg-egx-blue/20 transition-colors">
                  <feature.icon className="h-5 w-5 text-egx-blue" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
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
          className="text-center mt-10 md:mt-12"
        >
          <Button asChild variant="hero" size="xl">
            <a href="#formulario" onClick={(e) => scrollToSection(e, "#formulario")}>
              Quero testar o anDRE por 7 dias
              <ArrowRight className="ml-2 h-5 w-5" />
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

import { motion } from "framer-motion";
import { TrendingDown, FileQuestion, Target, AlertTriangle } from "lucide-react";

const painCards = [
  {
    icon: TrendingDown,
    title: "Faturamento sem lucro proporcional",
    description: "A empresa fatura, mas o lucro não acompanha o crescimento.",
  },
  {
    icon: FileQuestion,
    title: "DRE atrasada e confusa",
    description: "A DRE, quando existe, chega atrasada e difícil de interpretar.",
  },
  {
    icon: Target,
    title: "Decisões no feeling",
    description: "Decisões importantes são tomadas na intuição, não em indicadores confiáveis.",
  },
  {
    icon: AlertTriangle,
    title: "Custos fixos descontrolados",
    description: "Custos fixos crescem mais rápido que a capacidade de análise da gestão.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Problema = () => {
  return (
    <section id="problema" className="bg-background py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-egx-dark text-center mb-4 md:mb-6 leading-tight"
        >
          O problema não é faturamento.
          <br />
          <span className="text-egx-blue">É falta de clareza</span> sobre os números.
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-lg lg:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-8 md:mb-16"
        >
          A realidade da maioria das PMEs brasileiras é parecida:
        </motion.p>

        {/* Pain Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {painCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-4 sm:p-6 md:p-8 bg-secondary/50 rounded-xl md:rounded-2xl border border-border hover:border-egx-blue hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 sm:p-3 bg-egx-blue/10 rounded-lg md:rounded-xl group-hover:bg-egx-blue/20 transition-colors flex-shrink-0">
                  <card.icon className="h-5 w-5 md:h-6 md:w-6 text-egx-blue" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 md:mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 md:mt-16 text-center"
        >
          <p className="text-base md:text-lg lg:text-xl text-foreground font-semibold mb-3 md:mb-4">
            O resultado é um ciclo perigoso:
          </p>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto mb-6 md:mb-8 px-2">
            Crescimento com baixa visibilidade financeira, aumento de risco e sensação
            constante de que "o dinheiro entra, mas não sobra".
          </p>
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-egx-blue/10 rounded-full">
            <p className="text-sm md:text-base text-egx-blue font-semibold">
              A EGX nasce para mudar exatamente isso. ✨
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problema;

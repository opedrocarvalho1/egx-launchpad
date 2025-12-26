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

const Problema = () => {
  return (
    <section id="problema" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary" />
      
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80" 
          alt="Business stress"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs font-medium tracking-widest uppercase text-primary mb-6"
          >
            O Desafio
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 leading-[1.15]"
          >
            O problema não é faturamento.
            <br />
            <span className="text-primary italic">É falta de clareza.</span>
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
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A realidade da maioria das PMEs brasileiras é parecida:
          </motion.p>
        </div>

        {/* Pain Cards Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-16 md:mb-20">
          {painCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-6 md:p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-500">
                  <card.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="font-display text-xl md:text-2xl text-foreground mb-4">
            O resultado é um ciclo perigoso:
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Crescimento com baixa visibilidade financeira, aumento de risco e sensação
            constante de que "o dinheiro entra, mas não sobra".
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-primary/30">
            <span className="text-primary text-lg">✦</span>
            <p className="text-sm md:text-base text-foreground font-medium">
              A EGX nasce para mudar exatamente isso.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problema;

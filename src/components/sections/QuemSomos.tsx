import { motion } from "framer-motion";
import { Brain, Database, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Automação e análise inteligente de dados financeiros",
  },
  {
    icon: Database,
    title: "Dados Estruturados",
    description: "Leitura automática e padronizada de informações financeiras",
  },
  {
    icon: TrendingUp,
    title: "Visão de Negócios",
    description: "Estratégia prática para crescimento sustentável",
  },
];

const QuemSomos = () => {
  return (
    <section id="quem-somos" className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
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
            Sobre Nós
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-8"
          >
            Quem é a <span className="text-primary italic">EGX</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <p className="text-lg md:text-xl text-foreground">
              A EGX é uma empresa de{" "}
              <span className="text-primary font-medium">tecnologia e estratégia</span>{" "}
              aplicada à gestão financeira de PMEs.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              Nosso foco é simples: transformar a forma como o dono de empresa olha
              para seus números, decide e cresce.
            </p>
          </motion.div>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group text-center p-8 md:p-10 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500"
            >
              <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                <pillar.icon className="h-7 w-7 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="divider-gold mb-8" />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Criamos um ambiente em que a empresa{" "}
            <span className="text-primary font-medium">para de "andar no escuro"</span>{" "}
            e passa a operar com clareza, previsibilidade e disciplina financeira.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuemSomos;

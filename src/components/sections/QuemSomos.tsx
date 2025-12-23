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

const QuemSomos = () => {
  return (
    <section id="quem-somos" className="bg-egx-dark text-primary-foreground py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8"
        >
          Quem é a <span className="text-egx-blue">EGX</span>
        </motion.h2>

        {/* Main Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
        >
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-6">
            A EGX é uma empresa de{" "}
            <span className="text-egx-blue font-semibold">tecnologia e estratégia</span>{" "}
            aplicada à gestão financeira de PMEs.
          </p>
          <p className="text-base md:text-lg text-primary-foreground/60">
            Nosso foco é simples: transformar a forma como o dono de empresa olha
            para seus números, decide e cresce.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 md:p-8 bg-primary-foreground/5 rounded-2xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="inline-flex p-4 bg-egx-blue/20 rounded-xl mb-6">
                <pillar.icon className="h-8 w-8 text-egx-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-primary-foreground/60">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-16 max-w-3xl mx-auto text-center"
        >
          <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed">
            Criamos um ambiente em que a empresa{" "}
            <span className="text-egx-blue font-semibold">para de "andar no escuro"</span>{" "}
            e passa a operar com clareza, previsibilidade e disciplina financeira.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuemSomos;

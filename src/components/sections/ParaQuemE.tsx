import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ParaQuemE() {
  const paraVoce = [
    'Sua empresa fatura, mas você não tem clareza real do lucro',
    'Você recebe números, mas não consegue transformá-los em decisões concretas',
    'O crescimento veio com aumento de custos fixos e incerteza',
    'Você quer profissionalizar a gestão financeira sem burocratizar o dia a dia',
  ];

  const naoParaVoce = [
    'Você não está disposto a olhar para a realidade dos seus números',
    'Busca apenas uma "ferramenta bonita" sem mudança de rotina',
    'Espera promessas de crescimento garantido sem esforço ou disciplina',
  ];

  return (
    <section id="para-quem" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-4"
          >
            Para quem a EGX é – e para quem não é
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12"
          >
            A EGX foi desenhada para empresas que já faturam, mas sentem que 
            poderiam lucrar mais e crescer com menos risco.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* É para você */}
            <motion.div
              variants={itemVariants}
              className="bg-card rounded-2xl p-6 md:p-8 border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">
                  É para você se:
                </h3>
              </div>

              <ul className="space-y-4">
                {paraVoce.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Não é para você */}
            <motion.div
              variants={itemVariants}
              className="bg-card rounded-2xl p-6 md:p-8 border border-destructive/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">
                  Não é para você se:
                </h3>
              </div>

              <ul className="space-y-4">
                {naoParaVoce.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

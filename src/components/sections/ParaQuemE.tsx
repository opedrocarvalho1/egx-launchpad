import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

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
    <section id="para-quem" className="relative py-24 md:py-32 overflow-hidden bg-secondary">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80" 
          alt="Business professionals"
          className="w-full h-full object-cover opacity-5"
        />
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
            Para Quem É
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-6"
          >
            Para quem a EGX é — e para quem <span className="text-primary italic">não é</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A EGX foi desenhada para empresas que já faturam, mas sentem que 
            poderiam lucrar mais e crescer com menos risco.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* É para você */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-2xl p-8 md:p-10 border border-primary/20"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-medium text-foreground">
                É para você se:
              </h3>
            </div>

            <ul className="space-y-5">
              {paraVoce.map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                  </div>
                  <span className="text-base md:text-lg text-foreground leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Não é para você */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-2xl p-8 md:p-10 border border-border/50"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <X className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-medium text-foreground">
                Não é para você se:
              </h3>
            </div>

            <ul className="space-y-5">
              {naoParaVoce.map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                      <X className="w-3 h-3 text-muted-foreground" />
                    </div>
                  </div>
                  <span className="text-base md:text-lg text-muted-foreground leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

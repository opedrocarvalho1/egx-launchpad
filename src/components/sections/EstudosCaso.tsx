import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Target, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
  e.preventDefault();
  const element = document.querySelector(href);
  element?.scrollIntoView({ behavior: 'smooth' });
};

export default function EstudosCaso() {
  const metricas = [
    {
      icon: TrendingUp,
      titulo: 'Previsibilidade de caixa',
      descricao: 'Visão clara de entrada e saída nos próximos 90 dias',
    },
    {
      icon: DollarSign,
      titulo: 'Redução de desperdícios',
      descricao: 'Identificação de custos mal alocados e oportunidades',
    },
    {
      icon: Target,
      titulo: 'Decisões mais seguras',
      descricao: 'Investimentos baseados em dados, não em intuição',
    },
    {
      icon: Shield,
      titulo: 'Crescimento controlado',
      descricao: 'Expansão com controle de margem e gestão de risco',
    },
  ];

  return (
    <section id="resultados" className="py-16 md:py-24 bg-background">
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
            O que muda quando a empresa para de decidir no achismo
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12"
          >
            Empresas que passaram pelo processo com a EGX reportam:
          </motion.p>

          {/* Grid de Métricas */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12"
          >
            {metricas.map((metrica, i) => {
              const Icon = metrica.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                    {metrica.titulo}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {metrica.descricao}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Case narrativo */}
          <motion.div
            variants={itemVariants}
            className="bg-secondary rounded-2xl p-6 md:p-8 border border-border"
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              📊 Caso Real
            </span>
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
              PME do setor de serviços
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
              Faturava bem, mas não tinha visão de margem por linha de serviço. 
              Após ativação do anDRE e rotinas de leitura financeira, identificou 
              serviços com alta demanda e baixa rentabilidade.
            </p>
            <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
              <p className="text-sm md:text-base text-foreground font-medium">
                Resultado: Readequou portfólio, ajustou preços e começou a crescer 
                com melhor resultado, sem aumentar estrutura.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-10">
            <Button
              onClick={(e) => scrollToSection(e, '#formulario')}
              className="h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-semibold bg-primary hover:bg-accent"
            >
              Quero ver exemplos próximos da minha realidade
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

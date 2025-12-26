import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Target, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <section id="resultados" className="relative py-24 md:py-32 overflow-hidden bg-background">
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
            Resultados
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-6"
          >
            O que muda quando a empresa para de decidir no{" "}
            <span className="text-primary italic">achismo</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Empresas que passaram pelo processo com a EGX reportam:
          </motion.p>
        </div>

        {/* Grid de Métricas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {metricas.map((metrica, i) => {
            const Icon = metrica.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-500">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-2">
                  {metrica.titulo}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {metrica.descricao}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Case narrativo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-secondary rounded-3xl p-8 md:p-12 border border-border/50"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-xs font-medium tracking-widest uppercase rounded-full mb-6">
            Caso Real
          </span>
          <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-4">
            PME do setor de serviços
          </h3>
          <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
            Faturava bem, mas não tinha visão de margem por linha de serviço. 
            Após ativação do anDRE e rotinas de leitura financeira, identificou 
            serviços com alta demanda e baixa rentabilidade.
          </p>
          <div className="bg-card rounded-2xl p-6 border-l-2 border-primary">
            <p className="text-base md:text-lg text-foreground font-medium">
              Resultado: Readequou portfólio, ajustou preços e começou a crescer 
              com melhor resultado, sem aumentar estrutura.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            onClick={(e) => scrollToSection(e, '#formulario')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 h-14 text-base rounded-full transition-all duration-300 hover:shadow-soft"
          >
            Quero ver exemplos próximos da minha realidade
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

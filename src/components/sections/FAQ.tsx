import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      pergunta: 'A EGX substitui meu contador?',
      resposta: 'Não. A EGX não substitui a contabilidade, e sim complementa. Seu contador continua cuidando de obrigações fiscais, enquanto a EGX organiza e traduz os números para apoiar a sua decisão de gestão e crescimento.',
    },
    {
      pergunta: 'Preciso mudar todo o meu sistema financeiro para usar o anDRE?',
      resposta: 'Não necessariamente. Em muitos casos, trabalhamos em cima da estrutura que você já possui, padronizando a leitura e centralizando a visão. O objetivo é facilitar, não complicar a sua operação.',
    },
    {
      pergunta: 'Em quanto tempo começo a ver resultado?',
      resposta: 'Os primeiros ganhos costumam aparecer na forma de clareza, logo nas primeiras semanas. A partir daí, ajustes de rota, redução de desperdícios e decisões mais seguras passam a impactar resultado financeiro em prazos variados, de acordo com o ciclo do seu negócio.',
    },
    {
      pergunta: 'A EGX atende qualquer tamanho de empresa?',
      resposta: 'Nosso foco principal são PMEs que já faturam e desejam crescer com mais controle. Em casos específicos, avaliamos empresas menores ou maiores, desde que exista compromisso real com gestão e disciplina de dados.',
    },
  ];

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden bg-secondary">
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs font-medium tracking-widest uppercase text-primary mb-6"
          >
            FAQ
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-foreground"
          >
            Dúvidas frequentes
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card rounded-2xl border border-border/50 px-6 md:px-8 data-[state=open]:border-primary/30 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-display font-medium text-foreground py-5 md:py-6 hover:no-underline hover:text-primary transition-colors">
                  {faq.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed">
                  {faq.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

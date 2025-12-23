import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
    <section id="faq" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-10 md:mb-12"
          >
            Dúvidas frequentes
          </motion.h2>

          <motion.div variants={itemVariants}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-card rounded-xl border border-border px-4 md:px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left text-sm md:text-base font-medium text-foreground py-4 md:py-5 hover:no-underline">
                    {faq.pergunta}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-muted-foreground pb-4 md:pb-5 leading-relaxed">
                    {faq.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

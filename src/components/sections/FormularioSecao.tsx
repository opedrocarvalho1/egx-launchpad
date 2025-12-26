import { motion } from 'framer-motion';
import FormularioContato from '../FormularioContato';

export default function FormularioSecao() {
  return (
    <section id="formulario" className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 text-xs font-medium tracking-widest uppercase text-primary border border-primary/30 rounded-full mb-6"
          >
            Fale Conosco
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-6"
          >
            Pronto para eliminar o{" "}
            <span className="text-primary italic">achismo</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground"
          >
            Preencha o formulário abaixo e nossa equipe entrará em contato 
            para entender seu cenário e apresentar como a EGX pode ajudar.
          </motion.p>
        </div>

        {/* Formulário */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-card rounded-3xl p-8 md:p-10 border border-border/50"
        >
          <FormularioContato origemCta="secao-formulario" />
        </motion.div>
      </div>
    </section>
  );
}

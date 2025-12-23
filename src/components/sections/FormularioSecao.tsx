import { motion } from 'framer-motion';
import FormularioContato from '../FormularioContato';

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

export default function FormularioSecao() {
  return (
    <section id="formulario" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              📝 Fale conosco
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Pronto para eliminar o achismo financeiro?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Preencha o formulário abaixo e nossa equipe entrará em contato 
              para entender seu cenário e apresentar como a EGX pode ajudar.
            </p>
          </motion.div>

          {/* Formulário */}
          <motion.div
            variants={itemVariants}
            className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg"
          >
            <FormularioContato origemCta="secao-formulario" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

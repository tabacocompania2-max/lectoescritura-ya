import { motion } from "framer-motion";

const TransitionSection = () => (
  <section className="py-16 px-4 bg-primary/5">
    <div className="container max-w-3xl mx-auto text-center space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-heading font-bold text-foreground"
      >
        El problema no es tu hijo.<br />
        <span className="text-primary">Es el método.</span>
      </motion.h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Tu hijo no necesita más presión, más apps ni más videos genéricos. Necesita un sistema estructurado, paso a paso, diseñado para que <strong>tú puedas guiarlo en casa</strong> — aunque no seas maestro, aunque solo tengas 15 minutos al día.
      </p>
      <p className="text-base text-muted-foreground font-semibold">
        Ese sistema ya existe. Y más de 2,500 familias lo están usando hoy.
      </p>
    </div>
  </section>
);

export default TransitionSection;

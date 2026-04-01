import { motion } from "framer-motion";

const SolutionSection = () => (
  <section className="py-12 px-4">
    <div className="container max-w-2xl mx-auto text-center space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
          El problema no es tu hijo.{" "}
          <span className="text-primary">Es el método.</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          No necesita más apps ni videos. Necesita un <strong className="text-foreground">sistema claro, paso a paso</strong>, diseñado para que tú puedas enseñarle desde casa.
        </p>
        <p className="text-sm font-bold text-primary">
          Y eso es exactamente lo que incluye este programa.
        </p>
      </motion.div>
    </div>
  </section>
);

export default SolutionSection;

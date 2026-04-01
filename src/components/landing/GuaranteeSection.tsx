import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => (
  <section className="py-12 px-4 bg-muted/50">
    <div className="container max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <ShieldCheck className="w-12 h-12 text-secondary mx-auto" />
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
          Pruébalo sin riesgo
        </h2>
        <p className="text-sm text-muted-foreground">
          Tienes <strong className="text-foreground">7 días para probarlo.</strong> Si no ves resultados, te devolvemos el dinero.
        </p>
        <p className="text-sm font-bold text-primary">
          El único riesgo es no hacer nada.
        </p>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;

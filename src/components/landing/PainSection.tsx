import { motion } from "framer-motion";
import { AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHECKOUT_URL = "https://pay.hotmart.com/K104296010G?checkoutMode=10";

const pains = [
  'Tu hijo dice "no puedo"',
  "Se frustra o evita leer",
  "Otros niños ya están avanzando",
  "Sientes que no sabes cómo ayudarlo",
];

const PainSection = () => (
  <section className="py-12 px-4 bg-destructive/5">
    <div className="container max-w-2xl mx-auto text-center space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-5"
      >
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
          Si estás pasando por esto… <span className="text-destructive">necesitas actuar ahora</span>
        </h2>

        <ul className="space-y-3 text-left max-w-sm mx-auto">
          {pains.map((p, i) => (
            <li key={i} className="flex items-center gap-3 text-foreground text-sm">
              <AlertCircle className="w-4 h-4 text-destructive shrink-0" />
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <p className="text-sm text-muted-foreground font-semibold">
          Esto no mejora solo… <strong className="text-foreground">y el tiempo sigue pasando.</strong>
        </p>

        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-sm sm:text-base px-6 py-5 rounded-xl shadow-float w-full max-w-sm mx-auto">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              No quiero que siga atrasándose
              <ArrowRight className="ml-2 w-5 h-5 shrink-0" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default PainSection;

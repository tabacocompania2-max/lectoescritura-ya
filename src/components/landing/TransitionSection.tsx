import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHECKOUT_URL = "https://pay.hotmart.com/K104296010G?checkoutMode=10";

const TransitionSection = () => (
  <section className="py-12 md:py-16 px-4 bg-primary/5">
    <div className="container max-w-3xl mx-auto text-center space-y-5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-heading font-bold text-foreground"
      >
        El problema no es tu hijo.<br />
        <span className="text-primary">Es el método que estás usando.</span>
      </motion.h2>

      <p className="text-lg text-foreground font-bold">
        Un sistema paso a paso que ya ayudó a más de 2,500 familias a lograrlo desde casa.
      </p>

      <div className="space-y-2 text-base text-muted-foreground">
        <p>Aunque no seas maestro.</p>
        <p>Aunque solo tengas 15 minutos al día.</p>
      </div>

      <p className="text-lg text-primary font-bold">
        En semanas tu hijo puede reconocer letras, formar sílabas y empezar a leer.
      </p>

      <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
        <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-6 rounded-xl shadow-float w-full max-w-sm mx-auto">
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
            Quiero ayudar a mi hijo hoy
            <ArrowRight className="ml-2 w-5 h-5 shrink-0" />
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default TransitionSection;

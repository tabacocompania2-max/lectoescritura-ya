import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHECKOUT_URL = "https://pay.hotmart.com/K104296010G?checkoutMode=10";

const FinalCTA = () => (
  <section className="py-12 md:py-16 px-4 bg-primary/5">
    <div className="container max-w-3xl mx-auto text-center space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-5"
      >
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
          Cada día que pasa, la brecha crece.
        </h2>

        <p className="text-muted-foreground">
          Mientras esperas, otros niños avanzan.
          <br />Tu hijo merece las mismas oportunidades.
        </p>

        <p className="text-lg font-bold text-foreground">
          No necesitas ser maestro. No necesitas horas.
          <br />Solo necesitas empezar hoy.
        </p>

        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base sm:text-lg px-6 sm:px-10 py-6 rounded-xl shadow-float w-full max-w-sm mx-auto">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              <Zap className="mr-2 w-5 h-5 shrink-0" />
              Empieza hoy
              <ArrowRight className="ml-2 w-5 h-5 shrink-0" />
            </a>
          </Button>
        </motion.div>

        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-secondary" /> Garantía 7 días</span>
          <span className="flex items-center gap-1"><Zap className="w-4 h-4 text-accent" /> Acceso inmediato</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;

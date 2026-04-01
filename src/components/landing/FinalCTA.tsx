import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";

const CHECKOUT_URL = "https://pay.hotmart.com/K104296010G?checkoutMode=10";

const FinalCTA = () => (
  <section id="pricing-section" className="py-12 px-4 bg-primary/5">
    <div className="container max-w-sm mx-auto text-center space-y-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <p className="text-4xl sm:text-5xl font-heading font-bold text-primary">$7.99</p>
        <p className="text-sm text-muted-foreground">Menos que una clase particular</p>

        <p className="text-base font-bold text-foreground">
          Hoy todavía estás a tiempo de cambiar esto.
        </p>

        <CountdownTimer />

        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base px-6 py-6 rounded-xl shadow-float w-full">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              Quiero ayudar a mi hijo hoy
              <ArrowRight className="ml-2 w-5 h-5 shrink-0" />
            </a>
          </Button>
        </motion.div>

        <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground flex-wrap">
          <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-accent" /> Acceso inmediato</span>
          <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-secondary" /> Garantía 7 días</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;

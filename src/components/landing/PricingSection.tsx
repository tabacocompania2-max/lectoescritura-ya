import { motion } from "framer-motion";
import { Check, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroProduct from "@/assets/hero-product-sm.webp";
import CountdownTimer from "./CountdownTimer";

const CHECKOUT_URL = "https://pay.hotmart.com/K104296010G?checkoutMode=10";

const programItems = [
"Programa completo de 6 niveles (+120 páginas)",
"Material 100% imprimible — úsalo con todos tus hijos",
"Ejercicios progresivos paso a paso",
"Plan guiado de 30 días incluido",
"Diploma de graduación personalizable",
"Acceso de por vida — descarga ilimitada"];


const bonusItems = [
"Actividades de refuerzo extra (Valor $19.99)",
"Plan guiado de 30 días (Valor $29.99)",
"Planillas de seguimiento del progreso (Valor $14.99)",
"Diploma editable premium (Valor $9.99)"];


const PricingSection = () =>
<section id="pricing-section" className="py-16 px-4 bg-primary/5">
    <div className="container max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <span className="text-primary font-bold text-sm uppercase tracking-wider">Precio especial por tiempo limitado</span>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2">
          Por menos de lo que cuesta una sola clase particular, puedes darle a tu hijo una habilidad para toda la vida
        </h2>
        <p className="text-muted-foreground mt-3">Este precio no estará disponible por mucho tiempo.</p>
      </div>

      <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl shadow-float border-2 border-primary/30 overflow-hidden">
      
        <div className="bg-primary text-primary-foreground text-center py-4 px-6">
          <h3 className="text-xl font-heading font-bold">Programa Completo de Lectoescritura</h3>
          <p className="text-sm opacity-90">6 niveles + 4 bonos + plan de 30 días</p>
        </div>

        <div className="p-8 space-y-6">
          <div className="flex justify-center">
            <img src={heroProduct} alt="Material de lectoescritura" className="w-48 rounded-xl shadow-lg" loading="lazy" width={192} height={192} />
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground mb-3">Incluye:</h4>
            <ul className="space-y-2">
              {programItems.map((item, i) =>
            <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
            )}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground mb-3">Bonos incluidos sin costo:</h4>
            <ul className="space-y-2">
              {bonusItems.map((item, i) =>
            <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
            )}
            </ul>
          </div>

          <div className="text-center space-y-3 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">Valor real del programa + bonos:</p>
            <p className="text-2xl line-through text-muted-foreground font-heading">$124.95 USD</p>
            <p className="text-sm text-muted-foreground">Hoy lo llevas por:</p>
            <p className="text-5xl font-heading font-bold text-primary">$7.99</p>
            <p className="text-sm text-muted-foreground">Menos de lo que cuesta una clase particular</p>

            <CountdownTimer />

            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base sm:text-lg px-6 sm:px-10 py-6 rounded-xl shadow-float w-full max-w-sm mx-auto">
                <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="mr-2 w-5 h-5 shrink-0" />
                  ¡LO QUIERO HOY!
                  <ArrowRight className="ml-2 w-5 h-5 shrink-0" />
                </a>
              </Button>
            </motion.div>
            <p className="text-xs text-muted-foreground">Pago 100% seguro · Acceso inmediato · Garantía 7 días</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>;


export default PricingSection;

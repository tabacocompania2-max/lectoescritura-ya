import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroProduct from "@/assets/hero-product-sm.webp";

const CHECKOUT_URL = "https://pay.hotmart.com/K104296010G?checkoutMode=10";

const bullets = [
  "No necesitas ser maestro",
  "Solo 10–15 minutos al día",
  "Más de 2,500 familias ya lo usan",
];

const HeroSection = () => (
  <section className="py-10 md:py-16 px-4">
    <div className="container max-w-3xl mx-auto text-center space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-5"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold leading-tight text-foreground">
          Si tu hijo tiene 5 o 6 años y aún no lee,{" "}
          <span className="text-destructive">esto ya es una señal de alerta</span>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground">
          Porque cada día que pasa sin leer, pierde confianza…{" "}
          <strong className="text-foreground">y tú lo estás viendo</strong>
        </p>

        <p className="text-sm sm:text-base text-foreground font-semibold bg-primary/10 rounded-xl px-4 py-3 inline-block">
          No es que no pueda. Es que nadie le está enseñando bien.
        </p>

        <div className="text-left max-w-md mx-auto space-y-3">
          <p className="text-sm text-muted-foreground">
            Esto es un <strong className="text-foreground">programa completo de lectoescritura para usar en casa</strong>, con el que tu hijo puede empezar a leer siguiendo un plan diario de 15 minutos.
          </p>
          <p className="text-sm text-secondary font-bold">
            ✅ Resultados visibles en solo 30 días usando el plan incluido
          </p>
          <p className="text-xs text-muted-foreground">
            Basado en un sistema progresivo de 6 niveles que lleva a tu hijo desde no reconocer letras hasta leer frases completas — sin frustración.
          </p>
        </div>

        <ul className="flex flex-col items-center gap-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-foreground">
              <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
          <img
            src={heroProduct}
            alt="Programa de lectoescritura"
            className="w-36 sm:w-44 rounded-xl shadow-lg"
            width={176}
            height={176}
          />
        </div>

        <div className="bg-card rounded-2xl p-5 shadow-lg border border-border space-y-3 max-w-sm mx-auto">
          <p className="text-3xl sm:text-4xl font-heading font-bold text-primary">$7.99</p>
          <p className="text-xs text-muted-foreground">Menos que una clase particular</p>

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
            <span>🔒 Pago seguro</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

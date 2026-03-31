import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import childLearning from "@/assets/child-learning-sm.webp";
import heroProduct from "@/assets/hero-product-sm.webp";

const CHECKOUT_URL = "https://pay.hotmart.com/K104296010G?checkoutMode=10";

const promises = [
  "Sin ser maestro — cualquier padre puede hacerlo",
  "Solo 15 minutos al día, sin estrés ni presión",
  "Más de 2,500 familias ya lo están usando con éxito",
];

const HeroSection = () => (
  <section className="py-12 md:py-20 px-4">
    <div className="container max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight text-foreground">
            Si tu hijo evita leer, se frustra o dice "no puedo"… esto <span className="text-primary">NO es su culpa</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La mayoría de los padres sienten culpa, frustración y miedo de que su hijo se quede atrás. Pero el problema no es tu hijo ni tú — es que nadie te dio un método claro para enseñarle.
          </p>
          <p className="text-base text-muted-foreground">
            Descubre el sistema paso a paso que ya ayudó a más de 2,500 familias a enseñar a leer a sus hijos en casa — en solo 15 minutos al día.
          </p>
          <ul className="space-y-3">
            {promises.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-6 rounded-xl shadow-float w-full max-w-sm" onClick={() => document.getElementById('metodo-en-accion')?.scrollIntoView({ behavior: 'smooth' })}>
              Quiero ayudar a mi hijo hoy
              <ArrowRight className="ml-2 w-5 h-5 shrink-0" />
            </Button>
          </motion.div>
          <p className="text-xs text-muted-foreground">
            Acceso inmediato · Garantía de 7 días · Pago seguro
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <img src={childLearning} alt="Niño aprendiendo a escribir con su mamá" className="rounded-2xl shadow-float w-full" width={583} height={874} fetchPriority="high" />
          <img src={heroProduct} alt="Material de lectoescritura imprimible" className="absolute -bottom-6 -right-4 w-40 md:w-52 rounded-xl shadow-lg border-4 border-card" width={266} height={266} />
          <div className="absolute -bottom-10 left-4 bg-secondary text-secondary-foreground text-sm font-bold px-4 py-2 rounded-full shadow-lg">
            +2,500 familias confían en este método
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;

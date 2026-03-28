import { motion } from "framer-motion";
import { AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import problemCollage from "@/assets/problem-collage.webp";

const CHECKOUT_URL = "https://pay.hotmart.com/K104296010G?checkoutMode=10";

const painPoints = [
  {
    question: "Tu hijo tiene 5 o 6 años y todavía no reconoce las letras…",
    detail: "Ves que otros niños ya leen palabras mientras el tuyo se queda atrás. El miedo crece cada día — ¿y si ya es tarde?",
  },
  {
    question: "Se frustra, llora o dice 'no puedo' cuando intenta escribir…",
    detail: "Cada intento termina en lágrimas. Tú quieres ayudarlo pero sientes que lo presionas más. La culpa te come por dentro.",
  },
  {
    question: "En el colegio te dicen que va atrasado y tú no sabes qué hacer…",
    detail: "La maestra te lo dice con preocupación y tú sientes un nudo en el estómago. No tienes las herramientas y no sabes por dónde empezar.",
  },
  {
    question: "Has probado apps, videos y cuadernos… pero nada funciona…",
    detail: "Tu hijo se aburre en 2 minutos. Nada está diseñado para su nivel real ni para su ritmo. Te sientes más perdido/a que antes.",
  },
  {
    question: "Sientes que estás fallando como mamá o papá…",
    detail: "Trabajas todo el día, llegas agotado/a, y sientes que no le dedicas lo que merece. Esa culpa silenciosa no te deja dormir.",
  },
];

const ProblemSection = () => (
  <section className="py-16 px-4">
    <div className="container max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-primary font-bold text-sm uppercase tracking-wider">¿Te suena familiar?</span>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2">
          Esto es lo que viven miles de padres cada día
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Si leer esto te hace sentir un nudo en la garganta, no estás solo. Y lo más importante: <strong>tiene solución.</strong>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          {painPoints.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-5 border border-border shadow-sm"
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-foreground">{p.question}</p>
                  <p className="text-sm text-muted-foreground mt-1">{p.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6">
          <img src={problemCollage} alt="Niño frustrado intentando escribir" className="rounded-2xl shadow-float w-full max-w-md" />
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-8 py-6 rounded-xl shadow-float">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              SÍ, QUIERO LA SOLUCIÓN
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <p className="text-xs text-muted-foreground">Acceso inmediato · Garantía 7 días · Pago seguro</p>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;

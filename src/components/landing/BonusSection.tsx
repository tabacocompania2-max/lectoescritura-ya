import { motion } from "framer-motion";
import { Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bonus1Image from "@/assets/bonus-1-actividades-opt.webp";
import bonus2Image from "@/assets/bonus-2-plan30dias.webp";
import bonus3Image from "@/assets/bonus-3-planillas.webp";
import bonus4Image from "@/assets/bonus-4-diploma.webp";

const CHECKOUT_URL = "https://pay.hotmart.com/K104296010G?checkoutMode=10";

const bonuses = [
  { num: "1", title: "Actividades de Refuerzo Extra", desc: "Crucigramas, sopas de letras y juegos que consolidan lo aprendido — tu hijo practica sin darse cuenta.", value: "$19.99", image: bonus1Image },
  { num: "2", title: "Plan Guiado de 30 Días", desc: "Calendario exacto de qué hacer cada día. Abres, sigues el plan, y listo. Sin improvisar.", value: "$29.99", image: bonus2Image },
  { num: "3", title: "Planillas de Seguimiento", desc: "Ve el progreso semana a semana. Saber dónde está tu hijo te da tranquilidad.", value: "$14.99", image: bonus3Image },
  { num: "4", title: "Diploma Editable Premium", desc: "Un reconocimiento real con su nombre. Tu hijo lo cuelga orgulloso.", value: "$9.99", image: bonus4Image },
];

const BonusSection = () => (
  <section className="py-12 md:py-16 px-4 bg-muted/50">
    <div className="container max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-3">
        <span className="inline-flex items-center gap-1 text-primary font-bold text-sm uppercase tracking-wider">
          <Gift className="w-4 h-4" /> Incluido sin costo adicional
        </span>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
          Además, hoy recibes GRATIS estos 4 recursos:
        </h2>
        <p className="text-lg text-foreground font-bold">
          Esto elimina las excusas.
        </p>
        <p className="text-base text-muted-foreground">
          No tienes que improvisar. No tienes que buscar nada más.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {bonuses.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-bonus flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-sm">
                {b.num}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">BONO INCLUIDO</span>
            </div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-2">{b.title}</h3>
            {b.image && (
              <img src={b.image} alt={b.title} className="w-full h-40 object-cover rounded-lg mb-3" loading="lazy" width={462} height={160} />
            )}
            <p className="text-sm text-muted-foreground flex-1">{b.desc}</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Valor:</span>
              <span className="text-sm line-through text-muted-foreground">{b.value}</span>
              <span className="text-sm font-bold text-secondary">GRATIS</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center space-y-4">
        <p className="text-muted-foreground">
          Valor total de los bonos: <span className="line-through font-bold">$74.96</span>
        </p>
        <p className="text-lg font-bold text-secondary">Incluidos gratis con tu compra hoy</p>
        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-6 rounded-xl shadow-float w-full max-w-sm mx-auto">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              Empieza hoy
              <ArrowRight className="ml-2 w-5 h-5 shrink-0" />
            </a>
          </Button>
        </motion.div>
        <p className="text-xs text-muted-foreground">Acceso inmediato · Garantía 7 días · Sin riesgo</p>
      </div>
    </div>
  </section>
);

export default BonusSection;

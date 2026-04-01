import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import bonus1Image from "@/assets/bonus-1-actividades-opt.webp";
import bonus2Image from "@/assets/bonus-2-plan30dias.webp";
import bonus3Image from "@/assets/bonus-3-planillas.webp";
import bonus4Image from "@/assets/bonus-4-diploma.webp";

const bonuses = [
  { title: "Actividades de refuerzo", image: bonus1Image },
  { title: "Plan de 30 días", image: bonus2Image },
  { title: "Seguimiento de progreso", image: bonus3Image },
  { title: "Diploma editable", image: bonus4Image },
];

const BonusSection = () => (
  <section className="py-12 px-4 bg-muted/50">
    <div className="container max-w-2xl mx-auto text-center space-y-6">
      <div className="space-y-2">
        <span className="inline-flex items-center gap-1 text-primary font-bold text-sm uppercase tracking-wider">
          <Gift className="w-4 h-4" /> Incluido gratis
        </span>
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
          Además, hoy recibes GRATIS
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {bonuses.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-xl border border-border shadow-sm overflow-hidden"
          >
            <img
              src={b.image}
              alt={b.title}
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
              width={300}
              height={225}
            />
            <p className="text-xs sm:text-sm font-bold text-foreground p-3">{b.title}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground">
        Esto elimina las excusas. <strong className="text-foreground">Solo tienes que seguir el plan.</strong>
      </p>
    </div>
  </section>
);

export default BonusSection;

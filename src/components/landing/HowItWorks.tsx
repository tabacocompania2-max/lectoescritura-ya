import { motion } from "framer-motion";
import { Download, BookOpen, Award } from "lucide-react";

const steps = [
  { icon: Download, num: "1", title: "Descarga e imprime" },
  { icon: BookOpen, num: "2", title: "15 minutos al día" },
  { icon: Award, num: "3", title: "Empieza a leer en semanas" },
];

const HowItWorks = () => (
  <section className="py-12 px-4 bg-muted/50">
    <div className="container max-w-2xl mx-auto text-center space-y-6">
      <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
        Así funciona <span className="text-muted-foreground">(sin complicaciones)</span>
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <span className="text-lg font-heading font-bold text-primary">{s.num}</span>
            <p className="text-xs sm:text-sm font-semibold text-foreground">{s.title}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground">
        Sin presión. Sin estrés. Sin improvisar.
      </p>
    </div>
  </section>
);

export default HowItWorks;

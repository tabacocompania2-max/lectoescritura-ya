import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carolina M.",
    location: "Bogotá, Colombia",
    before: "No reconocía las vocales. Se frustraba y lloraba.",
    after: "En un mes ya escribe su nombre y pide hacer sus hojas.",
  },
  {
    name: "Daniela R.",
    location: "Guayaquil, Ecuador",
    before: 'Se aburría con apps. Decía "no puedo".',
    after: "En 6 semanas forma sílabas sola y pide practicar.",
  },
];

const TestimonialsSection = () => (
  <section className="py-12 px-4">
    <div className="container max-w-2xl mx-auto space-y-6">
      <div className="grid gap-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-5 shadow-sm border border-border space-y-3"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 text-accent fill-accent" />
              ))}
            </div>
            <div className="text-xs space-y-1">
              <p><span className="font-bold text-destructive">Antes:</span> {t.before}</p>
              <p><span className="font-bold text-secondary">Después:</span> {t.after}</p>
            </div>
            <p className="text-xs text-muted-foreground font-bold">{t.name} — {t.location}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

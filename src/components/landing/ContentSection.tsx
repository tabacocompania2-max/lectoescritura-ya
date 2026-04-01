import { motion } from "framer-motion";
import { Check } from "lucide-react";

const items = [
  "+120 páginas imprimibles",
  "6 niveles progresivos",
  "Plan guiado de 30 días",
  "Ejercicios paso a paso",
];

const ContentSection = () => (
  <section className="py-12 px-4">
    <div className="container max-w-2xl mx-auto text-center space-y-5">
      <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
        Todo lo que incluye
      </h2>

      <motion.ul
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-3 text-left max-w-xs mx-auto"
      >
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-foreground text-sm">
            <Check className="w-5 h-5 text-secondary shrink-0" />
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </motion.ul>
    </div>
  </section>
);

export default ContentSection;

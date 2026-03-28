import { motion } from "framer-motion";
import { Check } from "lucide-react";

const items = [
  "Más de 120 páginas de ejercicios progresivos — de lo simple a lo complejo",
  "6 niveles completos: tu hijo avanza a su ritmo sin frustrarse",
  "Actividades de motricidad fina que preparan su mano para escribir",
  "Reconocimiento de vocales y consonantes de forma visual y divertida",
  "Formación de sílabas, palabras y frases — el camino a la lectura real",
  "Lecturas cortas con comprensión: tu hijo no solo lee, entiende",
  "Escritura guiada paso a paso — sin improvisar",
  "Plan de 30 días incluido: sabes exactamente qué hacer cada día",
  "Diploma de graduación personalizable — un premio por su esfuerzo",
];

const stats = [
  { num: "120+", label: "Páginas" },
  { num: "6", label: "Niveles" },
  { num: "30", label: "Días de plan" },
  { num: "∞", label: "Impresiones" },
];

const ContentSection = () => (
  <section className="py-16 px-4">
    <div className="container max-w-5xl mx-auto space-y-10">
      <div className="text-center">
        <span className="text-primary font-bold text-sm uppercase tracking-wider">Contenido completo</span>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2">
          Todo lo que tu hijo necesita para aprender a leer — en un solo programa
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Material profesional, estructurado y listo para imprimir. Sin improvisar, sin adivinar.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-primary/10 rounded-xl p-5 text-center"
          >
            <span className="text-3xl font-heading font-bold text-primary">{s.num}</span>
            <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
        <h3 className="text-xl font-heading font-bold text-foreground mb-4">¿Qué incluye el programa?</h3>
        <ul className="grid md:grid-cols-2 gap-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-foreground">
              <Check className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ContentSection;

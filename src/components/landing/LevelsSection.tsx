import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const levels = [
  { num: "1", title: "Preparación Motriz", desc: "Fortalece la coordinación de la mano para escribir. Trazos, laberintos y ejercicios de precisión.", items: ["Ejercicios de trazo", "Laberintos", "Colorear con precisión", "Recortar y pegar"] },
  { num: "2", title: "Vocales", desc: "Aprende las 5 vocales de forma visual y práctica. La base de todo el proceso.", items: ["A, E, I, O, U ilustradas", "Reconocimiento visual", "Asociación con objetos", "Escritura guiada"] },
  { num: "3", title: "Sílabas", desc: "Combina consonantes con vocales. El paso clave donde empieza la lectura real.", items: ["MA, ME, MI, MO, MU…", "Juegos de unión", "Lectura de sílabas", "Escritura de sílabas"] },
  { num: "4", title: "Palabras", desc: "Une sílabas para formar palabras completas. Tu hijo empieza a leer por sí solo.", items: ["Palabras de 2 sílabas", "Palabras de 3 sílabas", "Asociación imagen-palabra", "Dictado visual"] },
  { num: "5", title: "Frases", desc: "Forma oraciones cortas y comprende lo que lee. Comprensión lectora inicial.", items: ["Frases cortas", "Comprensión de textos", "Preguntas sencillas", "Lectura en voz alta"] },
  { num: "6", title: "Escritura", desc: "Escribe palabras, frases y pequeños textos por sí mismo. El logro final.", items: ["Escritura libre", "Copia de textos", "Creación de oraciones", "Evaluación final"] },
];

const LevelsSection = () => (
  <section className="py-16 px-4 bg-muted/50">
    <div className="container max-w-6xl mx-auto space-y-10">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
          6 niveles progresivos: del trazo a la lectura
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Cada nivel construye sobre el anterior. Sin saltar pasos, sin presionar.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-6 shadow-lg border border-border space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold">
                {l.num}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Nivel {l.num}</span>
            </div>
            <h3 className="text-lg font-heading font-bold text-foreground">{l.title}</h3>
            <p className="text-sm text-muted-foreground">{l.desc}</p>
            <ul className="space-y-1">
              {l.items.map((item, j) => (
                <li key={j} className="text-sm text-foreground flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LevelsSection;

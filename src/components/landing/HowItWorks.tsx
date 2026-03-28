import { motion } from "framer-motion";
import { Download, BookOpen, Award } from "lucide-react";

const steps = [
  { icon: Download, num: "1", title: "Descarga e imprime", desc: "Recibes todo al instante. Lo imprimes en cualquier impresora casera. En 5 minutos ya estás listo para empezar." },
  { icon: BookOpen, num: "2", title: "Solo 10–15 minutos al día", desc: "Tu hijo completa una hoja diaria con actividades claras y divertidas. Sin estrés, sin presión, sin lágrimas." },
  { icon: Award, num: "3", title: "Ve los resultados tú mismo", desc: "En semanas, tu hijo reconocerá letras, formará sílabas y empezará a leer. Tú lo verás con tus propios ojos — y él se sentirá orgulloso." },
];

const HowItWorks = () => (
  <section className="py-16 px-4">
    <div className="container max-w-5xl mx-auto text-center space-y-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
          3 pasos simples. Eso es todo.
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          No necesitas experiencia. No necesitas horas. Solo seguir un plan que ya funciona.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border text-center space-y-4"
          >
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <s.icon className="w-8 h-8 text-primary" />
            </div>
            <span className="text-4xl font-heading font-bold text-primary">{s.num}</span>
            <h3 className="text-xl font-heading font-bold text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;

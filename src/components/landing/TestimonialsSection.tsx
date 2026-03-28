import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Mi hijo Sebastián tenía 5 años y no reconocía ni las vocales. Yo me sentía la peor mamá del mundo porque trabajaba todo el día y no le dedicaba tiempo. La primera semana solo hacíamos una hoja al día después de cenar. Al mes, Sebastián ya escribía su nombre solito y me lo mostraba orgulloso.",
    name: "Carolina M.",
    location: "Bogotá, Colombia",
    before: "No reconocía las vocales. Se frustraba y lloraba.",
    after: "Escribe su nombre, lee palabras simples, pide él mismo hacer sus hojas.",
  },
  {
    text: "Intenté con apps, con videos de YouTube, con un cuaderno de la librería. Nada funcionaba. Mi hija Valentina se aburría en 2 minutos. Con este material, empezamos por los trazos más básicos. En 6 semanas ya formaba sílabas sola. Lo más importante: dejó de decir 'no puedo' y empezó a decir 'mami, ¿hacemos las hojas?'.",
    name: "Daniela R.",
    location: "Guayaquil, Ecuador",
    before: "Se aburría con apps. Decía 'no puedo'. No quería practicar.",
    after: "Forma sílabas sola. Pide hacer los ejercicios. Más segura de sí misma.",
  },
  {
    text: "Como papá soltero, me sentía perdido. No soy maestro y no tenía idea de por dónde empezar. Este programa me dio exactamente lo que necesitaba: instrucciones claras, paso a paso. Ahora es nuestro momento especial cada tarde.",
    name: "Carlos R.",
    location: "Bogotá, Colombia · Hijo de 6 años",
  },
  {
    text: "La maestra me dijo que mi hijo iba atrasado. Sentí mucha culpa. Compré el material y en un mes logró ponerse al día. Los profesores no pueden creer el avance que tuvo.",
    name: "Roberto M.",
    location: "Buenos Aires, Argentina · Hijo de 7 años",
  },
  {
    text: "Lo que más valoro es que no necesito ser experta. Todo viene explicado. Solo sigo el plan y mi hija avanza. Ya escribe su nombre sola y yo casi lloro de la emoción.",
    name: "Claudia T.",
    location: "Santiago, Chile · Hija de 5 años",
  },
  {
    text: "Mi hijo se distraía con todo. No podía mantenerlo sentado más de 5 minutos. Las actividades de este programa son cortas y visuales. Ahora pide él mismo hacer sus hojas después de la tarea.",
    name: "Ana Lucía P.",
    location: "Lima, Perú · Hijo de 4 años",
  },
];

const TestimonialsSection = () => (
  <section className="py-16 px-4">
    <div className="container max-w-6xl mx-auto space-y-10">
      <div className="text-center">
        <span className="text-primary font-bold text-sm uppercase tracking-wider">Testimonios reales</span>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2">
          Esto ya está funcionando en miles de hogares
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Padres reales que estaban en tu misma situación — mira lo que lograron:
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-6 shadow-lg border border-border space-y-4"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 text-accent fill-accent" />
              ))}
            </div>
            <p className="text-sm text-foreground italic">"{t.text}"</p>
            {t.before && t.after && (
              <div className="text-xs space-y-1 bg-muted rounded-lg p-3">
                <p><span className="font-bold text-destructive">Antes:</span> {t.before}</p>
                <p><span className="font-bold text-secondary">Después:</span> {t.after}</p>
              </div>
            )}
            <div>
              <p className="font-bold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "¿Para qué edades funciona este programa?", a: "Está diseñado para niños de 4 a 7 años. Funciona tanto para los que están comenzando desde cero como para los que necesitan reforzar lo que aprenden en el colegio." },
  { q: "¿Y si mi hijo ya conoce algunas letras?", a: "El programa tiene 6 niveles progresivos. Puedes comenzar en el nivel que mejor se adapte al conocimiento actual de tu hijo. No es necesario empezar desde el principio." },
  { q: "No soy maestro, ¿puedo usarlo igual?", a: "Sí, absolutamente. Está diseñado para padres sin experiencia pedagógica. Cada actividad viene con instrucciones claras. Solo sigue el plan." },
  { q: "¿Necesito impresora?", a: "Sí, el material es imprimible para que tu hijo pueda trazar, escribir y colorear directamente. Funciona con cualquier impresora casera y papel blanco." },
  { q: "¿Cuánto tiempo necesito dedicarle al día?", a: "Solo 15 minutos. Las actividades son cortas y efectivas. Puedes hacerlo después de la cena, en la mañana o cuando tengas un momento tranquilo." },
  { q: "¿Puedo usarlo con más de un hijo?", a: "Sí. Al ser un PDF imprimible, puedes imprimirlo tantas veces como necesites. Un solo pago, todos tus hijos se benefician." },
  { q: "¿Cuándo recibo el material?", a: "El acceso es inmediato. Una vez que completas la compra, recibes un enlace de descarga en tu correo electrónico en minutos." },
  { q: "¿Qué pasa si no me funciona?", a: "Tienes 7 días para probarlo. Si por cualquier razón no estás satisfecho, nos escribes y te devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones." },
];

const FAQSection = () => (
  <section className="py-16 px-4">
    <div className="container max-w-3xl mx-auto space-y-8">
      <div className="text-center">
        <span className="text-primary font-bold text-sm uppercase tracking-wider">Preguntas frecuentes</span>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2">
          Resolvemos tus dudas
        </h2>
        <p className="text-muted-foreground mt-3">
          Si tu pregunta no está aquí, escríbenos y te ayudamos con gusto.
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-5">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;

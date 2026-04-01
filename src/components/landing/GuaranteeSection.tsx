import { motion } from "framer-motion";
import { ShieldCheck, Mail, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import guaranteeBadge from "@/assets/guarantee-badge-opt.webp";

const CHECKOUT_URL = "https://pay.hotmart.com/K104296010G?checkoutMode=10";

const GuaranteeSection = () => (
  <section className="py-12 md:py-16 px-4">
    <div className="container max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card rounded-2xl p-8 md:p-12 shadow-float border-2 border-secondary/30 text-center space-y-5"
      >
        <img src={guaranteeBadge} alt="Garantía de 7 días" className="w-28 h-28 mx-auto rounded-full object-cover" loading="lazy" width={112} height={112} />
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
          Compra sin riesgo: Garantía total de 7 días
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Si sientes que no es para tu familia, nos escribes y te devolvemos <strong>cada centavo.</strong>
        </p>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Sin preguntas. Sin formularios. Sin complicaciones.
        </p>

        <p className="text-lg font-bold text-primary">
          El único riesgo es no hacer nada y que todo siga igual.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          {[
            { icon: ShieldCheck, text: "Devolución 100% garantizada" },
            { icon: Mail, text: "Solo envía un correo y listo" },
            { icon: HelpCircle, text: "Sin preguntas, sin trámites" },
          ].map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-foreground">
              <Icon className="w-5 h-5 text-secondary shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-6 rounded-xl shadow-float w-full max-w-sm mx-auto">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              Quiero ayudar a mi hijo hoy
              <ArrowRight className="ml-2 w-5 h-5 shrink-0" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;

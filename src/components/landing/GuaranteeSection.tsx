import { motion } from "framer-motion";
import { ShieldCheck, Mail, HelpCircle } from "lucide-react";
import guaranteeBadge from "@/assets/guarantee-badge.jpg";

const GuaranteeSection = () => (
  <section className="py-16 px-4">
    <div className="container max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card rounded-2xl p-8 md:p-12 shadow-float border-2 border-secondary/30 text-center space-y-6"
      >
        <img src={guaranteeBadge} alt="Garantía de 7 días" className="w-28 h-28 mx-auto rounded-full object-cover" />
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
          Compra sin riesgo: Garantía total de 7 días
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Sabemos que invertir genera dudas. Por eso, te damos <strong>7 días completos para probarlo con tu hijo.</strong>
        </p>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Si sientes que no es para tu familia, simplemente nos escribes y te devolvemos <strong>cada centavo. Sin preguntas, sin formularios, sin complicaciones.</strong> El único riesgo es no intentarlo.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          {[
            { icon: ShieldCheck, text: "Devolución 100% garantizada — sin letra pequeña" },
            { icon: Mail, text: "Solo envía un correo y listo" },
            { icon: HelpCircle, text: "Sin preguntas, sin trámites, sin esperas" },
          ].map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-foreground">
              <Icon className="w-5 h-5 text-secondary shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        <p className="text-sm italic text-muted-foreground mt-4">
          "El riesgo lo asumimos nosotros. Tu única responsabilidad es darle la oportunidad a tu hijo."
        </p>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;

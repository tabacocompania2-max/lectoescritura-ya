import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import childLearning from "@/assets/child-learning-sm.webp";
import heroProduct from "@/assets/hero-product-sm.webp";

const CHECKOUT_URL = "https://pay.hotmart.com/K104296010G?checkoutMode=10";

const HeroSection = () => (
  <section className="py-10 md:py-16 px-4">
    <div className="container max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-5 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight text-foreground">
            Si tu hijo tiene 5 o 6 años y aún no lee, esto ya es una <span className="text-primary">señal de alerta</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-semibold leading-snug">
            Porque cada día que pasa sin leer, pierde confianza…
            <br />y tú lo estás viendo.
          </p>

          <p className="text-base text-foreground font-bold">
            No es que no pueda. Es que nadie le está enseñando bien.
          </p>

          <p className="text-base text-muted-foreground">
            Y mientras tú sigues intentando lo mismo… otros niños ya están avanzando.
          </p>

          <p className="text-lg text-primary font-bold">
            Eso se puede cambiar en semanas, si usas el método correcto.
          </p>

          <ul className="space-y-2">
            {[
              "Sin ser maestro — cualquier padre puede hacerlo",
              "Solo 15 minutos al día, sin estrés ni presión",
              "Más de 2,500 familias ya lo usan con éxito",
            ].map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground text-sm">
                <CheckCircle className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="animate-cta-pulse">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-6 rounded-xl shadow-float w-full max-w-sm">
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                Quiero ayudar a mi hijo hoy
                <ArrowRight className="ml-2 w-5 h-5 shrink-0" />
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Acceso inmediato · Garantía de 7 días · Pago seguro
          </p>
        </div>

        <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <img src={childLearning} alt="Niño aprendiendo a escribir con su mamá" className="rounded-2xl shadow-float w-full" width={583} height={874} fetchPriority="high" />
          <img src={heroProduct} alt="Material de lectoescritura imprimible" className="absolute -bottom-6 -right-4 w-40 md:w-52 rounded-xl shadow-lg border-4 border-card" width={266} height={266} loading="lazy" />
          <div className="absolute -bottom-10 left-4 bg-secondary text-secondary-foreground text-sm font-bold px-4 py-2 rounded-full shadow-lg">
            +2,500 familias confían en este método
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import productSpread from "@/assets/product-spread.jpg";

const DACAST_SRC = "https://player.vimeo.com/video/1177912788?autoplay=1";

const ProductVideoSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="container max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
          Mira por dentro exactamente cómo funciona el programa y lo que vas a recibir
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-float aspect-video bg-foreground/5"
        >
          {playing ? (
            <iframe
              src={DACAST_SRC}
              className="w-full h-full absolute inset-0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          ) : (
            <button onClick={() => setPlaying(true)} className="w-full h-full relative group cursor-pointer">
              <img src={productSpread} alt="Vista previa del material" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                <div className="bg-primary text-primary-foreground rounded-full p-5 shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10" fill="currentColor" />
                </div>
              </div>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductVideoSection;

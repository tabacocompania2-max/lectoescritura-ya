import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import videoThumb1 from "@/assets/video-thumb-1.webp";
import videoThumb2 from "@/assets/video-thumb-2.webp";

const videos = [
  {
    thumb: videoThumb1,
    src: "https://vimeo.com/1177900310?share=copy&fl=sv&fe=ci",
    caption: "Mamá enseñando a su hijo de 5 años con el método — mira cómo se concentra y disfruta.",
  },
  {
    thumb: videoThumb2,
    src: "https://iframe.dacast.com/vod/592280d6-f4cf-e74b-ad87-72de9cf6c3f2/9d214bb4-3e68-4603-98b6-5f0f838ce105",
    caption: "Padre e hijo practicando juntos — en pocos minutos al día, los avances son reales.",
  },
];

const VideoCard = ({ thumb, src, caption, index }: { thumb: string; src: string; caption: string; index: number }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="space-y-3"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-float aspect-video bg-foreground/5">
        {playing ? (
          <iframe
            src={src}
            className="w-full h-full absolute inset-0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        ) : (
          <button onClick={() => setPlaying(true)} className="w-full h-full relative group cursor-pointer">
            <img src={thumb} alt={`Demostración ${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
              <div className="bg-primary text-primary-foreground rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8" fill="currentColor" />
              </div>
            </div>
          </button>
        )}
      </div>
      <p className="text-sm text-muted-foreground text-center">{caption}</p>
    </motion.div>
  );
};

const VideoSection = () => (
  <section id="metodo-en-accion" className="py-16 px-4 bg-muted/50">
    <div className="container max-w-5xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
          Mira el método en acción
        </h2>
        <p className="text-muted-foreground mt-2">
          Familias reales usando el programa con sus hijos.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {videos.map((v, i) => (
          <VideoCard key={i} {...v} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default VideoSection;

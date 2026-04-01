interface EmotionalBreakProps {
  text: string;
  variant?: "default" | "strong";
}

const EmotionalBreak = ({ text, variant = "default" }: EmotionalBreakProps) => (
  <div className={`py-8 md:py-10 px-4 text-center ${variant === "strong" ? "bg-primary/10" : "bg-muted/30"}`}>
    <p className={`max-w-2xl mx-auto font-heading font-bold leading-snug ${
      variant === "strong"
        ? "text-xl md:text-2xl text-primary"
        : "text-lg md:text-xl text-foreground"
    }`}>
      {text}
    </p>
  </div>
);

export default EmotionalBreak;

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  variant?: "full" | "compact";
}

const getTargetDate = () => {
  const key = "promo_end_date";
  const stored = localStorage.getItem(key);
  if (stored) {
    const date = new Date(stored);
    if (date.getTime() > Date.now()) return date;
  }
  const target = new Date(Date.now() + 20 * 60 * 1000);
  localStorage.setItem(key, target.toISOString());
  return target;
};

const useCountdown = () => {
  const [target] = useState(getTargetDate);
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      setTimeLeft({
        h: Math.floor(diff / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
};

const pad = (n: number) => String(n).padStart(2, "0");

const TimeBox = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <span className="bg-foreground text-primary-foreground font-heading text-lg sm:text-2xl font-bold rounded-md px-2 py-1 min-w-[2.5rem] text-center">
      {value}
    </span>
    <span className="text-xs mt-1 text-muted-foreground">{label}</span>
  </div>
);

const CountdownTimer = ({ variant = "full" }: CountdownTimerProps) => {
  const { h, m, s } = useCountdown();

  if (variant === "compact") {
    return (
      <span className="font-heading font-bold text-primary-foreground tabular-nums">
        {pad(h)}:{pad(m)}:{pad(s)}
      </span>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <TimeBox value={pad(h)} label="Horas" />
        <span className="text-xl font-bold text-foreground">:</span>
        <TimeBox value={pad(m)} label="Min" />
        <span className="text-xl font-bold text-foreground">:</span>
        <TimeBox value={pad(s)} label="Seg" />
      </div>
      <p className="text-xs text-muted-foreground text-center">
        Precio promocional por tiempo limitado.<br />
        Este valor puede cambiar en cualquier momento.
      </p>
    </div>
  );
};

export default CountdownTimer;

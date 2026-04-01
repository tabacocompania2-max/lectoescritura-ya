import { Clock } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const TopBar = () => (
  <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-body flex items-center justify-center gap-2 flex-wrap">
    <Clock className="w-4 h-4" />
    <span>⚡ Oferta especial termina en</span>
    <CountdownTimer variant="compact" />
  </div>
);

export default TopBar;

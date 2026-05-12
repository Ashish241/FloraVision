import type { PropsWithChildren } from "react";

type GlassCardProps = PropsWithChildren<{ className?: string }>;

const GlassCard = ({ children, className = "" }: GlassCardProps) => (
  <div className={("rounded-2xl bg-white/5 " + className).trim()}>{children}</div>
);

export default GlassCard;

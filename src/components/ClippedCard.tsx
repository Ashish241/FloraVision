import type { PropsWithChildren } from "react";

type ClippedCardProps = PropsWithChildren<{ className?: string }>;

const ClippedCard = ({ children, className = "" }: ClippedCardProps) => (
  <div className={("clipped bg-white/5 " + className).trim()}>{children}</div>
);

export default ClippedCard;

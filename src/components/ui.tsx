import { Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode, ComponentProps } from "react";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

type GradientBtnProps = {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function GradientButton({ to, href, children, variant = "primary", className = "", ...rest }: GradientBtnProps) {
  const base =
    "group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold overflow-hidden transition-all duration-500";
  const styles =
    variant === "primary"
      ? "btn-gradient"
      : "glass-strong text-foreground hover:border-[#34d5ff]/50 hover:text-[#34d5ff] hover:shadow-[0_0_30px_rgba(52,213,255,0.35)]";

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      <ArrowRight
        size={16}
        className="relative z-10 transition-transform duration-500 group-hover:translate-x-2"
      />
    </>
  );

  if (to) return <Link to={to} className={`${base} ${styles} ${className}`}>{inner}</Link>;
  if (href) return <a href={href} className={`${base} ${styles} ${className}`}>{inner}</a>;
  return <button {...rest} className={`${base} ${styles} ${className}`}>{inner}</button>;
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: ReactNode; subtitle?: string }) {
  return (
    <Reveal className="text-center max-w-3xl mx-auto mb-14">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-5 text-xs font-medium uppercase tracking-widest text-[#34d5ff]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#34d5ff] animate-pulse" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h2>
      {subtitle && <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
    </Reveal>
  );
}

export function Blobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#34d5ff]/20 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-[#8b5cf6]/25 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#34d5ff]/15 blur-3xl animate-blob" style={{ animationDelay: "8s" }} />
    </div>
  );
}

export function GlassCard(props: ComponentProps<"div">) {
  const { className = "", ...rest } = props;
  return <div className={`glass card-hover rounded-2xl p-6 ${className}`} {...rest} />;
}

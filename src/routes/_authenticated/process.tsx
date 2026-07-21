import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Search, ClipboardList, Palette, Code2, TestTube2, Rocket, LifeBuoy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, SectionHeader, GradientButton, Blobs } from "../../components/ui";

export const Route = createFileRoute("/_authenticated/process")({
  head: () => ({
    meta: [
      { title: "Our Process — VRC Innovations" },
      { name: "description", content: "A seven-stage engineering process — from requirement analysis to maintenance & support." },
      { property: "og:title", content: "Our Process — VRC Innovations" },
      { property: "og:description", content: "How VRC Innovations delivers world-class technology." },
    ],
  }),
  component: Process,
});

const steps: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Search, title: "Requirement Analysis", text: "We dive deep to understand your goals, constraints, and vision — capturing every detail." },
  { icon: ClipboardList, title: "Planning", text: "Roadmaps, milestones, resources, and architecture are defined for predictable delivery." },
  { icon: Palette, title: "Design", text: "Beautiful, functional UI/UX and system design shaped around user and business needs." },
  { icon: Code2, title: "Development", text: "Clean, scalable, well-architected code built by engineers who care about craftsmanship." },
  { icon: TestTube2, title: "Testing", text: "Rigorous automated and manual QA — performance, security, and reliability verified." },
  { icon: Rocket, title: "Deployment", text: "Seamless production launches with zero-downtime deployment strategies." },
  { icon: LifeBuoy, title: "Maintenance & Support", text: "Continuous monitoring, iteration, and 24/7 support for long-term success." },
];

function Process() {
  return (
    <div>
      <section className="relative py-20">
        <Blobs />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-5 text-xs font-medium uppercase tracking-widest text-[#34d5ff]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#34d5ff] animate-pulse" /> How We Work
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              A Process Built for <span className="text-gradient">Precision</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Seven disciplined stages that transform your idea into intelligent, reliable, production-ready technology.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-5xl px-6 relative">
          {/* Center line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#34d5ff] via-[#8b5cf6] to-transparent md:-translate-x-1/2" />

          <div className="space-y-10">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative grid md:grid-cols-2 gap-6 items-center ${left ? "" : "md:[direction:rtl]"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-[var(--gradient-brand)] blur-lg opacity-70 animate-pulse" />
                      <div className="relative h-16 w-16 rounded-full bg-[var(--gradient-brand)] grid place-items-center text-white font-bold text-lg shadow-[var(--shadow-glow)] border-4 border-background">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the side without card on desktop */}
                  <div className={`hidden md:block ${left ? "order-1" : "order-2"}`} />

                  {/* Card */}
                  <div className={`pl-28 md:pl-0 ${left ? "md:order-2 md:pl-16" : "md:order-1 md:pr-16 [direction:ltr]"}`}>
                    <div className="glass-strong rounded-2xl p-7 card-hover">
                      <s.icon size={30} className="text-[#34d5ff] mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold">Have a project in mind?</h2>
            <p className="mt-4 text-muted-foreground">Let's walk through your idea and design a plan that delivers.</p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <GradientButton to="/contact">Start a Conversation</GradientButton>
              <GradientButton to="/solutions" variant="secondary">Explore Solutions</GradientButton>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

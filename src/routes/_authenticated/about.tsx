import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Sparkles, FlaskConical, ShieldCheck, Rocket, Users, Award, Globe } from "lucide-react";
import { Reveal, SectionHeader, GradientButton, Blobs, GlassCard } from "../../components/ui";

export const Route = createFileRoute("/_authenticated/about")({
  head: () => ({
    meta: [
      { title: "About — VRC Groups" },
      { name: "description", content: "Learn about VRC Groups — a research-driven technology company building AI, software, IoT, and automation solutions." },
      { property: "og:title", content: "About VRC Groups" },
      { property: "og:description", content: "A research-driven technology company." },
    ],
  }),
  component: About,
});

const pillars = [
  { icon: Sparkles, title: "Innovation", text: "We reimagine what technology can do for people and businesses." },
  { icon: FlaskConical, title: "Research", text: "Deep, disciplined R&D powers every product we release." },
  { icon: ShieldCheck, title: "Quality", text: "Enterprise-grade engineering standards across the stack." },
  { icon: Rocket, title: "Discipline", text: "Consistent execution — from prototype to production." },
];

function About() {
  return (
    <div>
      <section className="relative py-20">
        <Blobs />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-5 text-xs font-medium uppercase tracking-widest text-[#34d5ff]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#34d5ff] animate-pulse" /> About VRC
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              We build <span className="text-gradient">intelligent technology</span> for a smarter tomorrow
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              VRC Groups is a next-generation technology company delivering software, AI, IoT, and automation solutions — powered by rigorous research, design excellence, and enterprise engineering discipline.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-5">
          {[
            { icon: Target, title: "Our Mission", text: "To empower organizations and individuals with future-ready technology that solves real-world problems." },
            { icon: Eye, title: "Our Vision", text: "To become a globally trusted innovation partner defining the next wave of intelligent systems." },
            { icon: Heart, title: "Our Values", text: "Innovation, integrity, curiosity, and a relentless commitment to craftsmanship." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <GlassCard className="h-full">
                <div className="h-12 w-12 rounded-xl bg-[var(--gradient-brand)] grid place-items-center mb-4 shadow-[0_0_20px_rgba(52,213,255,0.35)]">
                  <c.icon size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="What Drives Us" title={<>The <span className="text-gradient">Four Pillars</span></>} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <GlassCard className="h-full text-center">
                  <div className="h-14 w-14 mx-auto rounded-2xl bg-[var(--gradient-brand)] grid place-items-center mb-4">
                    <p.icon size={26} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{p.title}</h4>
                  <p className="text-sm text-muted-foreground">{p.text}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold">Let's build the future together</h2>
            <p className="mt-4 text-muted-foreground">Discover the solutions we craft for enterprises and innovators.</p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <GradientButton to="/solutions">Explore Solutions</GradientButton>
              <GradientButton to="/contact" variant="secondary">Get in Touch</GradientButton>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

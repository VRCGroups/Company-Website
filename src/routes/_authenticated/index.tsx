import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Users, FlaskConical, ShieldCheck, Rocket, Cpu, Cloud, Bot, ArrowRight } from "lucide-react";
import { Reveal, GradientButton, SectionHeader, Blobs, GlassCard } from "../../components/ui";
import { Particles } from "../../components/Particles";

export const Route = createFileRoute("/_authenticated/")({
  head: () => ({
    meta: [
      { title: "VRC Innovations — Building Future-Ready Technology" },
      { name: "description", content: "We build innovative software, AI, IoT, and intelligent automation for real-world innovation." },
    ],
  }),
  component: Home,
});

const values = [
  { icon: Sparkles, title: "Innovation", text: "We push boundaries with future-first thinking." },
  { icon: FlaskConical, title: "Research", text: "Deep research drives every solution we ship." },
  { icon: ShieldCheck, title: "Quality", text: "Enterprise-grade craftsmanship in every line." },
  { icon: Rocket, title: "Discipline", text: "Precise execution from concept to launch." },
];

const whyUs = [
  { icon: Sparkles, title: "Innovation", text: "Cutting-edge tech engineered for tomorrow's problems.", gradient: "from-[#34d5ff] to-[#5eb8ff]" },
  { icon: Users, title: "Customer First", text: "Your success is the metric we optimize for.", gradient: "from-[#8b5cf6] to-[#c084fc]" },
  { icon: FlaskConical, title: "Research Driven", text: "Every product built on rigorous R&D foundations.", gradient: "from-[#34d5ff] to-[#8b5cf6]" },
  { icon: ShieldCheck, title: "Secure Solutions", text: "Security-first architecture, zero compromises.", gradient: "from-[#8b5cf6] to-[#34d5ff]" },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(52,213,255,0.08),transparent_70%)]" />

        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center py-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-6 text-xs font-medium uppercase tracking-widest text-[#34d5ff]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#34d5ff] animate-pulse" />
              Future-Ready Technology
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05]"
            >
              Building <span className="text-gradient animate-gradient">Future-Ready</span> Technology
              <br />
              for Real-World <span className="text-gradient animate-gradient">Innovation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              We build innovative software, AI solutions, IoT systems, intelligent automation, and research-driven technologies that shape what's next.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <GradientButton to="/solutions">Explore Solutions</GradientButton>
              <GradientButton to="/contact" variant="secondary">Contact Us</GradientButton>
            </motion.div>

          </div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-[var(--gradient-brand)] blur-3xl opacity-40 rounded-full" />
              <div className="relative glass-strong rounded-3xl p-8 shadow-[var(--shadow-glow)]">
                <div className="grid grid-cols-2 gap-4">
                  {[Bot, Cpu, Cloud, Rocket].map((Icon, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.3 }}
                      className="aspect-square glass rounded-2xl grid place-items-center hover:border-[#34d5ff]/50 transition-all"
                    >
                      <Icon size={40} className="text-[#34d5ff]" />
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="h-full w-1/2 bg-[var(--gradient-brand)]"
                  />
                </div>
                <div className="mt-4 text-xs text-muted-foreground font-mono">// deploying_intelligence.exe</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="About Us"
            title={<>Engineering <span className="text-gradient">Tomorrow's</span> Technology, Today</>}
            subtitle="VRC Innovations is a research-driven technology company delivering intelligent software, AI systems, and next-generation digital solutions to enterprises worldwide."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <GlassCard className="h-full">
                  <div className="h-12 w-12 rounded-xl bg-[var(--gradient-brand)] grid place-items-center mb-4 shadow-[0_0_20px_rgba(52,213,255,0.35)]">
                    <v.icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.text}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <GradientButton to="/about">Learn More</GradientButton>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-28">
        <Blobs />
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Why Choose Us"
            title={<>Built on <span className="text-gradient">Excellence</span></>}
            subtitle="Four pillars that define how we craft technology and partnerships."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.1}>
                <div className="group relative glass card-hover rounded-2xl p-7 h-full overflow-hidden">
                  <div className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${w.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />
                  <div className={`relative h-14 w-14 rounded-2xl bg-gradient-to-br ${w.gradient} grid place-items-center mb-5 shadow-lg`}>
                    <w.icon size={26} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{w.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.text}</p>
                  <ArrowRight size={16} className="mt-5 text-[#34d5ff] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="relative glass-strong rounded-3xl p-12 md:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 bg-[var(--gradient-brand)] opacity-10" />
              <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-[#34d5ff]/30 blur-3xl" />
              <h2 className="relative text-3xl md:text-5xl font-bold leading-tight">
                Ready to build something <span className="text-gradient">extraordinary</span>?
              </h2>
              <p className="relative mt-5 text-muted-foreground max-w-xl mx-auto">
                Let's transform your vision into intelligent, scalable technology.
              </p>
              <div className="relative mt-8 flex justify-center gap-4 flex-wrap">
                <GradientButton to="/contact">Start a Project</GradientButton>
                <GradientButton to="/process" variant="secondary">See Our Process</GradientButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

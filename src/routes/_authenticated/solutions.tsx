import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Brain, Cpu, Database, Shield, Cloud, Code2, FileCode, Coffee, Palette, Wifi, GitBranch, CircuitBoard, BarChart3, Sparkles, Bot,
  Layers, Zap, Radio, Settings, CloudCog, FlaskConical, ArrowRight,
  Home, Leaf, Star, TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, GradientButton, Blobs } from "../../components/ui";
import suciBuilding from "@/assets/suchi-homes.jpg";

export const Route = createFileRoute("/_authenticated/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — VRC Innovations" },
      { name: "description", content: "VRC Future Minds & VRC Innovations — training, software, AI, IoT and digital transformation solutions." },
      { property: "og:title", content: "Our Solutions — VRC Innovations" },
      { property: "og:description", content: "Learning, training, software, AI, IoT, and enterprise transformation." },
    ],
  }),
  component: Solutions,
});

type Item = { icon: LucideIcon; title: string; desc?: string };

const futureMinds: Item[] = [
  { icon: Brain, title: "Artificial Intelligence" },
  { icon: Cpu, title: "Machine Learning" },
  { icon: Database, title: "Data Science" },
  { icon: Shield, title: "Cyber Security" },
  { icon: Cloud, title: "Cloud Computing" },
  { icon: Code2, title: "Full Stack Development" },
  { icon: FileCode, title: "Python Programming" },
  { icon: Coffee, title: "Java Development" },
  { icon: Palette, title: "UI/UX Design" },
  { icon: Wifi, title: "Internet of Things (IoT)" },
  { icon: GitBranch, title: "DevOps" },
  { icon: CircuitBoard, title: "Embedded Systems" },
  { icon: BarChart3, title: "Power BI" },
  { icon: Sparkles, title: "Prompt Engineering" },
  { icon: Bot, title: "Generative AI" },
];


const suciFeatures = [
  {
    icon: Home,
    emoji: "🏠",
    title: "Home Cleaning",
    desc: "Professional cleaning services for apartments, villas, and independent houses.",
  },
  {
    icon: Leaf,
    emoji: "🧹",
    title: "Deep Cleaning",
    desc: "Complete deep cleaning solutions using modern equipment and eco-friendly products.",
  },
  {
    icon: Star,
    emoji: "⭐",
    title: "Trusted Professionals",
    desc: "Experienced, trained, and verified professionals committed to quality service.",
  },
  {
    icon: TrendingUp,
    emoji: "✨",
    title: "Customer Satisfaction",
    desc: "Reliable, affordable, and timely cleaning services tailored to every customer's needs.",
  },
];

function DomainCard({
  item,
  i,
  navigate,
}: {
  item: Item;
  i: number;
  navigate: ReturnType<typeof useNavigate>;
}) {
  return (
    <Reveal delay={(i % 6) * 0.05}>
      <div
  onClick={() => navigate({ to: "/contact" })}
  className="group relative glass rounded-2xl p-6 h-full overflow-hidden card-hover cursor-pointer"
>
        <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-[var(--gradient-brand)] opacity-10 blur-2xl group-hover:opacity-30 transition-opacity" />

        <div className="relative flex items-start justify-between mb-5">
          <div className="h-12 w-12 rounded-xl bg-[var(--gradient-brand)] grid place-items-center shadow-[0_0_20px_rgba(52,213,255,0.35)]">
            <item.icon size={22} className="text-white" />
          </div>

          <ArrowRight
            size={18}
            className="text-[#34d5ff] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
          />
        </div>

        <h4 className="relative font-semibold text-base">
          {item.title}
        </h4>

        {item.desc && (
          <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">
            {item.desc}
          </p>
        )}
      </div>
    </Reveal>
  );
}


function ServiceCard({ item, i }: { item: Item; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="group relative h-full"
    >
      <div className="absolute -inset-[1px] rounded-3xl bg-[var(--gradient-brand)] opacity-30 blur-[2px] group-hover:opacity-80 transition-opacity duration-500" />
      <div className="relative glass-strong rounded-3xl p-7 h-full overflow-hidden">
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#8b5cf6]/20 blur-3xl group-hover:bg-[#34d5ff]/30 transition-colors duration-700" />
        <motion.div
          whileHover={{ rotate: 6, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="relative h-14 w-14 rounded-2xl bg-[var(--gradient-brand)] grid place-items-center mb-5 shadow-[0_0_25px_rgba(139,92,246,0.5)]"
        >
          <item.icon size={26} className="text-white" />
        </motion.div>
        <h4 className="relative font-semibold text-lg mb-2">{item.title}</h4>
        <p className="relative text-sm text-muted-foreground leading-relaxed mb-5">{item.desc}</p>
        <a href="#" className="relative inline-flex items-center gap-1.5 text-sm font-medium text-[#34d5ff] group/link">
          Learn More
          <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1.5" />
        </a>
      </div>
    </motion.div>
  );
}

function Solutions() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="relative py-20">
        <Blobs />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-5 text-xs font-medium uppercase tracking-widest text-[#34d5ff]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#34d5ff] animate-pulse" /> Our Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Solutions That Power <span className="text-gradient">Progress</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Two divisions. One mission — to unlock human and business potential with intelligent technology.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 1 — Future Minds */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative glass-strong rounded-3xl p-8 md:p-14 mb-14 overflow-hidden">
              <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#34d5ff]/20 blur-3xl" />
              <div className="relative flex items-start gap-6 flex-wrap">
                <div className="h-16 w-16 rounded-2xl bg-[var(--gradient-brand)] grid place-items-center shadow-[var(--shadow-glow)] shrink-0">
                  <Layers size={30} className="text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-widest text-[#34d5ff] mb-2">Division 01</div>
                  <h2 className="text-3xl md:text-5xl font-bold">
                    VRC <span className="text-gradient">Future Minds</span>
                  </h2>
                  <p className="text-[#8b5cf6] font-medium mt-2">Learning • Training • Innovation</p>
                  <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed">
                    VRC Future Minds is our learning and technology education division — preparing students and professionals with industry-ready skills across the most in-demand tech domains.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
  {futureMinds.map((item, i) => (
    <DomainCard
      key={item.title}
      item={item}
      i={i}
      navigate={navigate}
    />
  ))}
</div>

</div>   {/* <-- ADD THIS LINE */}

      </section>

      {/* SECTION 2 — Innovations */}
      <section className="relative py-20">
        <Blobs />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative glass-strong rounded-3xl p-8 md:p-14 mb-14 overflow-hidden">
              <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#8b5cf6]/25 blur-3xl" />
              <div className="relative flex items-start gap-6 flex-wrap">
                <div className="h-16 w-16 rounded-2xl bg-[var(--gradient-brand)] grid place-items-center shadow-[var(--shadow-glow)] shrink-0">
                  <Zap size={30} className="text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-widest text-[#34d5ff] mb-2">Division 02</div>
                  <h2 className="text-3xl md:text-5xl font-bold">
                    VRC <span className="text-gradient">Innovations</span>
                  </h2>
                  <p className="text-[#8b5cf6] font-medium mt-2">
                    Building Smart Technology &amp; Premium Infrastructure
                  </p>
                  <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed">
                    VRC Innovations delivers software products, digital transformation solutions, and intelligent technologies for businesses and organizations at every scale.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* SECTION A — Technology Solutions */}
          {/* Technology Solutions */}

          {/* SECTION B — About Suchi Homes */}
         {/* SECTION B — About SUCI Homes */}
<div className="mt-28">
  <Reveal>
    <div className="mb-10">
      <div className="text-xs uppercase tracking-widest text-[#34d5ff] mb-2">
        Section A
      </div>
      <h3 className="text-2xl md:text-3xl font-bold">
        About SUCI Homes
      </h3>
    </div>
  </Reveal>

  <div className="grid lg:grid-cols-2 gap-12 items-center">

    {/* LEFT — Image */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      <div className="absolute -inset-1 rounded-[28px] bg-[var(--gradient-brand)] opacity-40 blur-xl group-hover:opacity-70 transition-opacity duration-700" />

      <div className="relative overflow-hidden rounded-[24px] shadow-[0_25px_80px_rgba(0,0,0,0.5)]">

        <img
          src={suciBuilding}
          alt="SUCI Homes Cleaning Services"
          width={1400}
          height={1600}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0f19]/70 via-transparent to-[#34d5ff]/10 pointer-events-none" />
      </div>
    </motion.div>
    {/* RIGHT — Content */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
>
  <h4 className="text-3xl md:text-4xl font-bold">
    About SUCI Homes
  </h4>

  <div className="mt-3 h-1 w-24 rounded-full bg-[var(--gradient-brand)] shadow-[0_0_20px_rgba(52,213,255,0.6)]" />

  <p className="mt-6 text-muted-foreground leading-relaxed">
    SUCI Homes is a professional home cleaning and maintenance service dedicated
    to delivering hygienic, reliable, and high-quality cleaning solutions for
    homes, apartments, villas, offices, and commercial spaces. Our trained
    professionals use advanced equipment and safe cleaning practices to create
    clean, healthy, and comfortable living environments while ensuring complete
    customer satisfaction.
  </p>

  <div className="mt-8 grid sm:grid-cols-2 gap-5">

    <div className="glass rounded-2xl p-5">
      <div className="text-xs uppercase tracking-widest text-[#34d5ff] mb-2">
        Our Vision
      </div>

      <p className="text-sm text-foreground/90 leading-relaxed">
        To become the most trusted and preferred home cleaning service provider
        by delivering exceptional quality, professionalism, innovation, and
        customer satisfaction.
      </p>
    </div>

    <div className="glass rounded-2xl p-5">
      <div className="text-xs uppercase tracking-widest text-[#8b5cf6] mb-2">
        Our Mission
      </div>

      <p className="text-sm text-foreground/90 leading-relaxed">
        To provide reliable, affordable, eco-friendly, and professional cleaning
        services through trained experts, advanced cleaning techniques, and a
        commitment to excellence in every service we deliver.
      </p>
    </div>

  </div>
</motion.div>
{/* Feature cards */}
<div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
  {suciFeatures.map((f, i) => (
    <motion.div
      key={f.title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.05, y: -6 }}
      className="group relative"
    >
      <div className="absolute -inset-[1px] rounded-2xl bg-[var(--gradient-brand)] opacity-30 blur-[2px] group-hover:opacity-80 transition-opacity duration-500" />

      <div className="relative glass-strong rounded-2xl p-6 h-full overflow-hidden">

        <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-[#34d5ff]/15 blur-2xl group-hover:bg-[#8b5cf6]/30 transition-colors duration-700" />

        <div className="relative flex items-center gap-3 mb-3">
          <span className="text-2xl">{f.emoji}</span>
          <f.icon size={20} className="text-[#34d5ff]" />
        </div>

        <h5 className="relative font-semibold text-base mb-2">
          {f.title}
        </h5>

        <p className="relative text-sm text-muted-foreground leading-relaxed">
          {f.desc}
        </p>

      </div>
    </motion.div>
  ))}
</div>
 
</div>

</div>      {/* closes mt-28 */}
          
<Reveal className="mt-16 text-center">
  <GradientButton to="/contact">
    Discuss Your Project
  </GradientButton>
</Reveal>

</div>
</section>
</div>
);
}
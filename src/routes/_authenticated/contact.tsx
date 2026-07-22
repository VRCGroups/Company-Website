import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Send, ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal, Blobs } from "../../components/ui";
import { supabase } from "@/integrations/supabase/client";
import { Footer } from "../../components/Footer";

export const Route = createFileRoute("/_authenticated/contact")({
  head: () => ({
    meta: [
      { title: "Contact — VRC Groups" },
      { name: "description", content: "Get in touch with VRC Groups. We'd love to hear about your project." },
      { property: "og:title", content: "Contact VRC Groups" },
      { property: "og:description", content: "Reach out to start your next technology project." },
    ],
  }),
  component: Contact,
});

const services = [
  "Software Development",
  "AI Solutions",
  "Machine Learning",
  "IoT Solutions",
  "Automation Systems",
  "Cloud Solutions",
  "Digital Transformation",
  "Training (Future Minds)",
  "Other",
];

function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const service_interest = formData.get("service") as string;
    const message = formData.get("message") as string;

    try {
      const { error } = await supabase.from("contacts").insert([
        {
          name,
          email,
          phone,
          service_interest,
          message,
        },
      ]);

      if (error) {
        console.error(error);
        alert(error.message);
        return;
      }

      setSent(true);
      form.reset();

      window.setTimeout(() => {
        setSent(false);
      }, 4000);
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="relative py-20">
        <Blobs />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-5 text-xs font-medium uppercase tracking-widest text-[#34d5ff]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#34d5ff] animate-pulse" /> Contact
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Let's Build Something <span className="text-gradient">Great Together</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Reach out — we'll get back within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: MapPin, title: "Address", value: "Vizag, Andhra Pradesh, India" },
              { icon: Phone, title: "Phone", value: "+91 9392420643" },
              { icon: Mail, title: "Email", value: "welcome@vrcpvtltd.com" },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={i * 0.08}>
                  <div className="glass rounded-2xl p-5 flex items-start gap-4 card-hover">
                    <div className="h-12 w-12 rounded-xl bg-[var(--gradient-brand)] grid place-items-center shrink-0 shadow-[0_0_20px_rgba(52,213,255,0.3)]">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{c.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{c.value}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}

          </div>

          <div className="lg:col-span-3">
            <Reveal>
              <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-8 md:p-10 space-y-5 relative overflow-hidden">
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#8b5cf6]/20 blur-3xl" />
                <div className="relative">
                  <h2 className="text-2xl font-bold">Send a message</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4 relative">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">Service</label>
                    <select
                      name="service"
                      required
                      className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:border-[#34d5ff] transition-colors bg-background/30"
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-background">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:border-[#34d5ff] transition-colors resize-none"
                    placeholder="Tell us about your reqirement..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || sent}
                  className="group relative inline-flex items-center gap-2 rounded-full btn-gradient px-8 py-3.5 text-sm font-semibold overflow-hidden disabled:opacity-70"
                >
                  {sent ? (
                    <>
                      <CheckCircle2 size={16} /> Message Sent
                    </>
                  ) : (
                    <>
                      <Send size={16} className="transition-transform group-hover:-translate-y-0.5" />
                      {loading ? "Sending…" : "Submit Message"}
                      <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-2" />
                    </>
                  )}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
       <Footer />
    </div>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:border-[#34d5ff] transition-colors"
        placeholder={label}
      />
    </div>
  );
}

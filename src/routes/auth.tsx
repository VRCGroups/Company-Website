import { createFileRoute, useNavigate, redirect } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, ShieldCheck } from "lucide-react";
import { lovable } from "@/integrations/lovable/index";
import { supabase } from "@/integrations/supabase/client";
import { Blobs } from "../components/ui";
import { Particles } from "../components/Particles";

export const Route = createFileRoute("/auth")({
  ssr: false,
  beforeLoad: async () => {
    const { data } = await supabase.auth.getUser();
    if (data.user) throw redirect({ to: "/" });
  },
  head: () => ({
    meta: [
      { title: "Sign in — VRC Innovations" },
      { name: "description", content: "Sign in to the VRC ecosystem with Google or GitHub." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function GoogleIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 3.3 14.7 2.3 12 2.3 6.7 2.3 2.4 6.6 2.4 12s4.3 9.7 9.6 9.7c5.5 0 9.2-3.9 9.2-9.4 0-.6-.1-1.1-.2-1.6H12z"/>
      <path fill="#34A853" d="M3.9 7.4l3.2 2.4C8 8 9.9 6.9 12 6.9c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 3.9 14.7 2.9 12 2.9 8.2 2.9 4.9 5.1 3.9 7.4z" opacity="0"/>
    </svg>
  );
}

function AuthPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<null | "google" | "github">(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") navigate({ to: "/" });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  async function handleGoogle() {
  setError(null);
  setLoading("google");

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/auth`,
    },
  });

  if (error) {
    setError(error.message);
    setLoading(null);
    return;
  }

  if (data?.url) {
    window.location.href = data.url;
  }
}

  async function handleGithub() {
    setError(null);
    setLoading("github");
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo: window.location.origin },
    });
    if (error) {
      setError(
        error.message.includes("provider is not enabled")
          ? "GitHub sign-in isn't enabled yet. Please enable the GitHub provider in your backend auth settings."
          : error.message,
      );
      setLoading(null);
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background grid place-items-center px-4 py-10">
      <Blobs />
      <Particles count={50} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-md"
      >
        <div className="absolute -inset-[1px] rounded-[28px] bg-[var(--gradient-brand)] opacity-70 blur-sm" />
        <div className="relative glass-strong rounded-[28px] p-8 md:p-10 shadow-[0_20px_80px_rgba(52,213,255,0.25)]">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="h-16 w-16 rounded-2xl bg-[var(--gradient-brand)] grid place-items-center shadow-[0_0_30px_rgba(52,213,255,0.6)]"
            >
              <span className="text-white font-black text-2xl">V</span>
            </motion.div>
            <h1 className="mt-6 text-3xl font-bold">
              Welcome to <span className="text-gradient">VRC Group</span>
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Sign in to continue to the VRC ecosystem.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGoogle}
              disabled={loading !== null}
              className="group relative w-full flex items-center justify-center gap-3 rounded-2xl px-5 py-4 bg-white text-slate-900 font-semibold shadow-[0_10px_40px_rgba(52,213,255,0.25)] hover:shadow-[0_10px_50px_rgba(52,213,255,0.5)] transition-all disabled:opacity-60"
            >
              <GoogleIcon />
              <span>{loading === "google" ? "Connecting…" : "Continue with Google"}</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGithub}
              disabled={loading !== null}
              className="group relative w-full flex items-center justify-center gap-3 rounded-2xl px-5 py-4 glass-strong text-foreground font-semibold hover:border-[#8b5cf6]/60 hover:shadow-[0_10px_50px_rgba(139,92,246,0.45)] transition-all disabled:opacity-60"
            >
              <Github size={20} />
              <span>{loading === "github" ? "Connecting…" : "Continue with GitHub"}</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" />
            </motion.button>
          </div>

          {error && (
            <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-xs text-red-300">
              {error}
            </div>
          )}

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck size={14} className="text-[#34d5ff]" />
            Secure authentication powered by VRC Cloud
          </div>
        </div>
      </motion.div>
    </div>
  );
}

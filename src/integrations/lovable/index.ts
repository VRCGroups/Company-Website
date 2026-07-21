import { supabase } from "../supabase/client";

type SignInOptions = {
  redirect_uri?: string;
};

export const lovable = {
  auth: {
    signInWithOAuth: async (
      provider: "google" | "apple" | "microsoft" | "lovable",
      opts?: SignInOptions
    ) => {
      try {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: provider as "google" | "apple",
          options: {
            redirectTo: opts?.redirect_uri || window.location.origin,
          },
        });

        if (error) {
          return {
            error,
            redirected: false,
          };
        }

        if (data?.url) {
          window.location.href = data.url;

          return {
            redirected: true,
          };
        }

        return {
          redirected: false,
        };
      } catch (e) {
        return {
          error: e instanceof Error ? e : new Error(String(e)),
          redirected: false,
        };
      }
    },
  },
};
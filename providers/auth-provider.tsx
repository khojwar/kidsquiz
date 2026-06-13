import { AuthContext } from "@/hooks/use-auth-context";
import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";
import { PropsWithChildren, useEffect, useState } from "react";

export default function AuthProvider({ children }: PropsWithChildren) {
  const [claims, setClaims] = useState<
    Record<string, any> | undefined | null
  >();
  const [profile, setProfile] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  // Fetch the claims once, and subscribe to auth state changes
  useEffect(() => {
    const fetchClaims = async () => {
      setIsLoading(true);

      const { data, error } = await supabase.auth.getClaims();

      if (error) {
        console.error("Error fetching claims:", error);
      }

      setClaims(data?.claims ?? null);
      setIsLoading(false);
    };

    fetchClaims();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, _session) => {
      console.log("Auth state changed:", { event: _event });
      const { data } = await supabase.auth.getClaims();
      setClaims(data?.claims ?? null);

      // Redirect to app/(tabs) on successful sign in
      if (_event === "SIGNED_IN") {
        console.log("User signed in, redirecting to app/(tabs)");
        router.replace("/(tabs)");
      }

      // Redirect to login on sign out
      if (_event === "SIGNED_OUT") {
        console.log("User signed out, redirecting to /login");
        router.replace("/login");
      }
    });

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  // Fetch the profile when the claims change
  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);

      if (claims) {
        const { data } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", claims.sub)
          .single();

        setProfile(data);
      } else {
        setProfile(null);
      }

      setIsLoading(false);
    };

    fetchProfile();
  }, [claims]);

  return (
    <AuthContext.Provider
      value={{
        claims,
        isLoading,
        profile,
        isLoggedIn: claims != undefined,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

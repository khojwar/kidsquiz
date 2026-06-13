import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    // The session is already handled by exchangeCodeForSession in your button component.
    // This screen just needs to exist so Expo Router doesn't 404.
    // We redirect away immediately.
    const checkSession = async () => {
      try {
        // Add a small delay to ensure session is fully established
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const { data } = await supabase.auth.getSession();
        console.log("AuthCallback - checking session:", {
          hasSession: !!data.session,
        });

        if (data.session) {
          console.log("AuthCallback - session found, redirecting to /(tabs)");
          router.replace("/(tabs)");
        } else {
          console.log("AuthCallback - no session, redirecting to /login");
          router.replace("/login");
        }
      } catch (error) {
        console.error("AuthCallback - error checking session:", error);
        router.replace("/login");
      }
    };

    checkSession();
  }, [router]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}

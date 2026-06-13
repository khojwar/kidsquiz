import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";

/**
 * Sign‑out button that follows KidsQuiz button design rules:
 * • Rounded corners (16 px radius)
 * • Minimum touch height 56 px (large touch target)
 * • Soft shadow for depth
 * • Primary orange accent (#FF9600) for the logout action
 * • Simple press‑in animation via opacity change
 */
export default function SignOutButton() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  async function onSignOutButtonPress() {
    if (loading) return;
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error("Error signing out:", error);
        return;
      }

      console.log("User signed out successfully, redirecting to /login");
      router.replace("/login");
    } catch (error) {
      console.error("Unexpected error during sign out:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onSignOutButtonPress}
      style={styles.button}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.label}>Sign out</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF9600", // Orange accent for logout
    borderRadius: 16,
    minHeight: 56,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    // Soft shadow (elevation works on Android, shadow props for iOS)
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop: 16,
  },
  label: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

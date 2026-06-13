import { Image } from "expo-image";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import SignOutButton from "@/components/social-auth-buttons/sign-out-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useAuthContext } from "@/hooks/use-auth-context";

export default function HomeScreen() {
  const { profile, claims, isLoading } = useAuthContext();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      style={styles.container}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* User Information Card */}
      <ThemedView style={styles.userInfoCard}>
        <ThemedText type="subtitle" style={styles.cardTitle}>
          User Profile
        </ThemedText>

        {profile?.full_name && (
          <View style={styles.infoRow}>
            <ThemedText type="subtitle" style={styles.label}>
              Name:
            </ThemedText>
            <ThemedText style={styles.value}>{profile.full_name}</ThemedText>
          </View>
        )}

        {profile?.username && (
          <View style={styles.infoRow}>
            <ThemedText type="subtitle" style={styles.label}>
              Username:
            </ThemedText>
            <ThemedText style={styles.value}>{profile.username}</ThemedText>
          </View>
        )}

        {claims?.email && (
          <View style={styles.infoRow}>
            <ThemedText type="subtitle" style={styles.label}>
              Email:
            </ThemedText>
            <ThemedText style={styles.value}>{claims.email}</ThemedText>
          </View>
        )}

        {claims?.sub && (
          <View style={styles.infoRow}>
            <ThemedText type="subtitle" style={styles.label}>
              User ID:
            </ThemedText>
            <ThemedText style={[styles.value, styles.userId]}>
              {claims.sub.substring(0, 12)}...
            </ThemedText>
          </View>
        )}
      </ThemedView>

      <SignOutButton />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  userInfoCard: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    padding: 16,
    marginVertical: 16,
    gap: 12,
  },
  cardTitle: {
    marginBottom: 8,
    fontWeight: "600",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  label: {
    fontWeight: "600",
    flex: 1,
  },
  value: {
    flex: 1.5,
    textAlign: "right",
  },
  userId: {
    fontSize: 12,
    opacity: 0.7,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

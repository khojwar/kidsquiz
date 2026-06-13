import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { View, TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * 🎨 KidsQuiz Bottom Tab Navigator – redesigned to follow the KidsQuiz Design & Development Rules.
 *
 * • Primary green #58CC02 for active icons.
 * • Secondary blue #1CB0F6 for inactive icons.
 * • Rounded tab bar container with soft shadow.
 * • Large touch targets (minimum 56 px height) for kids.
 * • Spacing follows the 4‑8‑12‑16‑20‑24‑32‑40‑48 system.
 * • Dark‑mode support via Appearance.
 */
export default function TabsLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  // Custom tab bar component respecting KidsQuiz UI rules.
  const CustomTabBar = ({ state, descriptors, navigation }: any) => {
    return (
      <SafeAreaView edges={["bottom"]} style={styles.safeArea}>
        <View style={[styles.tabBar, isDark && styles.tabBarDark]}>
          {state.routes.map((route: any, index: number) => {
            const { options } = descriptors[route.key];
            const label = options.title ?? route.name;
            const iconName =
              route.name === "index"
                ? "home"
                : route.name === "report"
                ? "file-text"
                : "cog";
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            return (
              <TouchableOpacity
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                onPress={onPress}
                activeOpacity={0.8}
                style={styles.tabItem}
              >
                <FontAwesome
                  name={iconName as any}
                  size={24}
                  color={isFocused ? "#58CC02" : "#1CB0F6"}
                />
                <Text style={[styles.tabLabel, { color: isFocused ? "#58CC02" : "#1CB0F6" }]}>{label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: "none" }, // hide default tab bar
        // keep safe area background for dark mode
        // tabBarBackground removed – not needed with custom tab bar
      }}
      tabBar={CustomTabBar}
    >
      {/* Home tab – maps to app/(tabs)/index.tsx */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />

      {/* Report tab – maps to app/(tabs)/report.tsx */}
      <Tabs.Screen
        name="report"
        options={{
          title: "Report",
        }}
      />

      {/* Settings tab – maps to app/(tabs)/settings.tsx */}
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "transparent",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#F7F7F7", // surface color per UI style
    borderRadius: 20,
    marginHorizontal: 16,
    marginBottom: Platform.select({ ios: 16, android: 12 }),
    paddingVertical: 10,
    // Soft shadow for depth
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    minHeight: 56,
  },
  tabBarDark: {
    backgroundColor: "#1E1E1E",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: "600",
  },
});

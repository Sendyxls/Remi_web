import React from "react";
import { Tabs } from "expo-router";
import { Home, ScanLine, Map, Settings } from "lucide-react-native";

import { colors } from "@/constants/colors";
import { useSettingsStore } from "@/stores/settingsStore";
import { getTranslation } from "@/utils/translations";

export default function TabLayout() {
  const { language } = useSettingsStore();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textLight,
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
        },
        headerStyle: {
          backgroundColor: colors.card,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="scanner"
        options={{
          title: getTranslation("scanner", language),
          tabBarIcon: ({ color, size }) => <ScanLine size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: getTranslation("home", language),
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: getTranslation("map", language),
          tabBarIcon: ({ color, size }) => <Map size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: getTranslation("settings", language),
          tabBarIcon: ({ color, size }) => <Settings size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
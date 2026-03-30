import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  Linking,
} from "react-native";
import * as Location from "expo-location";
import { MapPin } from "lucide-react-native";

import { colors } from "@/constants/colors";
import { stores } from "@/mocks/stores";
import { StoreCard } from "@/components/StoreCard";
import { useSettingsStore } from "@/stores/settingsStore";
import { getTranslation } from "@/utils/translations";

export default function MapScreen() {
  const [, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { language } = useSettingsStore();

  useEffect(() => {
    (async () => {
      if (Platform.OS === "web") {
        setErrorMsg("Location services are limited on web");
        return;
      }

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const openMaps = (store: typeof stores[0]) => {
    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q=",
    });
    const latLng = `${store.location.latitude},${store.location.longitude}`;
    const label = store.name[language as 'ru' | 'en' | 'zh'];
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
      web: `https://www.google.com/maps/search/?api=1&query=${latLng}`,
    });

    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>{getTranslation("nearbyStores", language)}</Text>

      {errorMsg && (
        <View style={styles.messageContainer}>
          <MapPin size={24} color={colors.error} />
          <Text style={styles.errorMessage}>{errorMsg}</Text>
        </View>
      )}

      {stores.map((store) => (
        <StoreCard
          key={store.id}
          store={store}
          onPress={() => openMaps(store)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 16,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  errorMessage: {
    marginLeft: 8,
    fontSize: 16,
    color: colors.error,
  },
});
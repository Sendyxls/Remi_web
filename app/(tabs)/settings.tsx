import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Info } from "lucide-react-native";

import { colors } from "@/constants/colors";
import { LanguagePicker } from "@/components/LanguagePicker";
import { CurrencyPicker } from "@/components/CurrencyPicker";
import { CustomRateInput } from "@/components/CustomRateInput";
import { useSettingsStore } from "@/stores/settingsStore";
import { getTranslation } from "@/utils/translations";

export default function SettingsScreen() {
  const { language } = useSettingsStore();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{getTranslation("settings", language)}</Text>

        <LanguagePicker />
        <CurrencyPicker />
        <CustomRateInput />

        <View style={styles.aboutSection}>
          <Text style={styles.sectionTitle}>{getTranslation("aboutApp", language)}</Text>
          <View style={styles.infoContainer}>
            <Info size={20} color={colors.primary} />
            <Text style={styles.infoText}>ShopSmart v1.0.0</Text>
          </View>
          <Text style={styles.description}>
            {language === "ru" && "Торговый ассистент, который помогает сравнивать цены, сканировать штрих-коды и находить лучшие предложения в магазинах."}
            {language === "en" && "A shopping assistant that helps you compare prices, scan barcodes, and find the best deals in stores."}
            {language === "zh" && "购物助手，帮助您比较价格，扫描条形码，并在商店中找到最优惠的交易。"}
          </Text>
        </View>
      </ScrollView>
    </View>
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
    fontSize: 26,
    fontWeight: "800" as const,
    color: colors.text,
    marginBottom: 24,
  },
  aboutSection: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700" as const,
    color: colors.text,
    marginBottom: 12,
  },
  infoContainer: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    marginBottom: 12,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "600" as const,
    color: colors.text,
  },
  description: {
    fontSize: 15,
    color: colors.textLight,
    lineHeight: 22,
  },
});
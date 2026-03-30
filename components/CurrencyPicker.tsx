import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

import { colors } from "@/constants/colors";
import { currencies, Currency } from "@/constants/currencies";
import { useSettingsStore } from "@/stores/settingsStore";
import { getTranslation } from "@/utils/translations";

export const CurrencyPicker = () => {
  const { language, currency, setCurrency } = useSettingsStore();

  const handleCurrencyChange = (currencyCode: string) => {
    setCurrency(currencyCode);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {getTranslation("currency", language)}
      </Text>
      <View style={styles.currenciesContainer}>
        {currencies.map((curr: Currency) => (
          <Pressable
            key={curr.code}
            style={[
              styles.currencyButton,
              currency === curr.code && styles.selectedCurrencyButton,
            ]}
            onPress={() => handleCurrencyChange(curr.code)}
          >
            <Text
              style={[
                styles.currencyText,
                currency === curr.code && styles.selectedCurrencyText,
              ]}
            >
              {curr.code} ({curr.symbol})
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "700" as const,
    color: colors.text,
    marginBottom: 12,
  },
  currenciesContainer: {
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    gap: 10,
  },
  currencyButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: colors.card,
    borderWidth: 2,
    borderColor: colors.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  selectedCurrencyButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  currencyText: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: colors.text,
  },
  selectedCurrencyText: {
    color: "#fff",
    fontWeight: "700" as const,
  },
});
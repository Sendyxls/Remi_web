import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { Edit3, Check, X } from "lucide-react-native";

import { colors } from "@/constants/colors";
import { useSettingsStore } from "@/stores/settingsStore";
import { currencies } from "@/constants/currencies";

export const CustomRateInput = () => {
  const { language, customRates, setCustomRate } = useSettingsStore();
  const [editingCurrency, setEditingCurrency] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const handleEdit = (currencyCode: string) => {
    setEditingCurrency(currencyCode);
    const currentRate = customRates[currencyCode];
    const defaultRate = currencies.find((c) => c.code === currencyCode)?.rate || 1;
    setInputValue((currentRate || defaultRate).toString());
  };

  const handleSave = () => {
    if (editingCurrency) {
      const rate = parseFloat(inputValue);
      if (!isNaN(rate) && rate > 0) {
        setCustomRate(editingCurrency, rate);
      }
      setEditingCurrency(null);
      setInputValue("");
    }
  };

  const handleCancel = () => {
    setEditingCurrency(null);
    setInputValue("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {language === "ru" && "Курсы валют (относительно юаня)"}
        {language === "en" && "Exchange Rates (relative to Yuan)"}
        {language === "zh" && "汇率（相对于人民币）"}
      </Text>
      <Text style={styles.subtitle}>
        {language === "ru" && "1 юань (CNY) = X единиц валюты"}
        {language === "en" && "1 yuan (CNY) = X currency units"}
        {language === "zh" && "1元（CNY）= X货币单位"}
      </Text>
      
      {currencies.map((currency) => {
        const isEditing = editingCurrency === currency.code;
        const currentRate = customRates[currency.code] || currency.rate;
        const rateRelativeToYuan = currency.code === "CNY" ? 1 : currentRate / (currencies.find(c => c.code === "CNY")?.rate || 1);

        return (
          <View key={currency.code} style={styles.rateRow}>
            <View style={styles.currencyInfo}>
              <Text style={styles.currencyCode}>{currency.code}</Text>
              <Text style={styles.currencySymbol}>{currency.symbol}</Text>
            </View>

            {isEditing ? (
              <View style={styles.editContainer}>
                <TextInput
                  style={styles.input}
                  value={inputValue}
                  onChangeText={setInputValue}
                  keyboardType="decimal-pad"
                  placeholder="0.00"
                  placeholderTextColor={colors.textLight}
                  autoFocus
                />
                <Pressable onPress={handleSave} style={styles.iconButton}>
                  <Check size={20} color={colors.success} />
                </Pressable>
                <Pressable onPress={handleCancel} style={styles.iconButton}>
                  <X size={20} color={colors.error} />
                </Pressable>
              </View>
            ) : (
              <View style={styles.displayContainer}>
                <Text style={styles.rateText}>
                  {currency.code === "CNY" ? "1.0000" : rateRelativeToYuan.toFixed(4)}
                </Text>
                {currency.code !== "CNY" && (
                  <Pressable
                    onPress={() => handleEdit(currency.code)}
                    style={styles.editButton}
                  >
                    <Edit3 size={16} color={colors.primary} />
                  </Pressable>
                )}
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "700" as const,
    color: colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: colors.textLight,
    marginBottom: 16,
  },
  rateRow: {
    flexDirection: "row" as const,
    justifyContent: "space-between" as const,
    alignItems: "center" as const,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  currencyInfo: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
  },
  currencyCode: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: colors.text,
    marginRight: 8,
  },
  currencySymbol: {
    fontSize: 16,
    color: colors.textLight,
  },
  displayContainer: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
  },
  rateText: {
    fontSize: 16,
    fontWeight: "700" as const,
    color: colors.primary,
    marginRight: 8,
  },
  editButton: {
    padding: 4,
  },
  editContainer: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: 8,
  },
  input: {
    backgroundColor: colors.background,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 16,
    color: colors.text,
    minWidth: 100,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  iconButton: {
    padding: 4,
  },
});

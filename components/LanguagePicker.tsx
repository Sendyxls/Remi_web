import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

import { colors } from "@/constants/colors";
import { languages, Language } from "@/constants/languages";
import { useSettingsStore } from "@/stores/settingsStore";
import { getTranslation } from "@/utils/translations";

export const LanguagePicker = () => {
  const { language, setLanguage } = useSettingsStore();

  const handleLanguageChange = (languageCode: string) => {
    setLanguage(languageCode);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {getTranslation("language", language)}
      </Text>
      <View style={styles.languagesContainer}>
        {languages.map((lang: Language) => (
          <Pressable
            key={lang.code}
            style={[
              styles.languageButton,
              language === lang.code && styles.selectedLanguageButton,
            ]}
            onPress={() => handleLanguageChange(lang.code)}
          >
            <Text
              style={[
                styles.languageText,
                language === lang.code && styles.selectedLanguageText,
              ]}
            >
              {lang.nativeName}
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
  languagesContainer: {
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    gap: 10,
  },
  languageButton: {
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
  selectedLanguageButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  languageText: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: colors.text,
  },
  selectedLanguageText: {
    color: "#fff",
    fontWeight: "700" as const,
  },
});
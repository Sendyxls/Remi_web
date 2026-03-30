import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import { Search } from "lucide-react-native";


import { colors } from "@/constants/colors";
import { products } from "@/mocks/products";
import { ProductCard } from "@/components/ProductCard";
import { useSettingsStore } from "@/stores/settingsStore";
import { getTranslation } from "@/utils/translations";

export default function HomeScreen() {
  const { language } = useSettingsStore();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name[language as 'ru' | 'en' | 'zh'].toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.searchContainer}>
          <Search size={22} color={colors.textLight} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder={getTranslation("searchProducts", language)}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor={colors.textLight}
          />
        </View>

        <Text style={styles.sectionTitle}>
          {getTranslation("popularProducts", language)}
        </Text>

        {filteredProducts.length === 0 ? (
          <Text style={styles.noResults}>{getTranslation("noResults", language)}</Text>
        ) : (
          <FlatList
            data={sortedProducts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ProductCard product={item} />}
            scrollEnabled={false}
          />
        )}
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

  searchContainer: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    backgroundColor: colors.card,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: colors.text,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: "800" as const,
    color: colors.text,
    marginBottom: 16,
  },
  noResults: {
    fontSize: 16,
    color: colors.textLight,
    textAlign: "center" as const,
    marginTop: 40,
  },
});
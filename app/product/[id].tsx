import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Star, MapPin, User } from "lucide-react-native";

import { colors } from "@/constants/colors";
import { getProductById } from "@/mocks/products";
import { stores } from "@/mocks/stores";
import { StoreCard } from "@/components/StoreCard";
import { useSettingsStore } from "@/stores/settingsStore";
import { convertPrice, formatPrice } from "@/utils/currencyConverter";
import { getTranslation } from "@/utils/translations";

export default function ProductScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { language, currency, customRates } = useSettingsStore();

  const product = getProductById(id);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Product not found</Text>
      </View>
    );
  }

  const convertedPrice = convertPrice(product.price, currency, customRates);
  const formattedPrice = formatPrice(convertedPrice, currency);



  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.header}>
        <Text style={styles.title}>{product.name[language as 'ru' | 'en' | 'zh']}</Text>
        <View style={styles.ratingContainer}>
          <Star size={18} color={colors.warning} fill={colors.warning} />
          <Text style={styles.rating}>{product.rating.toFixed(1)}</Text>
        </View>
      </View>

      <Text style={styles.price}>{formattedPrice}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {getTranslation("description", language)}
        </Text>
        <Text style={styles.sectionText}>{product.description[language as 'ru' | 'en' | 'zh']}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {getTranslation("ingredients", language)}
        </Text>
        <Text style={styles.sectionText}>{product.ingredients[language as 'ru' | 'en' | 'zh']}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {getTranslation("storeAvailability", language)}
        </Text>
        {stores
          .filter((store) => product.storeAvailability[store.id] && product.storeAvailability[store.id].inStock)
          .map((store) => (
            <StoreCard
              key={store.id}
              store={store}
              product={product}
              onPress={() => router.push("/(tabs)/map" as any)}
            />
          ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {getTranslation("customerReviews", language)}
        </Text>
        {product.reviews.length > 0 ? (
          product.reviews.map((review) => (
            <View key={review.id} style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <View style={styles.reviewAuthor}>
                  <View style={styles.avatarContainer}>
                    <User size={16} color={colors.textLight} />
                  </View>
                  <Text style={styles.authorName}>{review.author}</Text>
                </View>
                <View style={styles.reviewRating}>
                  <Star size={14} color={colors.warning} fill={colors.warning} />
                  <Text style={styles.reviewRatingText}>{review.rating.toFixed(1)}</Text>
                </View>
              </View>
              <Text style={styles.reviewDate}>{review.date}</Text>
              <Text style={styles.reviewComment}>
                {review.comment[language as 'ru' | 'en' | 'zh']}
              </Text>
            </View>
          ))
        ) : (
          <Text style={styles.noReviewsText}>
            {getTranslation("noReviews", language)}
          </Text>
        )}
      </View>

      <Pressable
        style={styles.mapButton}
        onPress={() => router.push("/(tabs)/map" as any)}
      >
        <MapPin size={20} color="#fff" />
        <Text style={styles.mapButtonText}>
          {getTranslation("viewOnMap", language)}
        </Text>
      </Pressable>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: 40,
  },

  image: {
    width: "100%",
    height: 250,
  },
  header: {
    padding: 16,
    flexDirection: "row" as const,
    justifyContent: "space-between" as const,
    alignItems: "flex-start" as const,
  },
  title: {
    flex: 1,
    fontSize: 26,
    fontWeight: "800" as const,
    color: colors.text,
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    backgroundColor: colors.card,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: "700" as const,
    color: colors.text,
  },
  price: {
    fontSize: 30,
    fontWeight: "800" as const,
    color: colors.primary,
    paddingHorizontal: 16,
    marginBottom: 8,
  },

  section: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700" as const,
    color: colors.text,
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
  },
  mapButton: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    backgroundColor: colors.primary,
    marginHorizontal: 16,
    marginTop: 16,
    paddingVertical: 16,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  mapButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700" as const,
    marginLeft: 8,
  },
  errorText: {
    fontSize: 18,
    color: colors.error,
    textAlign: "center",
    marginTop: 40,
  },
  reviewCard: {
    backgroundColor: colors.background,
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  reviewHeader: {
    flexDirection: "row" as const,
    justifyContent: "space-between" as const,
    alignItems: "center" as const,
    marginBottom: 4,
  },
  reviewAuthor: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
  },
  avatarContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.card,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    marginRight: 8,
  },
  authorName: {
    fontSize: 15,
    fontWeight: "700" as const,
    color: colors.text,
  },
  reviewRating: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    backgroundColor: colors.card,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 12,
  },
  reviewRatingText: {
    fontSize: 13,
    fontWeight: "700" as const,
    color: colors.text,
    marginLeft: 3,
  },
  reviewDate: {
    fontSize: 13,
    color: colors.textLight,
    marginBottom: 8,
    marginLeft: 36,
  },
  reviewComment: {
    fontSize: 15,
    color: colors.text,
    lineHeight: 22,
    marginLeft: 36,
  },
  noReviewsText: {
    fontSize: 15,
    color: colors.textLight,
    textAlign: "center",
    marginTop: 12,
    fontStyle: "italic",
  },
});
import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { MapPin, CheckCircle, XCircle } from "lucide-react-native";

import { Store } from "@/mocks/stores";
import { colors } from "@/constants/colors";
import { useSettingsStore } from "@/stores/settingsStore";
import { Product } from "@/mocks/products";
import { getTranslation } from "@/utils/translations";

type StoreCardProps = {
  store: Store;
  product?: Product;
  onPress?: () => void;
};

export const StoreCard = ({ store, product, onPress }: StoreCardProps) => {
  const { language } = useSettingsStore();

  const hasProductInfo = product && product.storeAvailability[store.id];
  const productAvailable = hasProductInfo && product.storeAvailability[store.id].inStock;
  
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: `${store.logo}?w=60&h=60&fit=crop` }}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <Text style={styles.name}>{store.name[language as 'ru' | 'en' | 'zh']}</Text>
        <View style={styles.addressContainer}>
          <MapPin size={14} color={colors.textLight} />
          <Text style={styles.address} numberOfLines={1}>
            {store.address[language as 'ru' | 'en' | 'zh']}
          </Text>
        </View>
        {hasProductInfo && (
          <View style={styles.productInfo}>
            {productAvailable ? (
              <View style={styles.statusRow}>
                <CheckCircle size={16} color={colors.success} />
                <Text style={[styles.availability, { color: colors.success }]}>
                  {getTranslation("inStock", language)}
                </Text>
              </View>
            ) : (
              <View style={styles.statusRow}>
                <XCircle size={16} color={colors.error} />
                <Text style={[styles.availability, { color: colors.error }]}>
                  {getTranslation("outOfStock", language)}
                </Text>
              </View>
            )}
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row" as const,
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: colors.card,
  },
  content: {
    flex: 1,
    justifyContent: "center" as const,
  },
  name: {
    fontSize: 16,
    fontWeight: "700" as const,
    color: colors.text,
    marginBottom: 4,
  },
  addressContainer: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    marginBottom: 6,
  },
  address: {
    fontSize: 14,
    color: colors.textLight,
    marginLeft: 4,
    flex: 1,
  },
  productInfo: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
  },
  statusRow: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: 5,
  },
  availability: {
    fontSize: 14,
    fontWeight: "600" as const,
  },
});

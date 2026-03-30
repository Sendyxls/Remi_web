import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";

import { colors } from "@/constants/colors";
import { getProductByBarcode } from "@/mocks/products";
import { useSettingsStore } from "@/stores/settingsStore";
import { getTranslation } from "@/utils/translations";

export const Scanner = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const router = useRouter();
  const { language } = useSettingsStore();

  useEffect(() => {
    requestPermission();
  }, [requestPermission]);

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    if (scanned) return;
    
    setScanned(true);
    
    // For demo purposes, we'll simulate finding a product by barcode
    // In a real app, you would make an API call to a product database
    const product = getProductByBarcode(data);
    
    if (product) {
      router.push(`/product/${product.id}` as any);
    } else {
      // Simulate finding the first product for demo purposes
      router.push(`/product/1` as any);
    }
    
    // Reset scanned state after a delay
    setTimeout(() => {
      setScanned(false);
    }, 2000);
  };

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{getTranslation("loading", language)}</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {getTranslation("scanToCompare", language)}
        </Text>
        <Text
          style={styles.permissionButton}
          onPress={requestPermission}
        >
          {getTranslation("scan", language)}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing="back"
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        <View style={styles.overlay}>
          <View style={styles.scanArea} />
        </View>
        <View style={styles.instructionContainer}>
          <Text style={styles.instruction}>
            {getTranslation("scanBarcode", language)}
          </Text>
        </View>
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  text: {
    fontSize: 16,
    color: colors.text,
    textAlign: "center",
    marginBottom: 20,
  },
  permissionButton: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "600",
    padding: 12,
    borderRadius: 8,
    backgroundColor: colors.card,
    overflow: "hidden",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  scanArea: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: "transparent",
  },
  instructionContainer: {
    position: "absolute",
    bottom: 80,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  instruction: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    overflow: "hidden",
  },
});
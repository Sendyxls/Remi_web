import React from "react";
import { StyleSheet, View } from "react-native";

import { Scanner } from "@/components/Scanner";
import { colors } from "@/constants/colors";

export default function ScannerScreen() {
  return (
    <View style={styles.container}>
      <Scanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
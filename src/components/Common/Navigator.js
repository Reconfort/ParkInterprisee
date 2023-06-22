import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import assets from "../assetManager";

export default function Navigator() {
  return (
    <View>
      <View style={styles.navigator}>
        <View>
          <Text>navigator</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigator: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});

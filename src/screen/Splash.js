import { StyleSheet, View, Image, ImageBackground } from "react-native";
import React, { useEffect } from "react";
import assets from "../components/assetManager";

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Welcome");
    }, 2000); // 2 seconds delay
  }, []);
  return (
    <ImageBackground source={assets.background} style={styles.mainView}>
      <View>
        <View style={styles.topView}>
          <Image source={assets.logo} style={{ height: 150, width: 150 }} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  topView: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

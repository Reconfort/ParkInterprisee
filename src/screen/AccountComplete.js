import React from "react";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import theme from "../Theme/Theme";
import assets from "../components/assetManager";

export default function AccountComplete({ navigation }) {
  return (
    <ImageBackground source={assets.welcomeBg} style={styles.mainView}>
      <View style={styles.topView}>
        <View style={styles.VerifyCard}>
          <Image source={assets.complete} style={styles.VerifyIcon} />
        </View>
        <Text style={styles.WelcomeText}>Congraturations! </Text>
        <Text style={styles.caption}>
          Your account is completed , Please enjoy best Menu from us
        </Text>

        <View style={styles.paginateButton}>
          <TouchableOpacity
            style={styles.continue}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
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
    height: "65%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  WelcomeText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700",
    marginTop: 10,
    paddingHorizontal: 20,
    lineHeight: 28,
  },

  paginateButton: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
  },
  continue: {
    backgroundColor: theme.primary,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 30,
  },
  caption: {
    fontWeight: "500",
    fontSize: 16,
    color: theme.dark,
    textAlign: "center",
    width: "90%",
  },
  buttonText: {
    color: theme.light,
    fontSize: 14,
    fontWeight: "500",
  },
  userContainer: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
  },
  userCard: {
    width: 80,
    height: 80,
    backgroundColor: theme.light,
    marginBottom: 10,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  VerifyIcon: {
    width: 80,
    height: 80,
  },
  VerifyCard: {
    backgroundColor: theme.light,
    padding: 80,
    borderRadius: 500,
  },
});

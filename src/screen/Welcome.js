import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import theme from "../Theme/Theme";
import assets from "../components/assetManager";

export default function Welcome({ navigation }) {
  return (
    <ImageBackground source={assets.welcomeBg} style={styles.mainView}>
      <View style={styles.topView}>
        <Image source={assets.logo} style={{ height: 50, width: 50 }} />
        <Image
          source={assets.welcomeImge1}
          style={{ height: 200, width: 230 }}
        />
        <Text style={styles.WelcomeText}>
          Easy, Fast, Secure. Streamline Your Enterprise Ordering Process
        </Text>

        <View style={styles.paginate}>
          <View style={styles.left}></View>
          <View style={styles.right}></View>
        </View>
        <View style={styles.paginateButton}>
          <TouchableOpacity
            style={styles.continue}
            onPress={() => navigation.navigate("Welcome2")}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.login}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.buttonText}>Sign in</Text>
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
    // backgroundColor:"red",
    width: "100%",
    height: "85%%",
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
  paginate: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    gap: 5,
    justifyContent: "center",
    alignContent: "center",
  },
  left: {
    backgroundColor: theme.primary,
    width: 8,
    height: 8,
    borderRadius: 10,
  },
  right: {
    backgroundColor: theme.lightDark,
    width: 8,
    height: 8,
    borderRadius: 10,
  },
  paginateButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  continue: {
    backgroundColor: theme.primary,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 30,
  },
  login: {
    backgroundColor: theme.lightDark,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 30,
  },
  buttonText: {
    color: theme.light,
    fontSize: 14,
    fontWeight: "500",
  },
});

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import theme from "../Theme/Theme";
import assets from "../components/assetManager";

export default function ForgotPassword({ navigation }) {
  // create State that store inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const handleSignIn = () => {
  //   // Perform sign-in logic here, such as making an API call
  //   console.log("Email:", username);
  //   console.log("Password:", password);
  // };

  return (
    <ImageBackground source={assets.welcomeBg} style={styles.mainView}>
      <View style={styles.topView}>
        <View style={styles.SignIn}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Image source={assets.right} style={styles.icon} />
          </TouchableOpacity>
          <View style={styles.WelcomeContent}>
            <Text style={styles.WelcomeText}>Forgot Password</Text>
            <Text style={styles.caption}>
              Use you email to reset your account Password
            </Text>
          </View>
          <View style={styles.container}>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
            </View>
            
            <View style={styles.paginateButton}>
              <TouchableOpacity
                style={styles.continue}
                onPress={() => navigation.navigate("SignIn")}
              >
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.flexer}>
            <Text style={styles.caption}>Go back</Text>
            <Text
              style={styles.captionSignUp}
              onPress={() => navigation.navigate("SignIn")}
            >
              Sign in
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainView: {
    marginTop: 40,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  topView: {
    width: "100%",
    height: "85%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "start",
    paddingHorizontal: 20,
  },
  flexer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  WelcomeContent: {
    gap: 15,
  },
  WelcomeText: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: "700",
    marginTop: 10,
    lineHeight: 28,
  },
  container: {
    width: "100%",
  },
  inputWrapper: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    width: "100%",
  },
  label: {
    fontSize: 15,
    fontWeight: "400",
  },
  input: {
    padding: 15,
    paddingLeft: 30,
    marginTop: 10,
    borderRadius: 15,
    width: "100%",
    borderColor: theme.dark,
    borderWidth: 1,
  },
  icon: {
    width: 16,
    height: 14,
  },
  back: {
    borderColor: theme.dark,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
  },
  SignIn: {
    gap: 20,
    alignItems: "start",
    width: "100%",
  },
  signInBtn: {
    backgroundColor: theme.primary,
  },
  paginateButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  continue: {
    backgroundColor: theme.primary,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: theme.light,
    fontSize: 14,
    fontWeight: "500",
  },
  caption: {
    fontWeight: "400",
    fontSize: 16,
  },
  captionSignUp: {
    color: theme.secondary,
    fontWeight: "600",
    fontSize: 16,
  },
  forget: {
    color: theme.secondary,
    fontWeight: "600",
    fontSize: 16,
    paddingVertical: 5,
  },
  icons: {
    width: 26,
    height: 26,
  },
  socials: {
    marginTop: 5,
    width: "100%",
  },
  socialContainer: {
    backgroundColor: theme.light,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    paddingVertical: 12,
    borderRadius: 15,
    borderColor: theme.lightDark,
    borderWidth: 1,
  },
  separator: {
    backgroundColor: theme.lightDark,
    width: "50%",
    height: 1,
  },
});

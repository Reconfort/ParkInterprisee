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

export default function Register({ navigation }) {
  // create State that store inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignIn = () => {
    // Perform sign-in logic here, such as making an API call
    console.log("username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("ConfirmPassword:", Confirmpassword);
  };

  return (
    <ImageBackground source={assets.welcomeBg} style={styles.mainView}>
      <View style={styles.topView}>
        <View style={styles.SignIn}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.navigate("Welcome2")}
          >
            <Image source={assets.right} style={styles.icon} />
          </TouchableOpacity>
          <View style={styles.WelcomeContent}>
              <Text style={styles.WelcomeText}>Sign up</Text>
            <Text style={styles.caption}>Create account and order favorite menu</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                placeholder="Your username"
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Your email"
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
              </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Your password"
                onChangeText={(text) => setPassword(text)}
                value={password}
            secureTextEntry
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Sign to your Account</Text>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                secureTextEntry
              />
            </View>
            <View style={styles.paginateButton}>
              <TouchableOpacity
                style={styles.continue}
                onPress={() => navigation.navigate("userAccount")}
              >
                <Text style={styles.buttonText}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.flexer}>
            <Text style={styles.caption}>Already have account?</Text>
            <Text
              style={styles.captionSignUp}
              onPress={() => navigation.navigate("SignIn")}
            >
              Sign in
            </Text>
          </View>
        </View>
          <View style={styles.flexRow}>
            <Text style={styles.caption}>By clicking on Sign up you agree to  </Text>
            <Text
              style={styles.captionSignUp}
              onPress={() => navigation.navigate("SignIn")}
            >
              Terms and Data policy
            </Text>
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
    height: "89%",
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
  flexRow: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    width:"100%",
    marginTop:40
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

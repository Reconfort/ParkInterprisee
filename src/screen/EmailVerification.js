import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import theme from "../Theme/Theme";
import assets from "../components/assetManager";

export default function UserAccount({ navigation }) {
  return (
    <ImageBackground source={assets.welcomeBg} style={styles.mainView}>
      <View style={styles.topView}>
        <View style={styles.VerifyCard}>
          <Image source={assets.email} style={styles.VerifyIcon} />
        </View>
        <Text style={styles.WelcomeText}>Account Verification </Text>
        <Text style={styles.caption}>
          Please verify your email using the Link sent to
          <Text style={styles.captionEmail}> example@gmai.com</Text>
        </Text>

        <View style={styles.paginateButton}>
          <TouchableOpacity
            style={styles.skip}
            onPress={() => navigation.navigate("Verification")}
          >
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.continue}
            onPress={() => navigation.navigate("Complete")}
          >
            <Text style={styles.buttonText}>Send</Text>
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

  paginateButton: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
  },
  continue: {
    backgroundColor: theme.primary,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 30,
  },
  skip: {
    backgroundColor: theme.lightDark,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 30,
  },
  caption: {
    fontWeight: "500",
    fontSize: 16,
    color: theme.dark,
    textAlign:"center"
  },
  captionEmail: {
    fontWeight: "500",
    fontSize: 16,
    color: theme.secondary,
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
  input: {
    color:theme.lightDark,
    marginBottom: 10,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  VerifyIcon:{
    width:80,
    height:80,
  },
  VerifyCard:{
    backgroundColor:theme.light,
    padding:80,
    borderRadius:500,
  }
});

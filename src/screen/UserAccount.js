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

export default function UserAccount({ navigation }) {
  return (
    <ImageBackground source={assets.welcomeBg} style={styles.mainView}>
      <View style={styles.topView}>
        <Text style={styles.WelcomeText}>Tell us more about yourself</Text>

        <View style={styles.userContainer}>
          <TouchableOpacity style={styles.userCard}>
            <Text style={styles.caption}>I own store</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userCard}>
            <Text style={styles.caption}>Hotel Manager</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userCard}>
            <Text style={styles.caption}>Restaurant</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userCard}>
            <Text style={styles.caption}>Hotel Staff</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userCard}>
            <Text style={styles.caption}>Auditor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userCard}>
            <Text style={styles.caption}>User</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.paginateButton}>
          <TouchableOpacity
            style={styles.skip}
            onPress={() => navigation.navigate("Verification")}
          >
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.continue}
            onPress={() => navigation.navigate("Verification")}
          >
            <Text style={styles.buttonText}>Next</Text>
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
    color:theme.light
  },
  buttonText: {
    color: theme.light,
    fontSize: 14,
    fontWeight: "500",
  },
  userContainer: {
    backgroundColor: theme.light,
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
  },
  userCard: {
    width: "49%",
    height: 100,
    backgroundColor: theme.lightDark,
    marginBottom: 10,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },
});

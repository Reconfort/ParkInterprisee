import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import assets from "../assetManager";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../../Theme/Theme";

export default function Navbar() {
    const [hamburger, setHamburger] =useState(false)
  return (
    <View>
      <View style={styles.navbar}>
        <View>
          <Text>Hello</Text>
          <View style={styles.flex}>
            <Text style={styles.title}>John Doe</Text>
            <MaterialCommunityIcons
              name="hand-wave-outline"
              size={24}
              color="black"
            />
          </View>
        </View>
        <View style={styles.flex}>
          <TouchableOpacity style={styles.icons} onPress={() => setHamburger(!hamburger)}>
            {hamburger ? 
            <EvilIcons name="close" size={24} color="black" />
            :
            <Ionicons name="menu-outline" size={26} color="black" />
            }
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    // backgroundColor: "white",
    // borderColor: "red",
    // borderWidth: 2,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  profile: {
    borderRadius: "100%",
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 5,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  icons:{
    backgroundColor: theme.light,
    width:40,
    height:40,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10
  }
});

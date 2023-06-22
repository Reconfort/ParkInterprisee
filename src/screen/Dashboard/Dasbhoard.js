import { StyleSheet, View, Image, ImageBackground, SafeAreaView } from "react-native";
import React from "react";
import assets from "../../components/assetManager";
import Navbar from "../../components/Common/Navbar";
import Navigator from "../../components/Common/Navigator";
import Products from "../../components/Home/Products";
import Search from "../../components/Home/Search";


export default function Splash() {
  return (
    <ImageBackground source={assets.DashbaaoardBg} style={styles.mainView}>
      <SafeAreaView style={styles.navs}>
        <Navbar />
        <Search />
        <Products/>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: "5%",
  },
  navs:{
    width:"100%",
    height:"100%",
  }
});

import { View, Text } from "react-native";
import React from "react";
import "react-native-gesture-handler";
import Splash from "./src/screen/Splash";
import Welcome from "./src/screen/Welcome";
import Welcome2 from "./src/screen/Welcome2";
import Login from "./src/screen/Login";
import Register from "./src/screen/Register";
import UserAccount from "./src/screen/UserAccount";
import EmailVerification from "./src/screen/EmailVerification";
import AccountComplete from "./src/screen/AccountComplete";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider } from "native-base";
import ForgotPassword from "./src/screen/ForgotPassword";
import Dasbhoard from "./src/screen/Dashboard/Dasbhoard";
import SingleProduct from "./src/screen/Dashboard/SingleProduct";
import Cart from "./src/screen/Dashboard/Cart";
import Products from "./src/components/Home/Products";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Welcome2"
            component={Welcome2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={Login}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="SignUp"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="userAccount"
            component={UserAccount}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="forgot"
            component={ForgotPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Verification"
            component={EmailVerification}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Complete"
            component={AccountComplete}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dasbhoard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SingleProduct"
            component={SingleProduct}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

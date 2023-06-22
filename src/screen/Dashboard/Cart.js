import { View } from "react-native";
import React from "react";
import { Box, Center, ScrollView, Text } from "native-base";
import theme from "../../Theme/Theme";
import CartEmpty from "../../components/Notifications/CartEmpty";
import CartItems from "../../components/Notifications/CartItems";

export default function Cart() {
  return (
    <Box flex={1} safeAreaTop bg={theme.lighterDark}>
      {/* header   */}
      <Center w="full" py={5} h="full">
        <Text color={theme.dark} fontSize={20} bold>
          Cart
        </Text>
        {/* If cart is empty  */}
        <CartEmpty />

        {/* Cart Items */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <CartItems />
        </ScrollView>
      </Center>
    </Box>
  );
}

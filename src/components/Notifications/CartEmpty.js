import React from "react";
import { Box, Center, Text } from "native-base";
import theme from "../../Theme/Theme";
import { Feather } from "@expo/vector-icons";
import SinglButton from "../SinglButton";
import { useNavigation } from "@react-navigation/native";

export default function CartEmpty() {
  const navigation = useNavigation();
  return (
    <Box flex={1}>
      <Center h="90%" px={4}>
        <Center h="100%">
          <Center w={200} h={200} bg={theme.light} rounded="full">
            <Feather name="shopping-bag" size={32} color={theme.secondary} />
          </Center>

          <Text color={theme.secondary} bold mt={5}>
            CART IS EMPTY
          </Text>
        </Center>
        <SinglButton
          bg={theme.dark}
          theme={theme.light}
          onPress={() => navigation.navigate("Dashboard")}
        >
          START
        </SinglButton>
      </Center>
    </Box>
  );
}

import { HStack, Input, Box } from "native-base";
import React from "react";
import theme from "../../Theme/Theme";
import { Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Search() {
  const navigation = useNavigation();
  return (
    <HStack space={3} w="full" py={4} alignItems="center">
      <Input
        placeholder="Tomotoes, Cabbage, Carrots, ...."
        w="85%"
        bg={theme.light}
        type="search"
        h={12}
        variant="filled"
        borderWidth={0}
        _focus={{
          bg: theme.light,
        }}
      />
      <Pressable>
        <TouchableOpacity
          style={styles.cart}
          onPress={() => navigation.navigate("Cart")}
        >
          <SimpleLineIcons name="bag" size={20} color={theme.dark} />
        </TouchableOpacity>
        <Box
          px={1}
          rounded="full"
          position="absolute"
          h={5}
          w={5}
          justifyContent="center"
          alignItems={"center"}
          top={-10}
          left={3}
          bg={theme.primary}
          _text={{
            color: theme.light,
            fontSize: 11,
            fontWeight: "500",
          }}
        >
          0
        </Box>
      </Pressable>
    </HStack>
  );
}

const styles = StyleSheet.create({
  cart: {
    backgroundColor: theme.light,
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
  },
});

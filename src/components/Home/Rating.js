import { HStack, Text } from "native-base";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import theme from "../../Theme/Theme";

export default function Rating({ value, text }) {
  const size = 12;
  const color = theme.secondary;
  return (
    <HStack space={0.4} mt={2} alignItems="center">
      <FontAwesome
        name={value >= 1 ? "star" : value >= 0.5 ? "star-half-full" : "star-o"}
        size={size}
        color={color}
      />
      <FontAwesome
        name={value >= 2 ? "star" : value >= 1.5 ? "star-half-full" : "star-o"}
        size={size}
        color={color}
      />
      <FontAwesome
        name={value >= 3 ? "star" : value >= 2.5 ? "star-half-full" : "star-o"}
        size={size}
        color={color}
      />
      <FontAwesome
        name={value >= 4 ? "star" : value >= 3.5 ? "star-half-full" : "star-o"}
        size={size}
        color={color}
      />
      <FontAwesome
        name={value >= 5 ? "star" : value >= 4.5 ? "star-half-full" : "star-o"}
        size={size}
        color={color}
      />
      {text && (
        <Text fontSize={12} ml={2}>
          {text}
        </Text>
      )}
    </HStack>
  );
}

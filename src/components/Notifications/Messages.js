import { Center, Text } from "native-base";
import React from "react";

export default function Messages({ bg, theme, children, size, bold }) {
  return (
    <Center bg={bg} p={4} rounded={5}>
      <Text color={theme} fontSize={size} bold={bold}>
        {children}
      </Text>
    </Center>
  );
}

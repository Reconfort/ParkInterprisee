import { Button } from "native-base";
import React from "react";

export default function SinglButton({ mt, bg, theme, children, onPress }) {
  return (
    <Button
      w="full"
      h={55}
      mt={mt}
      color={theme}
      rounded="full"
      bg={bg}
      _text={{
        color: theme,
        fontWeight: "bold",
      }}
      _pressed={{ bg: bg }}
      onPress={onPress}
    >
      {children}
    </Button>
  );
}

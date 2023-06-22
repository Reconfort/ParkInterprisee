import { VStack, TextArea, FormControl, Select, Button } from "native-base";
import React, { useState } from "react";
import theme from "../../Theme/Theme";
import { AntDesign } from "@expo/vector-icons";
import SinglButton from "../SinglButton";

export default function Comment() {
  const [ratings, setRatings] = useState("");
  return (
    <VStack space={6}>
      <FormControl>
        <FormControl.Label _text={{ fontSize: "12px", fontWeight: "bold" }}>
          Comment
        </FormControl.Label>
        <TextArea
          h={24}
          w="full"
          placeholder="This product is good .... "
          borderWidth={0}
          bg={theme.lighterDark}
          py={4}
          _focus={{
            bg: theme.lighterDark,
          }}
        ></TextArea>
      </FormControl>
      <SinglButton bg={theme.secondary} theme={theme.light} mt={10}>
        SUBMIT
      </SinglButton>
    </VStack>
  );
}

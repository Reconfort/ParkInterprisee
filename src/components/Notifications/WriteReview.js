import { VStack, Text, FormControl, Select } from "native-base";
import React, { useState } from "react";
import theme from "../../Theme/Theme";
import { AntDesign } from "@expo/vector-icons";

export default function WriteReview() {
  const [ratings, setRatings] = useState("");
  return (
    <VStack space={6}>
      <FormControl>
        <FormControl.Label _text={{ fontSize: "12px", fontWeight: "bold" }}>
          Rating
        </FormControl.Label>
        <Select
          bg={theme.lighterDark}
          borderWidth={0}
          rounded={5}
          py={3}
          _selectedItem={{
            bg: theme.lighterDark,
            endIcon: <AntDesign name="checkcircleo" size={3} />,
          }}
          placeholder="Choose Rate"
          value={ratings}
          onValueChange={(e) => setRatings(e)}
        >
          <Select.Item label="Poor" value="1" />
          <Select.Item label="Fair" value="2" />
          <Select.Item label="Good" value="3" />
          <Select.Item label="Excellent" value="4" />
        </Select>
      </FormControl>
    </VStack>
  );
}

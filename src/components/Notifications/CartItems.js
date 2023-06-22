import { View } from "react-native";
import React from "react";
import { Box, HStack, Pressable, Center, Text } from "native-base";

// import { SwiperListView } from "react-native-swipe-list-view";
import { SwiperListView } from "react-native-swipe-list-view";

import products from "../data/ProductData";
import { EvilIcons } from "@expo/vector-icons";
import theme from "../../Theme/Theme";

// const Swiper = () => {
//   <SwiperListView
//     rightOpenValue={-50}
//     previewRowKey={0}
//     previewOpenValue={-40}
//     previewOpenDelay={3000}
//     data={products.slice(0, 2)}
//     renderHiddenItem={renderHiddenIterms}
//     renderItem={renderIterms}
//     showVerticalScrollIndicator={false}
//   />;
// };
const Swiper = () => (
  <SwiperListView
    rightOpenValue={-50}
    previewRowKey={0}
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products.slice(0, 2)}
    renderHiddenItem={renderHiddenIterms}
    renderItem={renderIterms}
    showVerticalScrollIndicator={false}
  />
);

// const renderIterms = (data) => {
//   <Pressable>
//     <Box ml={6} mb={3}>
//       <HStack
//         alignItems="center"
//         bg={theme.light}
//         shadow={1}
//         rounded={10}
//         overflow="hidden"
//       >
//         <Text>Iterm</Text>
//       </HStack>
//     </Box>
//   </Pressable>;
// };

const renderIterms = (data) => (
  <Pressable>
    <Box ml={6} mb={3}>
      <HStack
        alignItems="center"
        bg={theme.light}
        shadow={1}
        rounded={10}
        overflow="hidden"
      >
        <Text>Iterm</Text>
      </HStack>
    </Box>
  </Pressable>
);

//Hidden
// const renderHiddenIterms = () => {
//   <Pressable
//     w={50}
//     roundedTopRight={10}
//     roundedBottomRight={10}
//     h="88%"
//     ml="auto"
//     justifyContent="center"
//     bg={theme.primary}
//   >
//     <Center alignItems="center" space={2}>
//       <EvilIcons name="trash" size={24} color={theme.light} />
//       <HStack
//         alignItems="center"
//         bg={theme.light}
//         shadow={1}
//         rounded={10}
//         overflow="hidden"
//       >
//         <Center w="25%" bg={theme.lightDark}></Center>
//       </HStack>
//     </Center>
//   </Pressable>;
// };

const renderHiddenIterms = () => (
  <Pressable
    w={50}
    roundedTopRight={10}
    roundedBottomRight={10}
    h="88%"
    ml="auto"
    justifyContent="center"
    bg={theme.primary}
  >
    <Center alignItems="center" space={2}>
      <EvilIcons name="trash" size={24} color={theme.light} />
      <HStack
        alignItems="center"
        bg={theme.light}
        shadow={1}
        rounded={10}
        overflow="hidden"
      >
        <Center w="25%" bg={theme.lightDark}></Center>
      </HStack>
    </Center>
  </Pressable>
);

export default function CartItems() {
  return (
    <Box mr={6}>
      <Text>Cart Items</Text>
      <Swiper />
    </Box>
  );
}

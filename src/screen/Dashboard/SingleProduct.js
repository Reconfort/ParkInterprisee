import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  HStack,
  Box,
  ScrollView,
  Image,
  Heading,
  Spacer,
  Text,
} from "native-base";
import theme from "../../Theme/Theme";
import Rating from "../../components/Home/Rating";
import NumericInput from "react-native-numeric-input";
import SinglButton from "./../../components/SinglButton";
import ProductReview from "./../../components/ProductReview";
import Comment from "../../components/Notifications/Comment";
import Messages from "../../components/Notifications/Messages";
import { useNavigation } from "@react-navigation/native";

export default function SingleProduct() {
  const navigation = useNavigation();
  const route = useRoute();
  const { productId } = route.params;

  const [value, setValue] = useState(0);
  return (
    <Box safeArea flex={1} bg={theme.light}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../../assets/Image/profile.png")}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
          rounded="15"
          bg={theme.light}
        />
        <Heading bold fontSize={15} mb={2} mt={6} lineHeight={22}>
          Fresh Carrots
        </Heading>
        <Rating value={4} />
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={15}
            minValue={1}
            borderColor={theme.light}
            rounded
            textColor={theme.dark}
            iconStyle={{ Colors: theme.secondary }}
            rightButtonBackgroundColor={theme.secondary}
            leftButtonBackgroundColor={theme.secondary}
          />
          <Spacer />
          <Heading bold fontSize={20} color={theme.secondary}>
            $ 400
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          If you are using NativeBase for a server side rendering app like
          Next.js, you have to pass isSSR prop. This will resolve the responsive
          props to media queries on the server side and fix an issue with
          jumping UI on hydration. Add colorModeManager (Optional) If you want
          to do something with the color modes in your app, you can use
          colorModeManager Prop of NativeBaseProvider to achieve it. In the
          example below, we show how to store the active ColorMode in an async
          storage, so it can be consistent all around your app.
        </Text>
        <SinglButton
          bg={theme.secondary}
          theme={theme.light}
          mt={10}
          onPress={() => navigation.navigate("Cart")}
        >
          ADD TO CART
        </SinglButton>
        {/* Review */}
        <ProductReview />
        <Comment />
        {/* <Messages
          color={theme.dark}
          size={12}
          children={"Please login to write reviews."}
        /> */}
      </ScrollView>
    </Box>
  );
}

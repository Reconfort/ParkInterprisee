import {
  Flex,
  ScrollView,
  Text,
  Pressable,
  Image,
  Box,
  Heading,
} from "native-base";
import React from "react";
import products from "../data/ProductData";
import theme from "../../Theme/Theme";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";

export default function Products() {
  const navigation = useNavigation();
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex flexWrap="wrap" direction="row" justifyContent="space-between">
        {products.map((product) => (
          <Pressable
            key={product.id}
            w="47%"
            bg={theme.light}
            rounded="md"
            shadow={2}
            pt={1}
            my={3}
            pb={2}
            overflow="hidden"
            onPress={() =>
              navigation.navigate("SingleProduct", { productId: product.id })
            }
          >
            <Image
              source={{ uri: product.image }}
              alt={product.title}
              w="full"
              h={24}
              resizeMode="contain"
            />
            <Box px={4} py={1}>
              <Heading size="sm" bold color={theme.dark}>
                {product.price} RWF
              </Heading>
              <Text fontSize={10} fontWeight={400} mt={1} isTruncated w="full">
                {product.title}
              </Text>
              {/* Rating */}
              <Rating value={product.rating.rate} />
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}

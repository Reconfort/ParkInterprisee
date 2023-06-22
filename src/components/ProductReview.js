import { Box, Heading, Text } from "native-base";
import React from "react";
import theme from "../Theme/Theme";
import Rating from "./Home/Rating";
import Messages from "../components/Notifications/Messages";
import WriteReview from "../components/Notifications/WriteReview";

export default function ProductReview() {
  return (
    <Box my={9}>
      {/* <Heading bold fontSize={15} mb={2}>
        Review
      </Heading> */}
      {/* If there is no review */}
      {/* <Messages
        color={theme.primary}
        bg={theme.lighterDark}
        size={12}
        children={"NO REVIEW"}
        bold
      /> */}

      {/* If there is review */}
      <Box p={3} bg={theme.lighterDark} mt={5} rounded={5}>
        <Heading fontSize={15} mb={2} color={theme.dark}>
          John Doe
        </Heading>
        <Rating value={4} />
        <Text my={2} fontSize={11}>
          Jun 12 2023
        </Text>
        <Messages
          color={theme.dark}
          bg={theme.light}
          size={10}
          children={
            "If you are using NativeBase for a server side rendering app like Next.js, you have to pass isSSR prop. "
          }
        />
      </Box>

      {/* Write Message */}
      <Box mt={6}>
        <Heading fontSize={15} bold color={theme.dark}>
          REVIEW THIS PRODUCT
        </Heading>
        <WriteReview />
      </Box>
    </Box>
  );
}

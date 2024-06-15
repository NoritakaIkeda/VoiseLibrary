import { Box, Text } from "@chakra-ui/react";

export const VoiceButton = () => {
  return (
    <Box
      w="100px"
      h="100px"
      bgColor="#FF5C67"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="14%"
      cursor="pointer"
    >
      <Text color={"white"} fontWeight={"bold"}>
        あやや
      </Text>
    </Box>
  );
};

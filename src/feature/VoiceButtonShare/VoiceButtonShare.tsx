import { Box, Text } from "@chakra-ui/react";

type Props = {
  name: string;
  id: string;
  hasNotification?: boolean; // optional prop to control notification badge visibility
  handleCopy: (text: string) => void;
};

export const VoiceButtonShare = ({
  name,
  id,
  hasNotification,
  handleCopy,
}: Props) => {
  return (
    <Box position="relative" display="inline-block">
      {hasNotification && (
        <Box
          position="absolute"
          top="-4px"
          right="-4px"
          bgColor="#E5E5E5"
          w="16px"
          h="16px"
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="white" fontSize="10px" fontWeight="bold"></Text>
        </Box>
      )}

      <Box
        boxShadow="md"
        w={{ base: "80px", md: "100px" }}
        h={{ base: "80px", md: "100px" }}
        bgColor={"#F5F5F5"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="14%"
        onClick={() => handleCopy(`http://localhost:5173/${id}`)}
        cursor="pointer"
        _hover={{ bgColor: "#E5E5E5" }}
      >
        <Text
          color={"#3E3E3E"}
          fontWeight={"bold"}
          p={"15px"}
          textAlign={"center"}
          fontSize={{ base: "10px", md: "14px" }}
        >
          {name}
        </Text>
      </Box>
    </Box>
  );
};

import { Box, Checkbox, Text } from "@chakra-ui/react";
import { useId } from "react";

type Props = {
  name: string;
  audioResourcePath: string;
};

export const VoiceButtonCheckBox = ({ name }: Props) => {
  const id = useId();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <label htmlFor={id} style={{ cursor: "pointer" }}>
        <Box
          boxShadow="md"
          w={{ base: "80px", md: "100px" }}
          h={{ base: "80px", md: "100px" }}
          bgColor="#FFB3B8"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="14%"
          mb={2} // 下に余白を追加
        >
          <Text
            color={"white"}
            fontWeight={"bold"}
            p={"15px"}
            textAlign={"center"}
            fontSize={{ base: "10px", md: "14px" }}
          >
            {name}
          </Text>
        </Box>
      </label>
      <Checkbox id={id} value={name} />
    </Box>
  );
};

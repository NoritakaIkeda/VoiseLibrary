import { Box, Text } from "@chakra-ui/react";
import { useRef } from "react";

type Props = {
  name: string;
  audioResourcePath: string;
};

export const VoiceButton = ({ name, audioResourcePath }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play();
    }
  };
  return (
    <Box>
      <Box
        boxShadow="md"
        w={{ base: "80px", md: "100px" }}
        h={{ base: "80px", md: "100px" }}
        bgColor="#FF5C67"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="14%"
        onClick={playAudio}
        cursor="pointer"
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
      {/* オーディオ要素 */}
      <audio ref={audioRef} src={audioResourcePath} />
    </Box>
  );
};

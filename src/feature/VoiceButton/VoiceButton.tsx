import { Box, Text } from "@chakra-ui/react";
import { useRef } from "react";

export const VoiceButton = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  return (
    <Box>
      <Box
        w="100px"
        h="100px"
        bgColor="#FF5C67"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="14%"
        onClick={playAudio}
        cursor="pointer"
      >
        <Text color={"white"} fontWeight={"bold"}>
          あやや
        </Text>
      </Box>
      {/* オーディオ要素 */}
      <audio
        ref={audioRef}
        src="/Q-VTuber-Shorts_VFROAk8WS4g_00_00_10_00_00_14_part.mp3"
      />
    </Box>
  );
};

import { Box, Flex } from "@chakra-ui/react";
import { Footer, Header, VoiceButton } from "../../feature";
import data from "../../data.json";

type Props = { buttonId: string };

export const ShareButtonPage = ({ buttonId }: Props) => {
  const filteredData = data.filter((item) => item.id === buttonId);

  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Box
        px={{ base: "5%", md: "10vw" }}
        py="20px"
        flex="1"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {filteredData.map((item) => (
          <VoiceButton
            key={item.id}
            name={item.name}
            audioResourcePath={item.audioResourcePath}
          />
        ))}
      </Box>
      <Footer />
    </Flex>
  );
};

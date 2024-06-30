import { Box, Flex } from "@chakra-ui/react";
import { ContentTabs, Footer, Header } from "../../feature";

export const TopPage = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Box
        px={{ base: "5%", md: "10vw" }}
        py={"20px"}
        flex="1"
        display="flex"
        flexDirection="column"
      >
        <ContentTabs />
      </Box>
      <Footer />
    </Flex>
  );
};

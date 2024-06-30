import { createLazyFileRoute } from "@tanstack/react-router";
import { ContentTabs, Footer, Header } from "../feature";
import { Box, Flex } from "@chakra-ui/react";

export const Route = createLazyFileRoute("/")({
  component: () => (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Box px={{ base: "5%", md: "10vw" }} py={"20px"}>
        <ContentTabs />
      </Box>
      <Footer />
    </Flex>
  ),
});

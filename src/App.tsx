import { Box, HStack } from "@chakra-ui/react";
import {
  ContactUsButton,
  ContentTabs,
  Footer,
  Header,
  TweetButton,
} from "./feature";

function App() {
  return (
    <>
      <Header />
      <Box px={{ base: "5%", md: "10vw" }} py={"20px"}>
        <HStack py={"20px"}>
          <ContactUsButton />
          <TweetButton />
        </HStack>
        <ContentTabs />
      </Box>
      <Footer />
    </>
  );
}

export default App;

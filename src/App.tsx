import { Box } from "@chakra-ui/react";
import { ContactUsButton, ContentTabs, Footer, Header } from "./feature";

function App() {
  return (
    <>
      <Header />
      <Box px={{ base: "5%", md: "10vw" }} py={"20px"}>
        <Box py={"20px"}>
          <ContactUsButton />
        </Box>
        <ContentTabs />
      </Box>
      <Footer />
    </>
  );
}

export default App;

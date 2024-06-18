import { Box } from "@chakra-ui/react";
import { ContentTabs, Footer, Header } from "./feature";

function App() {
  return (
    <>
      <Header />
      <Box px={{ base: "5%", md: "10vw" }} py={"20px"}>
        <ContentTabs />
      </Box>
      <Footer />
    </>
  );
}

export default App;

import { Box } from "@chakra-ui/react";
import { ContentTabs, Header } from "./feature";

function App() {
  return (
    <>
      <Header />
      <Box px={{ base: "5%", md: "20%" }} py={"20px"}>
        <ContentTabs />
      </Box>
    </>
  );
}

export default App;

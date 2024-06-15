import { Box } from "@chakra-ui/react";
import { ContentTabs, Header } from "./feature";

function App() {
  return (
    <>
      <Header />
      <Box px={"20%"} py={"20px"}>
        <ContentTabs />
      </Box>
    </>
  );
}

export default App;

// App.tsx
import { BrowserRouter as Router } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { ContentTabs, Footer, Header } from "./feature";

function App() {
  return (
    <Router>
      <Header />
      <Box px={{ base: "5%", md: "10vw" }} py={"20px"}>
        <ContentTabs />
      </Box>
      <Footer />
    </Router>
  );
}

export default App;

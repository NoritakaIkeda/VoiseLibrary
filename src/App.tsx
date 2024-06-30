// App.tsx
import { BrowserRouter as Router } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { ContentTabs, Footer, Header } from "./feature";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree: routeTree });

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

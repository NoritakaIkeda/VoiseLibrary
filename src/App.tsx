// App.tsx
import { RouterProvider, createRouter } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree: routeTree });

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

import { createLazyFileRoute } from "@tanstack/react-router";

import { TopPage } from "../page";

export const Route = createLazyFileRoute("/")({
  component: () => <TopPage />,
});

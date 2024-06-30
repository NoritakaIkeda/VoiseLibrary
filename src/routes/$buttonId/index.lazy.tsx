import { createLazyFileRoute } from "@tanstack/react-router";
import { ShareButtonPage } from "../../page/ShareButtonPage/ShareButtonPage";

export const Route = createLazyFileRoute("/$buttonId/")({
  component: () => <PostComponent />,
});

function PostComponent() {
  const { buttonId } = Route.useParams();
  return <ShareButtonPage buttonId={buttonId}></ShareButtonPage>;
}

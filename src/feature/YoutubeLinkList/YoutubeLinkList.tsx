import { Link, Text } from "@chakra-ui/react";
import youtubeLink from "../../youtubeLink.json";

export const YoutubeLinkList = () => {
  return (
    <>
      {youtubeLink.map((item, index) => {
        return (
          <Link
            href={item.youTubeVideoUrl}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text>{item.youTubeVideoTitle}</Text>
          </Link>
        );
      })}
    </>
  );
};

import { Link, Image, Tooltip } from "@chakra-ui/react";

export const TweetButton = () => {
  return (
    <Tooltip hasArrow label="X(Twitter)でポスト" bg="gray.300" color="black">
      <Link
        href={
          "https://twitter.com/intent/tweet?text=" +
          "🚨🐈パト猫ボタンで音声を聴こう！%0A" +
          "www.patonekobutton.com"
        }
        target="_blank"
        rel="noopener noreferrer"
        p={"5px"}
      >
        <Image src={"/logo-black.png"} alt={"twitter"} w={"20px"} />
      </Link>
    </Tooltip>
  );
};

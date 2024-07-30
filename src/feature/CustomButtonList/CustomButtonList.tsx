import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { VoiceButton } from "../VoiceButton";
import { useEffect, useState } from "react";

interface DataItem {
  id: string;
  name: string;
  audioResourcePath: string;
  youTubeVideoUrl?: string; // YouTubeのURLがオプションである場合
}

type Props = {
  isActive: boolean;
};

export const CustomButtonList = ({ isActive }: Props) => {
  const [storedItems, setStoredItems] = useState<DataItem[]>([]);

  useEffect(() => {
    const items = localStorage.getItem("checkedItems");
    if (items) {
      setStoredItems(JSON.parse(items));
    }
  }, [isActive]);

  if (storedItems.length === 0) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p="50px"
      >
        <Image
          src={"/sleep_animal_cat.png"}
          alt={"twitter"}
          w={"300px"}
          opacity={"80%"}
        />
        <Text textAlign="center" mt={2} color={"gray"}>
          <Text as="span" fontWeight="bold">
            ボイス一覧→会話デッキを編集
          </Text>
          から、自分だけの会話デッキを選んで設定することができます
        </Text>
      </Box>
    );
  }

  return (
    <>
      <></>
      <Grid
        templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(7, 1fr)" }}
        gap={6}
      >
        {storedItems.map((item, index) => (
          <GridItem key={index}>
            <VoiceButton
              name={item.name}
              audioResourcePath={item.audioResourcePath}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

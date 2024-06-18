import { Grid, GridItem } from "@chakra-ui/react";
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
    return null;
  }

  return (
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
  );
};

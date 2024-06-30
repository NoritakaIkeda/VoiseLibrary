import { Button, Grid, GridItem } from "@chakra-ui/react";
import { VoiceButton } from "../../VoiceButton";
import data from "../../../data.json";

type ViewButtonListProps = {
  setMode: React.Dispatch<React.SetStateAction<"view" | "edit" | "share">>;
};

export const ViewButtonList = ({ setMode }: ViewButtonListProps) => {
  return (
    <>
      <Button
        my={"10px"}
        mb={"20px"}
        onClick={() => setMode("edit")}
        rounded={"50"}
        bgColor={"#F5F5F5"}
        color={"#3E3E3E"}
      >
        会話デッキを編集
      </Button>
      <Button
        mx={"10px"}
        my={"10px"}
        mb={"20px"}
        onClick={() => setMode("share")}
        rounded={"50"}
        bgColor={"#F5F5F5"}
        color={"#3E3E3E"}
      >
        共有する
      </Button>
      <Grid
        templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(7, 1fr)" }}
        gap={6}
      >
        {data.map((item, index) => {
          return (
            <GridItem key={index}>
              {index <= 5 ? (
                <VoiceButton
                  name={item.name}
                  audioResourcePath={item.audioResourcePath}
                  hasNotification={true}
                />
              ) : (
                <VoiceButton
                  name={item.name}
                  audioResourcePath={item.audioResourcePath}
                />
              )}
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

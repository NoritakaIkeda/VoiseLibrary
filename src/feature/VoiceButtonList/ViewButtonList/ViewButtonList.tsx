import { Button, Grid, GridItem } from "@chakra-ui/react";
import { VoiceButton } from "../../VoiceButton";
import data from "../../../data.json";
import { CopyIcon, EditIcon } from "@chakra-ui/icons";

type ViewButtonListProps = {
  setMode: React.Dispatch<React.SetStateAction<"view" | "edit" | "share">>;
};

export const ViewButtonList = ({ setMode }: ViewButtonListProps) => {
  return (
    <>
      <Button
        mr={"10px"}
        my={"10px"}
        mb={"20px"}
        onClick={() => setMode("share")}
        rounded={"50"}
        bgColor={"#F5F5F5"}
        color={"#3E3E3E"}
      >
        <CopyIcon mx={"5px"} />
        共有する
      </Button>
      <Button
        my={"10px"}
        mb={"20px"}
        onClick={() => setMode("edit")}
        rounded={"50"}
        bgColor={"#F5F5F5"}
        color={"#3E3E3E"}
      >
        <EditIcon mx={"5px"} />
        会話デッキを編集
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

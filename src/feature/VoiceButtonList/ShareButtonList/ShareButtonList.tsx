import { Button, Grid, GridItem } from "@chakra-ui/react";
import data from "../../../data.json";
import { VoiceButtonShare } from "../../VoiceButtonShare";

type Props = {
  setMode: React.Dispatch<React.SetStateAction<"view" | "edit" | "share">>;
  handleCopy: (text: string) => void;
};

export const ShareButtonList = ({ setMode, handleCopy }: Props) => {
  return (
    <>
      <Button
        my={"10px"}
        mb={"20px"}
        onClick={() => setMode("view")}
        rounded={"50"}
        bgColor={"#F5F5F5"}
        color={"#3E3E3E"}
      >
        音声一覧へ戻る
      </Button>
      <Grid
        templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(7, 1fr)" }}
        gap={6}
      >
        {data.map((item, index) => {
          return (
            <GridItem key={index}>
              {index <= 5 ? (
                <VoiceButtonShare
                  name={item.name}
                  id={item.id}
                  hasNotification={true}
                  handleCopy={handleCopy}
                />
              ) : (
                <VoiceButtonShare
                  name={item.name}
                  id={item.id}
                  handleCopy={handleCopy}
                />
              )}
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

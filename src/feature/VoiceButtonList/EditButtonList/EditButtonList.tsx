import { Box, Button, CheckboxGroup, Grid, GridItem } from "@chakra-ui/react";
import { VoiceButtonCheckBox } from "../../VoiceButtonCheckBox";
import data from "../../../data.json";

type EditButtonListProps = {
  setMode: React.Dispatch<React.SetStateAction<"view" | "edit" | "share">>;
  checkedItems: string[];
  handleCheckboxChange: (value: never[]) => void;
  handleSubmit: () => void;
};

export const EditButtonList = ({
  setMode,
  checkedItems,
  handleCheckboxChange,
  handleSubmit,
}: EditButtonListProps) => {
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
        保存せずにやめる
      </Button>
      <Grid
        templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(7, 1fr)" }}
        gap={6}
      >
        <CheckboxGroup
          colorScheme="green"
          value={checkedItems}
          onChange={handleCheckboxChange}
        >
          {data.map((item, index) => {
            return (
              <GridItem key={index}>
                <VoiceButtonCheckBox
                  name={item.name}
                  audioResourcePath={item.audioResourcePath}
                />
              </GridItem>
            );
          })}
        </CheckboxGroup>
      </Grid>
      <Box position="fixed" bottom="70px" right="150px">
        <Button
          colorScheme="teal"
          boxShadow="lg"
          rounded={"50"}
          w={"200px"}
          h={"70px"}
          onClick={handleSubmit}
        >
          会話デッキに保存
        </Button>
      </Box>
    </>
  );
};

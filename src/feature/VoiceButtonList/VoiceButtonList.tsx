import { Grid, GridItem } from "@chakra-ui/react";
import data from "../../data.json";
import { VoiceButton } from "../VoiceButton";

export const VoiceButtonList = () => {
  return (
    <>
      <Grid
        templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(7, 1fr)" }}
        gap={6}
      >
        {data.map((item, index) => {
          return (
            <GridItem key={index}>
              <VoiceButton
                name={item.name}
                audioResourcePath={item.audioResourcePath}
              />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

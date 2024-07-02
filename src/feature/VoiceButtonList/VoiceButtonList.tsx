import {
  Box,
  Button,
  CheckboxGroup,
  Grid,
  GridItem,
  useToast,
} from "@chakra-ui/react";
import data from "../../data.json";
import { VoiceButton } from "../VoiceButton";
import { useEffect, useState } from "react";
import { VoiceButtonCheckBox } from "../VoiceButtonCheckBox";

export const VoiceButtonList = () => {
  const [isEdit, setIsEdit] = useState(true);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const handleCheckboxChange = (value: never[]) => {
    setCheckedItems(value);
  };
  const toast = useToast();

  useEffect(() => {
    const storedItems = localStorage.getItem("checkedItems");
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);
      const names = parsedItems.map((item: { name: string }) => item.name);
      setCheckedItems(names);
    }
  }, [isEdit]);

  const handleSubmit = () => {
    const selectedItems = data.filter((item) =>
      checkedItems.includes(item.name)
    );
    localStorage.setItem("checkedItems", JSON.stringify(selectedItems));
    toast({
      title: "会話デッキに保存が完了しました",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setIsEdit(!isEdit);
  };

  return (
    <>
      {isEdit ? (
        <>
          <Button
            my={"10px"}
            mb={"20px"}
            onClick={() => setIsEdit(!isEdit)}
            rounded={"50"}
            bgColor={"#F5F5F5"}
            color={"#3E3E3E"}
          >
            会話デッキを編集
          </Button>
          <Grid
            templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(7, 1fr)" }}
            gap={6}
          >
            {data.map((item, index) => {
              return (
                <GridItem key={index}>
                  {index <= 3 ? (
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
      ) : (
        <>
          <Button
            my={"10px"}
            mb={"20px"}
            onClick={() => setIsEdit(!isEdit)}
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
      )}
    </>
  );
};

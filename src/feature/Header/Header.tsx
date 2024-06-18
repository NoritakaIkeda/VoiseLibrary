import {
  Box,
  Link,
  HStack,
  VStack,
  Image,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import hogeImage from "../../asset/pato_lamp_on_red.png";
import data from "../../data.json";
import { ContactUsButton } from "../ContactUsButton";
import { TweetButton } from "../TweetButton";

export const Header = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {isMobile ? (
        <VStack spacing={4} alignItems="stretch" w="100%" p={4}>
          <HStack p={"20px"} alignItems="flex-end">
            <Link
              href={"/"}
              _hover={{ textDecoration: "none", color: "inherit" }}
            >
              <HStack h={"30px"}>
                <Image src={hogeImage} w={"30px"} />
                <Heading fontSize={"25px"} color={"#222222"}>
                  パト猫ボタン
                </Heading>
              </HStack>
            </Link>
            <Text fontSize={"12px"}>現在{data.length}個</Text>
          </HStack>
          <HStack px={"20px"}>
            <ContactUsButton />
            <TweetButton />
          </HStack>
        </VStack>
      ) : (
        <HStack justifyContent={"space-between"} w="100%" p={4}>
          <HStack p={"20px"} alignItems="flex-end">
            <Link
              href={"/"}
              _hover={{ textDecoration: "none", color: "inherit" }}
            >
              <HStack h={"30px"}>
                <Image src={hogeImage} w={"30px"} />
                <Heading fontSize={"25px"} color={"#222222"}>
                  パト猫ボタン
                </Heading>
              </HStack>
            </Link>
            <Text fontSize={"12px"}>現在{data.length}個</Text>
          </HStack>
          <HStack p={"20px"}>
            <ContactUsButton />
            <TweetButton />
          </HStack>
        </HStack>
      )}
      <Box width="100%" height="1px" bg="gray.200" my={"4px"} />
    </>
  );
};

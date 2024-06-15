import { Box, Link, HStack, Image, Heading, Text } from "@chakra-ui/react";
import hogeImage from "../../asset/pato_lamp_on_red.png";

export const Header = () => {
  return (
    <>
      <HStack p={"20px"} alignItems="flex-end">
        <Link href={"/"} _hover={{ textDecoration: "none", color: "inherit" }}>
          <HStack h={"30px"}>
            <Image src={hogeImage} w={"30px"} />
            <Heading fontSize={"25px"} color={"#222222"}>
              パト猫ボタン
            </Heading>
          </HStack>
        </Link>
        <Text fontSize={"12px"}>現在100個</Text>
      </HStack>
      <Box width="100%" height="1px" bg="gray.200" my={"4px"} />
    </>
  );
};

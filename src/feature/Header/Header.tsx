import { Box, Link, HStack, Image, Heading } from "@chakra-ui/react";
import hogeImage from "../../asset/pato_lamp_on_red.png";

export const Header = () => {
  return (
    <>
      <Link href={"/"} _hover={{ textDecoration: "none", color: "inherit" }}>
        <HStack p={"20px"}>
          <Image src={hogeImage} w={"40px"} />
          <Heading fontSize={"25px"} color={"#222222"}>
            パト猫ボタン
          </Heading>
        </HStack>
      </Link>
      <Box width="100%" height="1px" bg="gray.200" my={"4px"} />
    </>
  );
};

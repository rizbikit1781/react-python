import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import CreateUser from "./CreateUser";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW='full' px={0}>
      <Box  px={10} py={4} borderRadius={5} bg={useColorModeValue("gray.200","gray.700")}>
        <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
          {/*Left Side*/}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={3}
            display={{ base: "none", sm: "flex" }}
          >
            <img src="/logo.svg" alt="logo" width={50} height={50} />
            <Text fontSize={"34px"} fontWeight={600} ml={4}>Paradon Meeanan</Text>
            
          </Flex>
          {/*Right Side*/}
          <Flex gap={3} alignItems={"center"}>
            <Text
              fontSize={"lg"}
              fontWeight={500}
              display={{ base: "none", md: "block" }}
            >
              Yo! This is Paradon Meeanan
            </Text>

            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <FaMoon /> : <IoMdSunny size={20}/>}
            </Button>
            <CreateUser />
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Navbar;

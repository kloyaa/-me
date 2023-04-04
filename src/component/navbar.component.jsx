import React from "react";
import { chakra } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai"
import { Box, Button, CloseButton, Flex, HStack, IconButton, useColorModeValue, useDisclosure, VStack } from "@chakra-ui/react";
import { useHistory, useLocation } from "react-router-dom";

export const Navbar = () => {
    const history = useHistory();
    const bg = useColorModeValue("gray.50", "gray.800");
    const mobileNav = useDisclosure();
    return (
      <React.Fragment>
        <chakra.header
          bg={bg}
          w="full"
          px={{  base: 2,  sm: "14", md: "60" }}
          py={4}
          shadow="md"
          borderBottom={"1px"}
          borderColor={"blackAlpha.300"}
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
              <chakra.a
                href="/"
                title="Choc Home Page"
                display="flex"
                alignItems="center"
              >
              </chakra.a>
              <chakra.h1
                onClick={() => history.push("/")}
                fontSize="xl"
                fontWeight="medium"
                ml="2">
                KOLYA
              </chakra.h1>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}
                color="brand.500"
                display={{
                  base: "none",
                  md: "inline-flex",
                }}
              >
                <Button
                    onClick={() => history.push("/services-and-projects")}
                    variant="ghost"
                    fontWeight={"medium"}
                    fontSize={"small"}
                    __css={{
                      _hover: {
                        color: "#319795",
                       }
                    }}
                    shadow={'2xl'}>Services and projects</Button>
                <Button
                variant="ghost"
                fontWeight={"medium"}
                fontSize={"small"}>Blog</Button>
                <Button
                variant="ghost"
                fontWeight={"medium"}
                fontSize={"small"}>Contact</Button>
              </HStack>
              <Box
                display={{
                  base: "inline-flex",
                  md: "none",
                }}
              >
                <IconButton
                  display={{
                    base: "flex",
                    md: "none",
                  }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{
                    color: "inherit",
                  }}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />

                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />

                  <Button w="full" variant="ghost">
                  Services and Projects
                  </Button>
                  <Button w="full" variant="ghost">
                    Blog
                  </Button>
                  <Button w="full" variant="ghost">
                    Contact
                  </Button>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
      </React.Fragment>
    );
};

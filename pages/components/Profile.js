import React from "react";
import {
  Box,
  chakra,
  Flex,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function App(){
  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <SimpleGrid
        columns={[1, null, 2]}
        gap="24px"
        mx="auto"
        textAlign={["left", , "center"]}
      >
        <Box
          bg="white"
          _dark={{ bg: "gray.800" }}
          px={4}
          py={24}
          shadow="base"
          rounded="md"
        >
          <chakra.p
            mb={1}
            fontSize="m"
            fontWeight="bold"
            letterSpacing="wide"
            textTransform="uppercase"
            color="gray.500"
            _dark={{ color: "gray.400" }}
          >
            100 % Work
          </chakra.p>
          <Text
            mb={2}
            fontSize="5xl"
            fontWeight={["bold", "extrabold"]}
            color="gray.900"
            _dark={{ color: "gray.50" }}
            lineHeight="tight"
          >
            
            <chakra.span
              fontSize="2xl"
              fontWeight="medium"
              color="gray.600"
              _dark={{ color: "gray.400" }}
            >
              {" "}
              Work Networking
            </chakra.span>
          </Text>
          <chakra.p
            mb={6}
            fontSize="lg"
            color="gray.600"
            _dark={{ color: "gray.500" }}
          >
            Choose these option if want 100% work to matching
          </chakra.p>
          <Stack
            display={["block", , "flex"]}
            spacing={2}
            justifyContent="center"
            direction={["column", , "row"]}
          >
            <Link
              w={["full", , "auto"]}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              _light={{ color: "white" }}
              bg="green.600"
              _dark={{ bg: "brand.500" }}
              _hover={{
                bg: "brand.700",
                _dark: { bg: "brand.600" },
              }}
            >
              Create Profile
            </Link>
            <Link
              w={["full", , "auto"]}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              color="brand.600"
              bg="white"
              _hover={{
                bg: "brand.50",
              }}
            >
              Chat App
            </Link>
          </Stack>
        </Box>

        <Box
          bg="white"
          _dark={{ bg: "gray.800" }}
          px={4}
          py={24}
          shadow="base"
          rounded="md"
        >
          <chakra.p
            mb={1}
            fontSize="m"
            fontWeight="bold"
            letterSpacing="wide"
            textTransform="uppercase"
            color="gray.500"
            _dark={{ color: "gray.400" }}
          >
            70 % Work and 30% Fun
          </chakra.p>
          <Text
            mb={2}
            fontSize="5xl"
            fontWeight={["bold", "extrabold"]}
            color="gray.900"
            _dark={{ color: "gray.50" }}
            lineHeight="tight"
          >
            
            <chakra.span
              fontSize="2xl"
              fontWeight="medium"
              color="gray.600"
              _dark={{ color: "gray.400" }}
            >
              {" "}
              Work and Fun Networking
            </chakra.span>
          </Text>
          <chakra.p
            mb={6}
            fontSize="lg"
            color="gray.600"
            _dark={{ color: "gray.500" }}
          >
            Choose these option if want 70% work and 30% fun to  matching
          </chakra.p>
          <Stack
            display={["block", , "flex"]}
            spacing={2}
            justifyContent="center"
            direction={["column", , "row"]}
          >
            <Link
              w={["full", , "auto"]}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              _light={{ color: "white" }}
              bg="green.600"
              _dark={{ bg: "brand.500" }}
              _hover={{
                bg: "brand.700",
                _dark: { bg: "brand.600" },
              }}
            >
              Create Profile
            </Link>
            <Link
              w={["full", , "auto"]}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              color="brand.600"
              bg="white"
              _hover={{
                bg: "brand.50",
              }}
            >
              Chat App
            </Link>
          </Stack>
        </Box>

        <Box
          bg="white"
          _dark={{ bg: "gray.800" }}
          px={4}
          py={24}
          shadow="base"
          rounded="md"
        >
          <chakra.p
            mb={1}
            fontSize="m"
            fontWeight="bold"
            letterSpacing="wide"
            textTransform="uppercase"
            color="gray.500"
            _dark={{ color: "gray.400" }}
          >
            50 % Work and 50% Fun
          </chakra.p>
          <Text
            mb={2}
            fontSize="5xl"
            fontWeight={["bold", "extrabold"]}
            color="gray.900"
            _dark={{ color: "gray.50" }}
            lineHeight="tight"
          >
            
            <chakra.span
              fontSize="2xl"
              fontWeight="medium"
              color="gray.600"
              _dark={{ color: "gray.400" }}
            >
              {" "}
              Work and Fun Networking
            </chakra.span>
          </Text>
          <chakra.p
            mb={6}
            fontSize="lg"
            color="gray.600"
            _dark={{ color: "gray.500" }}
          >
            Choose these option if want 50% work and 50 % fun to matching
          </chakra.p>
          <Stack
            display={["block", , "flex"]}
            spacing={2}
            justifyContent="center"
            direction={["column", , "row"]}
          >
            <Link
              w={["full", , "auto"]}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              _light={{ color: "white" }}
              bg="green.600"
              _dark={{ bg: "brand.500" }}
              _hover={{
                bg: "brand.700",
                _dark: { bg: "brand.600" },
              }}
            >
              Create Profile
            </Link>
            <Link
              w={["full", , "auto"]}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              color="brand.600"
              bg="white"
              _hover={{
                bg: "brand.50",
              }}
            >
              Chat App
            </Link>
          </Stack>
        </Box>

        <Box
          bg="white"
          _dark={{ bg: "gray.800" }}
          px={4}
          py={24}
          shadow="base"
          rounded="md"
        >
          <chakra.p
            mb={1}
            fontSize="m"
            fontWeight="bold"
            letterSpacing="wide"
            textTransform="uppercase"
            color="gray.500"
            _dark={{ color: "gray.400" }}
          >
            100 % Fun
          </chakra.p>
          <Text
            mb={2}
            fontSize="5xl"
            fontWeight={["bold", "extrabold"]}
            color="gray.900"
            _dark={{ color: "gray.50" }}
            lineHeight="tight"
          >
            
            <chakra.span
              fontSize="2xl"
              fontWeight="medium"
              color="gray.600"
              _dark={{ color: "gray.400" }}
            >
              {" "}
              Fun Networking
            </chakra.span>
          </Text>
          <chakra.p
            mb={6}
            fontSize="lg"
            color="gray.600"
            _dark={{ color: "gray.500" }}
          >
            Choose these option if want 100% fun to matching
          </chakra.p>
          <Stack
            display={["block", , "flex"]}
            spacing={2}
            justifyContent="center"
            direction={["column", , "row"]}
          >
            <Link
              w={["full", , "auto"]}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              _light={{ color: "white" }}
              bg="green.600"
              _dark={{ bg: "brand.500" }}
              _hover={{
                bg: "brand.700",
                _dark: { bg: "brand.600" },
              }}
            >
              Create Profile
            </Link>
            <Link
              w={["full", , "auto"]}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              color="brand.600"
              bg="white"
              _hover={{
                bg: "brand.50",
              }}
            >
              Chat App
            </Link>
          </Stack>
        </Box>





        

       
      </SimpleGrid>
    </Flex>
  );
};

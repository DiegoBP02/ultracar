import {
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRef } from "react";

export default function Vehicle() {
  const licensePlate = "GHG2131";
  const model = "2020";
  const year = "year@year.com";
  const accessories = ["a1, a2"];

  return (
    <Center py={6}>
      <Box
        maxW={"300px"}
        minW={"300px"}
        w={"full"}
        m={2}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"lg"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box p={6}>
          <Stack spacing={2} align={"center"} mb={5}>
            <Tag borderRadius={"full"}>{licensePlate}</Tag>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {model}
            </Heading>
            <Text color={"gray.500"}>{year}</Text>
            {accessories && accessories.length > 0 ? (
              accessories.map((accessory, index) => (
                <Text color={"gray.500"} key={index}>
                  {accessory}
                </Text>
              ))
            ) : (
              <Text color={"gray.500"}>Nenhum acessório disponível</Text>
            )}
            <Button
              bg={"red.400"}
              color={"white"}
              rounded={"full"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              _focus={{
                bg: "green.500",
              }}
            >
              Criar ordem
            </Button>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}

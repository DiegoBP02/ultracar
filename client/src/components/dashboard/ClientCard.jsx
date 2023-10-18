import {
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  WrapItem,
} from "@chakra-ui/react";
import { useRef } from "react";
import Vehicle from "./Vehicle";

export default function CardWithImage() {
  const name = "name";
  const cpf = "1111111";
  const email = "email@email.com";
  const phone = "111111";
  const address = "address";

  const vehicles = ["", "", ""];

  return (
    <Box>
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
              <Tag borderRadius={"full"}>{cpf}</Tag>
              <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                {name}
              </Heading>
              <Text color={"gray.500"}>{email}</Text>
              <Text color={"gray.500"}>Phone {phone}</Text>
              <Text color={"gray.500"}>Address {address}</Text>
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
                Procurar carros do cliente
              </Button>
            </Stack>
          </Box>
        </Box>
      </Center>
      <Center py={6}>
        {vehicles.map((vehicle, index) => (
          <WrapItem key={index}>
            <Vehicle {...vehicle} />
          </WrapItem>
        ))}
      </Center>
    </Box>
  );
}

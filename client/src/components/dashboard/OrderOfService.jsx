import { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Stack,
  Center,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

export default function Form2() {
  const observations = ["obs1", "obs2"];
  const specificServices = ["ss1", "ss2"];
  const generalServices = ["gs1", "obs2"];
  const situations = ["sit1", "sit2"];
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Ordem de serviço
      </Heading>
      <Center py={6}>
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <FormControl as={GridItem} colSpan={[6, 3]}>
            <FormLabel htmlFor="country" fontSize="sm" fontWeight="md">
              Observações
            </FormLabel>
            <Select
              id="country"
              name="country"
              autoComplete="country"
              placeholder="Selecione uma opção"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            >
              {observations.map((observation, index) => (
                <option key={index}>{observation}</option>
              ))}
            </Select>
            <Select
              id="country"
              name="country"
              autoComplete="country"
              placeholder="Selecione uma opção"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              mt={2}
            >
              {situations.map((situation, index) => (
                <option key={index}>{situation}</option>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <FormControl as={GridItem} colSpan={[6, 3]}>
            <FormLabel htmlFor="country" fontSize="sm" fontWeight="md">
              Serviços específicos
            </FormLabel>
            <Select
              id="country"
              name="country"
              autoComplete="country"
              placeholder="Selecione uma opção"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            >
              {specificServices.map((specificService, index) => (
                <option key={index}>{specificService}</option>
              ))}
            </Select>
            <Select
              id="country"
              name="country"
              autoComplete="country"
              placeholder="Select option"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              mt={2}
            >
              {situations.map((situation, index) => (
                <option key={index}>{situation}</option>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <FormControl as={GridItem} colSpan={[6, 3]}>
            <FormLabel htmlFor="country" fontSize="sm" fontWeight="md">
              Serviços gerais
            </FormLabel>
            <Select
              id="country"
              name="country"
              autoComplete="country"
              placeholder="Select option"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            >
              {generalServices.map((generalService, index) => (
                <option key={index}>{generalService}</option>
              ))}
            </Select>
            <Select
              id="country"
              name="country"
              autoComplete="country"
              placeholder="Select option"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              mt={2}
            >
              {situations.map((situation, index) => (
                <option key={index}>{situation}</option>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Center>
      <Center>
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
          Criar order de serviço
        </Button>
      </Center>
    </>
  );
}

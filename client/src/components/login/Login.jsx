import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import ultracarImg from "../../assets//ultracar.png";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Box>
      <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      <Input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <Alert className="error" status={"error"} mt={2}>
          <AlertIcon />
          {meta.error}
        </Alert>
      ) : null}
    </Box>
  );
};

const LoginForm = () => {
  return (
    <Formik
      validateOnMount={true}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(4, "Nome deve conter no mínimo 4 caracteres")
          .required("Nome é um campo obrigatório"),
        password: Yup.string()
          .min(3, "Senha deve conter no mínimo 3 caracteres")
          .required("Senha é um campo obrigatório"),
      })}
      initialValues={{ name: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        // TODO: if credentials are valid, then redirect to dashboard, otherwise, catch error, finally, setSubmitting to false
        console.log("Submitting form");
      }}
    >
      {({ isValid, isSubmitting }) => (
        <Form>
          <Stack mt={15} spacing={15}>
            <MyTextInput
              label={"Nome"}
              name={"name"}
              type={"name"}
              placeholder={"Admin"}
            />
            <MyTextInput
              label={"Senha"}
              name={"password"}
              type={"password"}
              placeholder={"Senha"}
            />

            <Button type={"submit"} isDisabled={!isValid || isSubmitting}>
              Entrar
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

const Login = () => {
  // TODO: get customer and check if it is present, if it is, redirect to dashboard

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} alignItems={"center"} justifyContent={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Image
            src={ultracarImg}
            boxSize={"200px"}
            alt={"Ultracar Logo"}
            alignSelf={"center"}
          />
          <Heading fontSize={"2xl"} mb={15}>
            Entre na sua conta
          </Heading>
          <LoginForm />
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Login;

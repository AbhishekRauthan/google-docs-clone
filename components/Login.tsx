import supabase from "@utils/index";
import {
  VStack,
  Heading,
  Button,
  ButtonProps,
  Text,
  Input,
} from "@chakra-ui/react";
import CustomIcon from "./CustomIcon";
import { FC, useRef } from "react";

const LoginButton: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Button
      bgColor="green.400"
      _hover={{
        bgColor: "green.600",
        color: "white",
        shadow: "xl",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

const Login = () => {
  const emailInp = useRef<HTMLInputElement>();
  const passInp = useRef<HTMLInputElement>();

  async function signInWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "google",
    });
  }

  async function signInWithEmail() {
    const { user, session, error } = await supabase.auth.signIn({
      email: emailInp.current.value,
      password: passInp.current.value,
    });
  }

  return (
    <>
      <VStack
        as="section"
        display="flex"
        justify="center"
        mx="auto"
        h="90vh"
        w="50%"
        spacing="5"
      >
        <CustomIcon h="56" w="56" color="green.500">
          <path
            fillRule="evenodd"
            fill="currentColor"
            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
            clipRule="evenodd"
          />
        </CustomIcon>
        <Heading as="h1" color="gray.600" fontSize="4xl">
          SupaDocs
        </Heading>
        <LoginButton onClick={signInWithGoogle}>Login with Google</LoginButton>
        <Text as="h4" fontSize="xl" textTransform="capitalize">
          or Login using email
        </Text>
        <VStack mt="6" spacing="6">
          <Input
            variant="flushed"
            type="email"
            placeholder="Email"
            ref={emailInp}
          />
          <Input
            variant="flushed"
            type="password"
            placeholder="Password"
            ref={passInp}
          />
          <LoginButton onClick={signInWithEmail}>Login with Email</LoginButton>
        </VStack>
      </VStack>
    </>
  );
};

export default Login;

import supabase from "@utils/index";
import { VStack, Heading, Text, Box, Stack, useToast } from "@chakra-ui/react";
import CustomIcon from "./CustomIcon";
import Input from "./Input";
import Button from "./Button";
import { useRef } from "react";
import Link from "next/link";
import { css } from "@emotion/css";

const hoverEffect = css`
  ::after {
    display: block;
    content: "";
    border-bottom: solid 3px #48BB78;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  :hover:after {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }
`;

const Login = () => {
  const toast = useToast();
  const toastRef = useRef<string | number>();
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

    if (error) {
      toastRef.current = toast({
        status: "error",
        title: "Error",
        description: "Something went wrong with login! Please try again",
        isClosable: true,
      });
    }
  }

  return (
    <Stack
      h={"100vh"}
      direction="column"
      as="section"
      d="grid"
      placeContent="center"
    >
      <Stack
        as="section"
        display="flex"
        justify="center"
        alignItems="center"
        spacing="8"
        direction={["column", "row"]}
      >
        <VStack spacing="6">
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
          <Button buttonVariant="primary" onClick={signInWithGoogle}>
            Login with Google
          </Button>
        </VStack>
        <Box
          as="span"
          bg="green.400"
          my="auto"
          mx={["0", "30"]}
          w={["100%", "0.5"]}
          h={["0.5", "md"]}
          rounded="xl"
        />

        <VStack spacing="6" pl={{ base: 0, md: "4", lg: "10" }}>
          <Text
            as="h4"
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            textTransform="capitalize"
          >
            or Login using email
          </Text>
          <Input type="email" placeholder="Email" ref={emailInp} w={"120%"} />
          <Input
            type="password"
            placeholder="Password"
            ref={passInp}
            w={"120%"}
          />
          <Button buttonVariant="primary" onClick={signInWithEmail}>
            Login with Email
          </Button>
        </VStack>
      </Stack>

      <Text
        as="h6"
        fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
        mt="7"
        textTransform="capitalize"
        textAlign="center"
      >
        first time using this? then{" "}
        <Text
          as="span"
          display="inline-block"
          bgGradient="linear(to-r, teal.400, green.600)"
          bgClip="text"
          fontWeight="bold"
          className={hoverEffect}
        >
          <Link href="/signup">sign up</Link>
        </Text>
      </Text>
    </Stack>
  );
};

export default Login;

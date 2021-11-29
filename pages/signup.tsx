import { VStack, Heading, useToast, Box, Text } from "@chakra-ui/react";
import Button from "@components/Button";
import CustomIcon from "@components/CustomIcon";
import Input from "@components/Input";
import { useRef } from "react";
import { Session } from "@supabase/supabase-js";
import supabase, { useErrorToast, validateEmail } from "@utils/index";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Link from "next/link";
interface Props {
  session: Session;
}

const SignUp = ({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const toast = useToast();
  const toastRef = useRef<string | number>();
  const emailInp = useRef<HTMLInputElement>();
  const passInp = useRef<HTMLInputElement>();
  const repPassInp = useRef<HTMLInputElement>();

  async function signUpWithEmail() {
    const { user, session, error } = await supabase.auth.signUp({
      email: emailInp.current.value,
      password: passInp.current.value,
    });

    if (error) {
      toastRef.current = useErrorToast(
        toast,
        "Something went wrong with sign up!"
      );
    }
  }

  return (
    <VStack
      height={"100vh"}
      display="grid"
      placeContent="center"
      spacing="5"
      textAlign="center"
    >
      <CustomIcon h="56" w="56" color="green.500" mx="auto">
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

      {session ? (
        <>
          <Heading as="h2" color="gray.600" fontSize="2xl">
            You are already logged in.
          </Heading>
          <Button buttonVariant="primary">
            <Link href="/">Goto main page</Link>
          </Button>
        </>
      ) : (
        <>
          <Input type="email" placeholder="Email" ref={emailInp} />
          <Input type="password" placeholder="Password" ref={passInp} />
          <Input
            type="password"
            placeholder="Confirm Password"
            ref={repPassInp}
          />
          <Box display="flex" justifyContent="center">
            <Button
              display="inline"
              buttonVariant="secondary"
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              p="2"
              onClick={signUpWithEmail}
            >
              Sign Up
            </Button>
          </Box>
          <Box
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text >
              Already a User? Then{" "}
              <Button
                display="inline"
                buttonVariant="secondary"
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                p="2"
              >
                <Link href="/">Login</Link>
              </Button>
            </Text>
          </Box>
        </>
      )}
    </VStack>
  );
};

export default SignUp;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      session: supabase.auth.session(),
    },
  };
};

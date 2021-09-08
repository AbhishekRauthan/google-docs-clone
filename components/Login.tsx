import supabase from "@utils/index";
import { VStack, Heading, Button } from "@chakra-ui/react";
import CustomIcon from "./CustomIcon";

const Login = () => {
  async function signInWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "google",
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
        mt="5"
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
        <Button
          bgColor="green.400"
          onClick={signInWithGoogle}
          _hover={{
            bgColor: "green.600",
            color: "white",
            shadow: "xl"
            
          }}
        >
          Login with Google
        </Button>
      </VStack>
    </>
  );
};

export default Login;

{
  /* <div className="flex flex-col mx-auto h-[90vh] w-[50%] items-center justify-center">
<Icon name="description" color="lightBlue" size="9xl" />
<h1 className="text-gray-500 text-4xl font-mono font-extralight pt-3">
  <span className="font-semibold">Google</span> Docs
</h1>
<Button
  className="w-44 mt-10"
  color="blue"
  buttonType="filled"
  ripple="light"
  onClick={signInWithGoogle}
>
  Login
</Button>
</div> */
}

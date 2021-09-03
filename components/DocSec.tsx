import { Box, Flex,Heading,Text } from "@chakra-ui/react";
import CustomIcon from "./CustomIcon";

const DocSec = () => {
  return (
    <>
      <Box as="section" backgroundColor="white" px="10">
        <Flex
          align="center"
          justify="space-between"
          mx="auto"
          maxW="3xl"
          pt="8"
          pb="14"
        >
          <Heading fontSize="lg" color="gray.500">My Documents</Heading>
          <Text fontSize="lg" color="gray.500">Date created</Text>
          <CustomIcon  w={8} h={8} color="green.500">
            <path
              d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              fill="currentColor"
            />
          </CustomIcon>
        </Flex>
      </Box>
    </>
  );
};

export default DocSec;

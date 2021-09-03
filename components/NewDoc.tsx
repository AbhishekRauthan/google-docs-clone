import { Box, Flex, Heading } from "@chakra-ui/react";
import CustomIcon from "./CustomIcon";

const NewDoc = () => {
  return (
    <>
      <Box as="section" pb="10" px="10" backgroundColor="#F8F9FA">
        <Box mx="auto" maxW="6xl" pl="2.5">
          <Heading color="gray.600" size="lg" py="6">
            Start a New Document
          </Heading>
          <Flex
            align="center"
            justify="center"
            h="md"
            w="sm"
            rounded="md"
            backgroundColor="white"
            border="2px"
            borderColor="transparent"
            _hover={{
              borderColor: "green.400",
              cursor: "pointer",
            }}
          >
            <CustomIcon display="block" color="green.600" h="32" w="32">
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
                fill="currentColor"
              />
            </CustomIcon>
          </Flex>
          <Heading mt={2} ml={2} color="gray.600" size="sm">
            Blank Document
          </Heading>
        </Box>
      </Box>
    </>
  );
};

export default NewDoc;

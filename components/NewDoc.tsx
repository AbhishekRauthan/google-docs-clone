import { useRef } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Heading,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
} from "@chakra-ui/react";
import CustomIcon from "./CustomIcon";

const NewDoc = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const fileName = useRef<HTMLInputElement>();
  const router = useRouter();

  function createFile(fileName: string) {
    console.log(fileName);
    router.push(`edit/${fileName}`);
  }

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
            h="sm"
            w="xs"
            rounded="md"
            backgroundColor="white"
            border="2px"
            borderColor="transparent"
            _hover={{
              borderColor: "green.400",
              cursor: "pointer",
            }}
            onClick={onOpen}
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
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent my="auto">
              <ModalBody py="4" px="3">
                <FormControl>
                  <FormLabel>Enter File name</FormLabel>
                  <Input
                    ref={fileName}
                    placeholder="First name"
                    _focus={{ borderColor: "green" }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        createFile(fileName.current.value);
                        onClose();
                      }
                    }}
                  />
                </FormControl>
                <HStack mt="3" mr="3" spacing="4">
                  <Button
                    colorScheme="green"
                    onClick={() => createFile(fileName.current.value)}
                  >
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </HStack>
              </ModalBody>
            </ModalContent>
          </Modal>
          <Heading mt={2} ml={2} color="gray.600" size="sm">
            Blank Document
          </Heading>
        </Box>
      </Box>
    </>
  );
};

export default NewDoc;

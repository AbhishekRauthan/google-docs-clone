import { FC } from "react";
import Link from "next/link";
import { Flex, Heading, Input } from "@chakra-ui/react";
import CustomIcon from "./CustomIcon";

const Navbar: FC = () => (
  <>
    <Flex
      as="nav"
      position="sticky"
      zIndex={2}
      backgroundColor="white"
      boxShadow="md"
      paddingY="4"
      paddingX="16"
      align="center"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <CustomIcon h="10" w="10" color="green.500" marginRight="5">
        <path
          fillRule="evenodd"
          fill="currentColor"
          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
          clipRule="evenodd"
        />
      </CustomIcon>
      <Heading as="h1" ml="2" size="lg" color="gray.700">
        <Link href="/">SupaDocs</Link>
      </Heading>
      <Flex
        grow={1}
        align="center"
        ml="5"
        px="3"
        py="1"
        backgroundColor="gray.200"
        borderRadius="lg"
        border="2px"
        borderColor="transparent"
        _focusWithin={{
          borderColor: "green.400",
          shadow: "md",
        }}
      >
        <Input
          placeholder="Search"
          flexGrow={1}
          backgroundColor="transparent"
          color="gray.800"
          fontSize="lg"
          border="none"
          focusBorderColor="transparent"
          _placeholder={{
            color: "gray.400",
          }}
          _focus={{
            _placeholder: {
              color: "gray.800",
            },
          }}
        ></Input>
      </Flex>
    </Flex>
  </>
);

export default Navbar;

{
  /* 
<Button
  color="gray"
  buttonType="outline"
  rounded={true}
  iconOnly={true}
  ripple="dark"
  className="inline-flex ml-5 md:ml-20 h-20 w-20 border-0"
>
  <Icon name="apps" size="3xl" color="gray" />
</Button>

{/* <img
  src=""
  loading="lazy"
  className="cursor-pointer h-12 w-12 rounded-full ml-2"
  alt=""
/> */
}

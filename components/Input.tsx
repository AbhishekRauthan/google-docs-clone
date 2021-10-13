import { forwardRef } from "react";
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

const Input = forwardRef<HTMLInputElement, ChakraInputProps>(
  ({ children, ...rest }, ref) => {
    return (
      <ChakraInput
        focusBorderColor="green.400"
        variant="flushed"
        w={"120%"}
        display="block"
        fontSize={{ base: "lg", md: "xl" }}
        ref={ref}
        {...rest}
      >
        {children}
      </ChakraInput>
    );
  }
);

export default Input;

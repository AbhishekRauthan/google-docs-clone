import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import { forwardRef } from "react";

interface ButtonProps extends ChakraButtonProps {
  buttonVariant: "primary" | "secondary";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, buttonVariant, ...rest }, ref) => {
    if (buttonVariant === "primary") {
      return (
        <ChakraButton
          bgColor="green.400"
          _hover={{
            bgColor: "green.600",
            color: "white",
            shadow: "xl",
          }}
          ref={ref}
          {...rest}
        >
          {children}
        </ChakraButton>
      );
    } else {
      return (
        <ChakraButton
          variant="link"
          bgGradient="linear(to-r, green.400, teal.400)"
          border="2px"
          borderColor="transparent"
          bgClip="text"
          _hover={{
            borderColor: "green.400",
          }}
          ref={ref}
          {...rest}
        >
          {children}
        </ChakraButton>
      );
    }
  }
);

export default Button;

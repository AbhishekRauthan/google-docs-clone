import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import { forwardRef } from "react";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...rest }) => {
    return (
      <ChakraButton
        bgColor="green.400"
        _hover={{
          bgColor: "green.600",
          color: "white",
          shadow: "xl",
        }}
        {...rest}
      >
        {children}
      </ChakraButton>
    );
  }
);

export default Button;

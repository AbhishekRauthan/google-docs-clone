import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  Box,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { forwardRef } from "react";

interface ButtonProps extends ChakraButtonProps {
  buttonVariant: "primary" | "secondary";
}

const secondaryButtonStyles = css`
  &:hover + span {
    width: 100%;
  }
`;

const StyledSpan = styled("span")`
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to right, #48bb78, #38b2ac);
  transition: width 300ms ease-in-out 150ms;
  height: 0.1em;
  width: 0;
`;

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
        <Box display="block" w="fit-content" pos={{ md: "relative" }}>
          <ChakraButton
          d="block"
            variant="unstyled"
            className={secondaryButtonStyles}
            {...rest}
          >
            {children}
          </ChakraButton>
          <StyledSpan />
        </Box>
      );
    }
  }
);

export default Button;

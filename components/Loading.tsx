import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/css";

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;

const Loader = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 9999px;
  border-bottom: 2px solid #38b2ac;
  animation: ${spinAnimation} 1s linear infinite;
`;

const Loading = () => {
  return (
    <Box
      maxWidth="container.lg"
      height={"86vh"}
      display="grid"
      placeContent="center"
    >
      <Loader />
    </Box>
  );
};

export default Loading;

import { FC } from "react";
import { Icon, IconProps } from "@chakra-ui/react";

const CustomIcon: FC<IconProps> = ({ children, ...props }) => {
  return (
    <Icon viewBox="0 0 20 20" {...props}>
      {children}
    </Icon>
  );
};

export default CustomIcon;

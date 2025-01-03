import { Button } from "@nextui-org/react";
import React from "react";

const ButtonSpecial = ({ className, innerHtml, onClick, isDisabled, type, onPress }) => {
  return (
    <Button onPress={onPress}  className={`min-w-0 h-auto ${className}`} onClick={onClick} radius="full" isDisabled={isDisabled} type={type}>
      {innerHtml}
    </Button>
  );
};

export default ButtonSpecial;

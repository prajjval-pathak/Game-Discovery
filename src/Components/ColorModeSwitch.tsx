import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";
import React from "react";

export const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch onChange={toggleColorMode} isChecked={colorMode === "dark"} />
      <Text>{colorMode === "light" ? "Light" : "Dark"}</Text>
    </HStack>
  );
};

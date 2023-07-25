import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import React from "react";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface SearchInterface {
  onSubmit: (value: string) => void;
}
export const NavBar = ({ onSubmit }: SearchInterface) => {
  return (
    <HStack padding="10px">
      <Image
        src={logo}
        boxSize="60px
      "
      ></Image>
      <SearchInput onSubmit={(value) => onSubmit(value)} />
      <ColorModeSwitch />
    </HStack>
  );
};

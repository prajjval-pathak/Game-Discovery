import React from "react";
import { Platform } from "../Hooks/UseGames";
import { Icon, HStack } from "@chakra-ui/react";
import {
  FaPlaystation,
  FaWindows,
  FaAndroid,
  FaLinux,
  FaXbox,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons/lib/cjs/iconBase";

interface Props {
  platforms: Platform[];
}

export const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    pc: FaWindows,
    android: FaAndroid,
    linux: FaLinux,
    xbox: FaXbox,
    mac: FaApple,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <HStack marginY="20px">
      {platforms.map((platform, index) => (
        <Icon as={iconMap[platform.slug]} key={index} color="gray.500" />
      ))}
    </HStack>
  );
};

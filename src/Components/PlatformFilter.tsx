import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { PlatformResult } from "../Hooks/usePlatform";
import { Platform } from "../Hooks/UseGames";

const PlatformFilter = () => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Platform
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
          {/* <MenuItem onClick={() => console.log(data)}>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem> */}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformFilter;

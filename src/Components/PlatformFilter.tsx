import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { PlatformResult } from "../Hooks/usePlatform";
import { Platform } from "../Hooks/UseGames";
interface platformProps {
  OnPlatformFilter: (data: PlatformResult | null) => void;
  selectedVal: PlatformResult | null;
}
const PlatformFilter = ({ OnPlatformFilter, selectedVal }: platformProps) => {
  const { data, error, loading } = usePlatform();
  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedVal ? selectedVal.name : "Platform"}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => OnPlatformFilter(null)}>All</MenuItem>
          {data.map((platform) => (
            <MenuItem
              onClick={() => OnPlatformFilter(platform)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
          {/* <MenuItem onClick={() => console.log(data)}>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem> */}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformFilter;

import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { PlatformResult } from "../Hooks/usePlatform";
import useDayaByPlatform from "../Hooks/useDataByPlatform";
// import { Platform } from "../Hooks/UseGames";
interface platformProps {
  OnPlatformFilter: (data: number | null) => void;
  selectedVal: number | null;
}
const PlatformFilter = ({ OnPlatformFilter, selectedVal }: platformProps) => {
  const { data, error, isLoading } = usePlatform();
  const result = useDayaByPlatform(selectedVal);
  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedVal ? result?.name : "Platform"}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => OnPlatformFilter(null)}>All</MenuItem>
          {data?.map((platform) => (
            <MenuItem
              onClick={() => OnPlatformFilter(platform.id)}
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

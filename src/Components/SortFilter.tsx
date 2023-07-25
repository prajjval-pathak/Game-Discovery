import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
interface sortProps {
  onSortFilter: (value: string) => void;
}
const data = [
  { value: "released", label: "Release Date" },
  { value: "-added", label: "Relevance" },
  { value: "-updated", label: "Data Updated" },
  { value: "-name", label: "Name" },
  { value: "-created", label: "Date Created" },
];

const SortFilter = ({ onSortFilter }: sortProps) => {
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Relevance
        </MenuButton>
        <MenuList>
          {data.map((pt, index) => (
            <MenuItem key={index} onClick={() => onSortFilter(pt.value)}>
              {pt.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortFilter;

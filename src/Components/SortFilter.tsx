import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
interface sortProps {
  onSortFilter: (value: string) => void;
  selectedFilter: string;
}
const data = [
  { value: "released", label: "Release Date" },
  { value: "-added", label: "Relevance" },
  { value: "-updated", label: "Data Updated" },
  { value: "-name", label: "Name" },
  { value: "-created", label: "Date Created" },
];

const SortFilter = ({ onSortFilter, selectedFilter }: sortProps) => {
  let obj = data.find((ct) => ct.value === selectedFilter);
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedFilter ? obj?.label : "Relevance"}
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

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface SearchInterface {
  onSubmit: (value: string) => void;
}
const SearchInput = ({ onSubmit }: SearchInterface) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSubmit(ref.current.value);
      }}
      style={{ width: "100%" }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          placeholder="Search"
          ref={ref}
          borderRadius={20}
          variant={"filled"}
        />
        ;
      </InputGroup>
    </form>
  );
};

export default SearchInput;

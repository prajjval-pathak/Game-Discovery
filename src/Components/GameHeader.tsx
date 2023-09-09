import React from "react";
import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import useGenres from "../Hooks/useGeneres";

interface HeaderProps {
  gameQuery: GameQuery;
}
const GameHeader = ({ gameQuery }: HeaderProps) => {
  //Games if nothing selected
  //SelectedGenre + selected Platform
  const { data } = useGenres();
  const result = data?.find((pt) => pt.id === gameQuery.genresID);
  const heading = `${gameQuery.platform ? gameQuery.platform.name : ""} ${
    result?.name
  } Games`;
  return (
    <Heading marginY={5} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeader;

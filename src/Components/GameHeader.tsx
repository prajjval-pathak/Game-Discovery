import React from "react";
import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";

interface HeaderProps {
  gameQuery: GameQuery;
}
const GameHeader = ({ gameQuery }: HeaderProps) => {
  //Games if nothing selected
  //SelectedGenre + selected Platform
  const heading = `${gameQuery.platform ? gameQuery.platform.name : ""} ${
    gameQuery.genres ? gameQuery.genres.name : ""
  } Games`;
  return (
    <Heading marginY={5} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeader;

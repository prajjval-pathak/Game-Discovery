import React from "react";
import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import useGenres from "../Hooks/useGeneres";
import useDataByGenre from "../Hooks/useDataByGenre";
import useDayaByPlatform from "../Hooks/useDataByPlatform";

interface HeaderProps {
  gameQuery: GameQuery;
}
const GameHeader = ({ gameQuery }: HeaderProps) => {
  //Games if nothing selected
  //SelectedGenre + selected Platform
  const result = useDataByGenre(gameQuery.genresID);
  const platResult = useDayaByPlatform(gameQuery.platform);
  const heading = `${gameQuery.platform ? platResult?.name : ""} ${
    result ? result.name : ""
  } Games`;
  return (
    <Heading marginY={5} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeader;

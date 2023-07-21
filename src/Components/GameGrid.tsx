import React, { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import UseGames, { Games } from "../Hooks/UseGames";
import { GameCard } from "./GameCard";
import LoadingSkeleton from "./LoadingSkeleton";
import UseData from "../Hooks/useData";
import useGames from "../Hooks/UseGames";
import { Genres } from "../Hooks/useGeneres";
import { PlatformResult } from "../Hooks/usePlatform";
interface GameCardProps {
  selectedGenre: Genres | null;
  selectedFilter: PlatformResult | null;
}
export const GameGrid = ({ selectedGenre, selectedFilter }: GameCardProps) => {
  const { data, error, loading } = useGames(selectedGenre, selectedFilter);
  const li = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text color="tomato">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing="10"
        overflow="hidden"
        padding="10px"
      >
        {loading &&
          li.map((skeleton) => (
            <LoadingSkeleton key={skeleton}></LoadingSkeleton>
          ))}
        {data.map((res) => (
          <GameCard game={res} key={res.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

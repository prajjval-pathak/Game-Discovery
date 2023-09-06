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
import { GameQuery } from "../App";
interface GameCardProps {
  gameQuey: GameQuery;
}
export const GameGrid = ({ gameQuey }: GameCardProps) => {
  const { data, isLoading, error } = useGames(gameQuey);
  const li = [1, 2, 3, 4, 5, 6];
  if (error) return <Text color="tomato">{error.message}</Text>;
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing="10"
        overflow="hidden"
        paddingY="10px"
      >
        {isLoading &&
          li.map((skeleton) => (
            <LoadingSkeleton key={skeleton}></LoadingSkeleton>
          ))}
        {data?.map((res) => (
          <GameCard game={res} key={res.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

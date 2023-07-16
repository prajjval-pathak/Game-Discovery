import React, { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import UseGames from "../Hooks/UseGames";
import { GameCard } from "./GameCard";

export const GameGrid = () => {
  const { games, error } = UseGames();
  return (
    <>
      {error && <Text color="tomato">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing="10"
        overflow="hidden"
        padding="10px"
      >
        {games.map((res) => (
          <GameCard game={res} key={res.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

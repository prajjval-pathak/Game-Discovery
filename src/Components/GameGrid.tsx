import React, { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { Text } from "@chakra-ui/react";
interface Games {
  id: number;
  name: string;
}
interface gameResponse {
  count: number;
  results: Games[];
}
export const GameGrid = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<gameResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
        console.log(process.env.REACT_APP_Game_Key);
      })
      .catch((error) => setError(error.message));
  }, []);
  return (
    <>
      {error && <Text color="tomato">{error}</Text>}
      <ul>
        {games.map((res) => (
          <li>{res.name}</li>
        ))}
      </ul>
    </>
  );
};

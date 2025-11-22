import { useQuery } from "@tanstack/react-query";
import apiClient from "../Services/api-client";
import { Platform } from "./UseGames";

export interface Publisher {
  id: number;
  name: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  publishers: Publisher[];
}

const apiClientInstance = new apiClient<Game>("/games");

const useGame = (id: string) => {
  return useQuery({
    queryKey: ["games", id],
    queryFn: () => apiClientInstance.get(id),
  });
};

export default useGame;

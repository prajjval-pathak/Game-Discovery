import React, { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";
import UseData from "./useData";
import { Genres } from "./useGeneres";
import { PlatformResult } from "./usePlatform";
import { GameQuery } from "../App";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}
export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gmaeQuery: GameQuery) => {
  return UseData<Games>(
    "/games",
    {
      params: {
        genres: gmaeQuery.genres?.id,
        parent_platforms: gmaeQuery.platform?.id,
        ordering: gmaeQuery.sort,
        search: gmaeQuery.search,
      },
    },
    [gmaeQuery]
  );
};
export default useGames;

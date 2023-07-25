import React, { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";
import UseData from "./useData";
import { Genres } from "./useGeneres";
import { PlatformResult } from "./usePlatform";

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
}

const useGames = (
  selectedGenre: Genres | null,
  selectedFilter: PlatformResult | null,
  sortOption: string | null,
  searchOption: string
) => {
  return UseData<Games>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedFilter?.id,
        ordering: sortOption,
        search: searchOption,
      },
    },
    [selectedGenre?.id, selectedFilter?.id, sortOption, searchOption]
  );
};
export default useGames;

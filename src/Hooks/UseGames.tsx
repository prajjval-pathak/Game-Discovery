import React, { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";
import { FetchResponse } from "./useData";
import { Genres } from "./useGeneres";
import { PlatformResult } from "./usePlatform";
import { GameQuery } from "../App";
import { useInfiniteQuery } from "@tanstack/react-query";
// import { useQuery } from "@chakra-ui/react";

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
  const apiclient = new apiClient<Games>("/games");
  return useInfiniteQuery<FetchResponse<Games>, Error>({
    queryKey: ["games", gmaeQuery],
    queryFn: ({pageParam=1}) =>
      apiclient.getAllData({
        params: {
          genres: gmaeQuery.genresID,
          parent_platforms: gmaeQuery.platform?.id,
          ordering: gmaeQuery.sort,
          search: gmaeQuery.search,
          page:pageParam
        },

      }),
      getNextPageParam:(lastPage,allPages)=>{
        return lastPage.next?allPages.length+1:undefined
      }

    // queryFn: () =>
    //   apiClient
    //     .get<FetchResponse<Games>>("/games", {
    //       params: {
    //         genres: gmaeQuery.genres?.id,
    //         parent_platforms: gmaeQuery.platform?.id,
    //         ordering: gmaeQuery.sort,
    //         search: gmaeQuery.search,
    //       },
    //     })
    //     .then((res) => res.data.results),
  });
};
// return UseData<Games>(
//   "/games",
//   {
//     params: {
//       genres: gmaeQuery.genres?.id,
//       parent_platforms: gmaeQuery.platform?.id,
//       ordering: gmaeQuery.sort,
//       search: gmaeQuery.search,
//     },
//   },
//   [gmaeQuery]
// );

export default useGames;

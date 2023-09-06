// import { useQuery } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import GenreData from "../Data/GenreData";
import UseData, { FetchResponse } from "./useData";
import apiClient from "../Services/api-client";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genres>>("/genres")
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000,
    // initialData: { count: GenreData.length, results: GenreData },
  });
};
export default useGenres;

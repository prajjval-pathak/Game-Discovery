// import { useQuery } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
// import GenreData from "../Data/GenreData";

import apiClient from "../Services/api-client";
import ms from "ms";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const apiclinet = new apiClient<Genres>("/genres");
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiclinet.getData,
    staleTime: ms('1d'),
    // initialData: { count: GenreData.length, results: GenreData },
  });
};
export default useGenres;



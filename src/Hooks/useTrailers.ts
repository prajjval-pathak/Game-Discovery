import { useQuery } from "@tanstack/react-query";
import apiClient from "../Services/api-client";

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

const useTrailers = (gameId: number) => {
  const client = new apiClient<Trailer>(`/games/${gameId}/movies`);
  
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: () => client.getAllData({}), 
  });
};

export default useTrailers;

import { useQuery } from "@tanstack/react-query";
import apiClient from "../Services/api-client";

interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

const useScreenshots = (gameId: number) => {
  const client = new apiClient<Screenshot>(`/games/${gameId}/screenshots`);
  
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () => client.getAllData({}),
  });
};

export default useScreenshots;

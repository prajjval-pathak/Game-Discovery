import React from "react";
import UseData, { FetchResponse } from "./useData";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../Services/api-client";
export interface PlatformResult {
  name: string;
  id: number;
  slug: string;
}

const usePlatform = () => {
  return useQuery({
    queryKey: ["platform"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<PlatformResult>>("/platforms/lists/parents")
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default usePlatform;

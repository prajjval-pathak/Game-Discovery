import React from "react";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../Services/api-client";
export interface PlatformResult {
  name: string;
  id: number;
  slug: string;
}
export interface Platform {
  id: number;
  slug: string;
  name: string;
}

const usePlatform = () => {
  const apiclient = new apiClient<PlatformResult>("/platforms/lists/parents");
  return useQuery({
    queryKey: ["platform"],
    queryFn: apiclient.getData,
    // queryFn: () =>
    //   apiClient
    //     .get<FetchResponse<PlatformResult>>("/platforms/lists/parents")
    //     .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default usePlatform;

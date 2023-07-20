import React from "react";
import UseData from "./useData";
export interface PlatformResult {
  name: string;
  id: number;
  slug: string;
}

const usePlatform = () => UseData<PlatformResult>("/platforms/lists/parents");

export default usePlatform;

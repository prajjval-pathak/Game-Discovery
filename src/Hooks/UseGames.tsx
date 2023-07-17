import React, { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";
import UseData from "./useData";

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

const useGames = () => {
  return UseData<Games>("/games");
};
export default useGames;

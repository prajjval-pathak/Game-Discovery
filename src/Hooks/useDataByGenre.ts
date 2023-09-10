import React from "react";
import useGenres from "./useGeneres";

const useDataByGenre = function (id: number | null) {
  const { data } = useGenres();
  const result = data?.find((ct) => ct.id === id);
  return result;
};

export default useDataByGenre;

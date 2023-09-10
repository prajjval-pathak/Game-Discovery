import React from "react";
import useGenres from "./useGeneres";
import usePlatform from "./usePlatform";

const useDayaByPlatform = function (id: number | null) {
  const { data } = usePlatform();
  const result = data?.find((ct) => ct.id === id);
  return result;
};

export default useDayaByPlatform;

import React from "react";
import useGenres, { Genres } from "../Hooks/useGeneres";
import UseData from "../Hooks/useData";

const GenresList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((datas) => (
        <li key={datas.id}>{datas.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;

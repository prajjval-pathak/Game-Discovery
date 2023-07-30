import GenreData from "../Data/GenreData";
import UseData from "./useData";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}
const useGenres = () => ({ data: GenreData, loading: false, error: false });
export default useGenres;

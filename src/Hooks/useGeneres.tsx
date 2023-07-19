import UseData from "./useData";

export interface Genres {
  id: number;
  name: string;
  image_background:string;
}
const useGenres = () => UseData<Genres>("/genres");
export default useGenres;

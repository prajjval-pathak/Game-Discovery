export interface GameQuery {
  genresID: number | null;
  platform: number | null;
  sort: string;
  search: string;
  page: number;
}

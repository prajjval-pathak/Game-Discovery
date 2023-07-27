import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Heading,
  Show,
} from "@chakra-ui/react";

import { NavBar } from "./Components/NavBar";
import { GameGrid } from "./Components/GameGrid";
import GenresList from "./Components/GenresList";
import { Genres } from "./Hooks/useGeneres";
import { useState } from "react";
import PlatformFilter from "./Components/PlatformFilter";
import { PlatformResult } from "./Hooks/usePlatform";
import SortFilter from "./Components/SortFilter";
import GameHeader from "./Components/GameHeader";
export interface GameQuery {
  genres: Genres | null;
  platform: PlatformResult | null;
  sort: string;
  search: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // const [Genres, setGenres] = useState<Genres | null>(null);
  // const [platformFilter, setPlatformFilter] = useState<PlatformResult | null>(
  //   null
  // );

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar onSubmit={(search) => setGameQuery({ ...gameQuery, search })} />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={"20px"} area="aside">
          <GenresList
            SelectedGenre={gameQuery.genres}
            onSelect={(genres) => setGameQuery({ ...gameQuery, genres })}
          />
        </GridItem>
      </Show>
      <GridItem paddingX={"10px"} area="main">
        <GameHeader gameQuery={gameQuery} />
        <HStack>
          <PlatformFilter
            selectedVal={gameQuery.platform}
            OnPlatformFilter={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortFilter
            onSortFilter={(sort) => {
              setGameQuery({ ...gameQuery, sort });
            }}
          />
        </HStack>
        <GameGrid gameQuey={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;

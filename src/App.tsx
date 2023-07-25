import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
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

function App() {
  const [Genres, setGenres] = useState<Genres | null>(null);
  const [platformFilter, setPlatformFilter] = useState<PlatformResult | null>(
    null
  );
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar onSubmit={(value) => setSearch(value)} />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={"10px"} area="aside">
          <GenresList
            SelectedGenre={Genres}
            onSelect={(data) => setGenres(data)}
          />
        </GridItem>
      </Show>
      <GridItem paddingX={"10px"} area="main">
        <HStack>
          <PlatformFilter
            selectedVal={platformFilter}
            OnPlatformFilter={(data) => setPlatformFilter(data)}
          />
          <SortFilter
            onSortFilter={(value) => {
              console.log(value);
              setSort(value);
            }}
          />
        </HStack>
        <GameGrid
          sortOption={sort}
          selectedGenre={Genres}
          selectedFilter={platformFilter}
          searchOption={search}
        />
      </GridItem>
    </Grid>
  );
}

export default App;

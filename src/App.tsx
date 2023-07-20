import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

import { NavBar } from "./Components/NavBar";
import { GameGrid } from "./Components/GameGrid";
import GenresList from "./Components/GenresList";
import { Genres } from "./Hooks/useGeneres";
import { useState } from "react";
import PlatformFilter from "./Components/PlatformFilter";

function App() {
  const [Genres, setGenres] = useState<Genres | null>(null);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
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
        <PlatformFilter />
        <GameGrid selectedGenre={Genres} />
      </GridItem>
    </Grid>
  );
}

export default App;

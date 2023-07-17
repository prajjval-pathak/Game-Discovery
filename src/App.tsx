import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

import { NavBar } from "./Components/NavBar";
import { GameGrid } from "./Components/GameGrid";
import GenresList from "./Components/GenresList";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenresList />
        </GridItem>
      </Show>
      <GameGrid />
    </Grid>
  );
}

export default App;

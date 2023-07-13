import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

import { NavBar } from "./Components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">main</GridItem>
    </Grid>
  );
}

export default App;

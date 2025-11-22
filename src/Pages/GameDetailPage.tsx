import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../Hooks/useGame";
import ExpandableText from "../Components/ExpandableText";
import GameAttributes from "../Components/GameAttributes";
import GameTrailer from "../Components/GameTrailer";
import GameScreenshots from "../Components/GameScreenshots";

const GameDetailPage = () => {
  const { id } = useParams();
  const { data: game, isLoading, error } = useGame(id!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} padding={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;

import { Card, CardBody, Heading, Image, Text, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import { Games } from "../Hooks/UseGames";
import { PlatformIconList } from "./PlatformIconList";
import { MetaScore } from "./MetaScore";
import Formatter from "../Services/url-format";
import Emoji from "./Emoji";

interface Props {
  game: Games;
}
export const GameCard = ({ game }: Props) => {
  return (
    <Link to={`/games/${game.id}`}>
      <Card borderRadius={10} overflow="hidden">
        <Image src={Formatter(game.background_image)} alt={game.name}></Image>
        <CardBody>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (platform) => platform.platform
              )}
            />
            <MetaScore score={game.metacritic} />
          </HStack>
          <Heading size="xl">{game.name}</Heading>
          <Emoji GameRate={game.rating_top} />
        </CardBody>
      </Card>
    </Link>
  );
};

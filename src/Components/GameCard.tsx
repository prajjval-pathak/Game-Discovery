import { Card, CardBody, Heading, Image, Text, HStack } from "@chakra-ui/react";
import React from "react";
import { Games } from "../Hooks/UseGames";
import { PlatformIconList } from "./PlatformIconList";
import { MetaScore } from "./MetaScore";

interface Props {
  game: Games;
}
export const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius="10px" overflow="hidden">
        <Image src={game.background_image}></Image>
        <CardBody>
          <Heading size="xl">{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (platform) => platform.platform
              )}
            />
            <MetaScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

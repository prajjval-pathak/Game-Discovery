import { Card, CardBody, Heading, Image, Text, HStack } from "@chakra-ui/react";
import React from "react";
import { Games } from "../Hooks/UseGames";
import { PlatformIconList } from "./PlatformIconList";
import { MetaScore } from "./MetaScore";
import Formatter from "../Services/url-format";

interface Props {
  game: Games;
}
export const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card width={"350px"} borderRadius={10} overflow="hidden">
        <Image src={Formatter(game.background_image)}></Image>
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

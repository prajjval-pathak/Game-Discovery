import React, { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { Button, SimpleGrid, Spinner, Stack, Text } from "@chakra-ui/react";
import UseGames, { Games } from "../Hooks/UseGames";
import { GameCard } from "./GameCard";
import LoadingSkeleton from "./LoadingSkeleton";
// import UseData from "../Hooks/useData";
import useGames from "../Hooks/UseGames";
import { Genres } from "../Hooks/useGeneres";
import { PlatformResult } from "../Hooks/usePlatform";
import { GameQuery } from "../App";
import InfiniteScroll from "react-infinite-scroll-component";
interface GameCardProps {
  gameQuey: GameQuery;
}
export const GameGrid = ({ gameQuey }: GameCardProps) => {
  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetching } =
    useGames(gameQuey);
  const li = [1, 2, 3, 4, 5, 6];
  if (error) return <Text color="tomato">{error.message}</Text>;
  return (
    <>
      <InfiniteScroll
        next={fetchNextPage}
        hasMore={hasNextPage || false}
        loader={<Spinner />}
        dataLength={
          data?.pages.reduce((total, page) => total + page.results.length, 0) ||
          0
        }
        endMessage={<Text>You have seen Everything</Text>}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing="10"
          overflow="hidden"
          padding="10px"
        >
          {isLoading &&
            li.map((skeleton) => (
              <LoadingSkeleton key={skeleton}></LoadingSkeleton>
            ))}
          {data?.pages.map((res, index) => (
            <React.Fragment key={index}>
              {res.results.map((card) => (
                <GameCard game={card} key={card.id} />
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
      {/* {hasNextPage && (
        <Button onClick={() => fetchNextPage()}>
          {isFetching ? "Loading" : "Fetch next"}{" "}
        </Button>
      )} */}
    </>
  );
};

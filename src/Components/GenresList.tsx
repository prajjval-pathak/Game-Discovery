import React from "react";
import useGenres, { Genres } from "../Hooks/useGeneres";
import UseData from "../Hooks/useData";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import Formatter from "../Services/url-format";

const GenresList = () => {
  const { data, loading } = useGenres();
  const arr = [1, 2, 3, 4, 5, 5, 77, 878, 78, 8, 45, 353, 545, 54, 54, 5];
  if (loading)
    return (
      <>
        <Spinner />
      </>
    );
  return (
    <ul>
      {data.map((datas) => (
        <List>
          <ListItem key={datas.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"33px"}
                borderRadius={8}
                src={Formatter(datas.image_background)}
              ></Image>
              <Text>{datas.name}</Text>
            </HStack>
          </ListItem>
        </List>
      ))}
    </ul>
  );
};

export default GenresList;

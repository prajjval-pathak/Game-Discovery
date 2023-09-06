import React from "react";
import useGenres, { Genres } from "../Hooks/useGeneres";
import UseData from "../Hooks/useData";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Formatter from "../Services/url-format";

interface GenreProps {
  onSelect: (dat: Genres) => void;
  SelectedGenre: Genres | null;
}
const GenresList = ({ onSelect, SelectedGenre }: GenreProps) => {
  const { data, error, isLoading } = useGenres();
  if (isLoading)
    return (
      <>
        <Spinner />
      </>
    );
  return (
    <>
      <Heading fontSize={"2xl"} marginY={3}>
        Genres
      </Heading>
      <ul>
        {data?.map((datas) => (
          <List key={datas.id}>
            <ListItem paddingY={"5px"}>
              <HStack>
                <Image
                  boxSize={"33px"}
                  borderRadius={8}
                  src={Formatter(datas.image_background)}
                  objectFit={"cover"}
                ></Image>
                <Button
                  fontWeight={
                    datas.id === SelectedGenre?.id ? "bold" : "normal"
                  }
                  display={"inline"}
                  whiteSpace={"normal"}
                  textAlign={"left"}
                  onClick={() => onSelect(datas)}
                  variant="link"
                  fontSize={"lg"}
                >
                  {datas.name}
                </Button>
              </HStack>
            </ListItem>
          </List>
        ))}
      </ul>
    </>
  );
};

export default GenresList;

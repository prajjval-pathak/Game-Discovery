import { Badge } from "@chakra-ui/react";
import React from "react";
interface ScoreProps {
  score: number;
}
export const MetaScore = ({ score }: ScoreProps) => {
  const color = score > 60 ? "green" : "yellow";
  return (
    <Badge padding={2} colorScheme={color}>
      {score}
    </Badge>
  );
};

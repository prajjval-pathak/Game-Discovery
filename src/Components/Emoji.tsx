import React from "react";
import bullseye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import { Image } from "@chakra-ui/react";

interface EmojiProp {
  GameRate: number;
}
const Emoji = ({ GameRate }: EmojiProp) => {
  const data: { [key: number]: CSSModuleClasses } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "thumbsUP", boxSize: "25px" },
    5: { src: bullseye, alt: "bullsEye", boxSize: "35px" },
  };
  if (GameRate < 3) return null;
  return <Image {...data[GameRate]} />;
};

export default Emoji;

import { Image } from "react-grid-gallery";

import board_game_01 from '../../../assets/hobbies/board_games.jpg'
import gym_01 from '../../../assets/hobbies/gym_thumbs_up.jpg'

export interface CustomImage extends Image {
  original: string;
}


export const images: CustomImage[] = [
  {
    src: board_game_01,
    original: board_game_01,
    width: 200,
    height: 150,
    tags: [
      { value: "Board game library", title: "Board game library" },
    ],
    caption: "Board game library",
  },
  {
    src: gym_01,
    original: gym_01,
    width: 150,
    height: 200,
    tags: [
      { value: "In the gym", title: "In the gym" },
    ],
    caption: "In the gym",
  }
];
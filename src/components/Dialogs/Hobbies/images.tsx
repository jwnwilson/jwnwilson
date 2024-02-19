import { Image } from "react-grid-gallery";

export interface CustomImage extends Image {
  original: string;
}


export const images: CustomImage[] = [
  {
    src: '/assets/hobbies/board_games.jpg',
    original: '/assets/hobbies/board_games.jpg',
    width: 200,
    height: 150,
    tags: [
      { value: "Board game library", title: "Board game library" },
    ],
    caption: "Board game library",
  },
  {
    src: '/assets/hobbies/gym_thumbs_up.jpg',
    original: '/assets/hobbies/gym_thumbs_up.jpg',
    width: 300,
    height: 400,
    tags: [
      { value: "In the gym", title: "In the gym" },
    ],
    caption: "In the gym",
  }
];
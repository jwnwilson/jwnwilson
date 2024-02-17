import { Image } from "react-grid-gallery";

import millie from '../../../assets/pets/millie_01.jpg'
import billy from '../../../assets/pets/billy_01.jpg'

export interface CustomImage extends Image {
  original: string;
}

export const images: CustomImage[] = [
  {
    src: millie,
    original:millie,
    width: 150,
    height: 174,
    tags: [
      { value: "Millie", title: "Millie" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: billy,
    original: billy,
    width: 320,
    height: 320,
    tags: [
        { value: "Billy", title: "Billy" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },
];
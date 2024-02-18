import { Image } from "react-grid-gallery";

import millie_01 from '../../../assets/pets/millie_01.jpg'
import baby_millie_01 from '../../../assets/pets/baby_millie.jpg'
import baby_millie_02 from '../../../assets/pets/baby_millie_2.jpg'
import billy_01 from '../../../assets/pets/billy_01.jpg'
import billy_02 from '../../../assets/pets/billy_02.jpg'
import baby_billy_01 from '../../../assets/pets/baby_billy.jpg'
import baby_billy_02 from '../../../assets/pets/baby_billy_2.jpg'
import xmas_billy_01 from '../../../assets/pets/xmas_billy.jpg'
import xmas_millie_01 from '../../../assets/pets/xmas_millie.jpg'
import billy_kitchen from '../../../assets/pets/billy_kitchen.jpg'
import billy_living_room from '../../../assets/pets/billy_livingroom.jpg'
import billy_millie_01 from '../../../assets/pets/billy_millie_01.jpg'



export interface CustomImage extends Image {
  original: string;
}


export const images: CustomImage[] = [
  {
    src: "https://media1.tenor.com/m/y2uYuMOO-RoAAAAC/pictures-of-my-kids-family-guy.gif",
    original: "https://media1.tenor.com/m/y2uYuMOO-RoAAAAC/pictures-of-my-kids-family-guy.gif",
    width: 200,
    height: 150,
    tags: [
      { value: "Look at Them!", title: "Look at my bunnies!" },
    ],
    caption: "Look at my god damn bunnies!",
  },
  {
    src: millie_01,
    original:millie_01,
    width: 150,
    height: 200,
    tags: [
      { value: "Millie", title: "Millie" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: billy_01,
    original: billy_01,
    width: 150,
    height: 200,
    tags: [
        { value: "Billy", title: "Billy" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: billy_02,
    original: billy_02,
    width: 150,
    height: 200,
    tags: [
        { value: "Billy", title: "Billy" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: baby_billy_01,
    original: baby_billy_01,
    width: 150,
    height: 200,
    tags: [
        { value: "Baby Billy", title: "Baby Billy" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: baby_billy_02,
    original: baby_billy_02,
    width: 150,
    height: 200,
    tags: [
        { value: "Baby Billy", title: "Baby Billy" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: baby_millie_01,
    original: baby_millie_01,
    width: 200,
    height: 150,
    tags: [
        { value: "Baby Millie", title: "Baby Millie" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: baby_millie_02,
    original: baby_millie_02,
    width: 200,
    height: 150,
    tags: [
        { value: "Baby Millie", title: "Baby Millie" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: xmas_billy_01,
    original: xmas_billy_01,
    width: 150,
    height: 200,
    tags: [
        { value: "Xmas Millie", title: "Xmas Millie" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: xmas_millie_01,
    original: xmas_millie_01,
    width: 150,
    height: 200,
    tags: [
        { value: "Xmas Millie", title: "Xmas Millie" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: billy_kitchen,
    original: billy_kitchen,
    width: 150,
    height: 200,
    tags: [
        { value: "Billy", title: "Billy" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: billy_living_room,
    original: billy_living_room,
    width: 150,
    height: 200,
    tags: [
        { value: "Billy", title: "Billy" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: billy_millie_01,
    original: billy_millie_01,
    width: 150,
    height: 200,
    tags: [
        { value: "Billy & Millie", title: "Billy & Millie" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  }
];
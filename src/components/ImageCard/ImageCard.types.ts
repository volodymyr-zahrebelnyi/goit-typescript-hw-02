// export interface ImageCardProps {
//   item: {
//     urls: {
//       small: string;
//       regular: string;
//     };
//     description?: string;
//     user: {
//       username: string;
//     };
//     likes?: number;
//   };
//   onOpen: (image: {
//     src: string;
//     description?: string;
//     likes?: number;
//     username?: string;
//   }) => void;
// }

import { Image, SelectedImage } from "../App/App.types";

export interface ImageCardProps {
  item: Image;
  onOpen: (image: SelectedImage) => void;
}

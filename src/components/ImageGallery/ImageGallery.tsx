import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

import { ImageGalleryProps } from "./ImageGallery.types";

export default function ImageGallery({ items, onOpen }: ImageGalleryProps) {
  return (
    <ul className={css.gallery}>
      {items.map(item => (
        <li className={css.galleryItem} key={item.id}>
          <ImageCard item={item} onOpen={onOpen} />
        </li>
      ))}
    </ul>
  );
}

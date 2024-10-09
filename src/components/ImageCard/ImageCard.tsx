import css from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

export default function ImageCard({
  item: {
    urls: { small, regular },
    description,
    user: { username },
    likes,
  },
  onOpen,
}: ImageCardProps) {
  return (
    <div>
      <img
        className={css.galleryImage}
        src={small}
        alt={description}
        width="360"
        height="200"
        onClick={() => onOpen({ src: regular, description, likes, username })}
      />
    </div>
  );
}

export interface ImageCardProps {
  item: {
    urls: {
      small: string;
      regular: string;
    };
    description?: string;
    user: {
      username: string;
    };
    likes?: number;
  };
  onOpen: (image: {
    src: string;
    description?: string;
    likes?: number;
    username?: string;
  }) => void;
}

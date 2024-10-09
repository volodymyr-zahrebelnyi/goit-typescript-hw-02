export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
  user: {
    username: string;
  };
  likes: number;
}

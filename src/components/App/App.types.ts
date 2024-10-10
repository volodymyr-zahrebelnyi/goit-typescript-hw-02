// export interface Image {
//   id: string;
//   urls: {
//     small: string;
//     regular: string;
//   };
//   description: string;
//   user: {
//     username: string;
//   };
//   likes?: number;
// }

// export interface SelectedImage {
//   src: string;
//   description?: string;
//   username?: string;
//   likes?: number;
// }

export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description?: string;
  user: {
    username: string;
  };
  likes?: number;
}

export interface SelectedImage {
  src: string;
  description?: string;
  username?: string;
  likes?: number;
}

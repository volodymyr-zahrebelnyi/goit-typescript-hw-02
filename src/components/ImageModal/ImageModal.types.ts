export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: {
    src: string;
    description: string;
    username: string;
    likes: number;
  } | null;
}

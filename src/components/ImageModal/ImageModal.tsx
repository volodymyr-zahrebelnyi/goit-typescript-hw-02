import Modal from "react-modal";
import { useEffect } from "react";
import css from "./ImageModal.module.css";

import { ImageModalProps } from "./ImageModal.types";

export default function ImageModal({
  isOpen,
  onClose,
  image,
}: ImageModalProps) {
  const modalCustomStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "none",
      border: "none",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  useEffect(() => {
    const handleEsc = (evt: KeyboardEvent) => {
      if (evt.code === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={modalCustomStyles}>
      {image && (
        <div>
          <img className={css.image} src={image.src} alt={image.description} />
          <p className={css.description}>
            {image.description || "No description"}
          </p>
          <p className={css.author}>Author: {image.username || "Unknown"}</p>
          <p className={css.likes}>Likes: {image.likes ?? 0}</p>
        </div>
      )}
    </Modal>
  );
}

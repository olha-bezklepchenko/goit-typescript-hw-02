import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { Image } from "../../types";
import React from "react";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.imageBox}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={css.image}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;

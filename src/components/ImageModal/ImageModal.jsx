import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
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

import { Image } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {images.map((image) => (
          <li
            key={image.id}
            className={css.item}
            onClick={() => onImageClick(image)}
          >
            <ImageCard
              alt={image.alt_description}
              likes={image.likes}
              src={image.urls.small}
              autor={image.user.name}
              portfolio={image.user.links.html}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;

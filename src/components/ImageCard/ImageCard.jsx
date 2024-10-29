import css from "./ImageCard.module.css";
import {
  HiOutlineHandThumbUp,
  HiOutlineCamera,
  HiOutlineUser,
} from "react-icons/hi2";

function formatText(text) {
  return text
    .toLowerCase()
    .replace(/(^\w{1})|(\s+\w{1})/g, (match) => match.toUpperCase());
}

const ImageCard = ({ alt, likes, src, autor, portfolio }) => {
  return (
    <>
      <div className={css.imageWrapper}>
        <img
          className={css.image}
          src={src}
          alt={alt}
          width="300"
          height="100"
        />
      </div>
      <ul className={css.imageInfoList}>
        <li className={css.imageInfoItem}>
          <HiOutlineCamera size={30} className={css.imageInfoIcon} />
          <p>{formatText(autor)}</p>
        </li>

        <li className={css.imageInfoItem}>
          <a
            href={portfolio}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={css.imageInfoLink}
          >
            <HiOutlineUser size={30} className={css.imageInfoIcon} />
          </a>
        </li>

        <li className={css.imageInfoItem}>
          <HiOutlineHandThumbUp size={30} className={css.imageInfoIcon} />
          <p>{likes}</p>
        </li>
      </ul>
    </>
  );
};

export default ImageCard;

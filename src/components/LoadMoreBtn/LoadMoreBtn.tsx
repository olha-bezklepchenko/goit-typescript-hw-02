import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.containerBtn}>
      <button className={css.btn} onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;

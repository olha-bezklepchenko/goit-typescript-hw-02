import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  title: string;
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ title, message }) => {
  return (
    <div className={css.errorContainer}>
      <h2 className={css.errorTitle}>{title}</h2>
      <p className={css.errorMessage}>{message}</p>
    </div>
  );
};

export default ErrorMessage;

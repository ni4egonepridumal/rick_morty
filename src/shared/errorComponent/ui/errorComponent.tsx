import styles from "./errorCompobebtStyles.module.css";
import clsx from "clsx";

interface IPropsError {
  errorMessage: string;
  className?: string;
}

export const ErrorComponent = ({ errorMessage, className }: IPropsError) => {
  return (
    <div className={clsx(styles.errorInner, className)}>{errorMessage}</div>
  );
};

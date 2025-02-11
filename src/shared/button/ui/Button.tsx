import { ReactNode } from "react";
import clsx from "clsx";
import styles from './ButtomStyles.module.css'

interface IPropsButton {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

export const Button = ({
  onClick,
  className,
  children,
  ...props
}: IPropsButton) => {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

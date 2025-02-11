import { ReactNode } from "react";

interface IPropsLoader {
  className: string;
  children: ReactNode;
}

export const Loader = ({ className, children }: IPropsLoader) => {
  return <p className={className}>{children}</p>;
};

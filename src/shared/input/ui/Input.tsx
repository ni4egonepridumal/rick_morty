import { ChangeEvent, Dispatch, SetStateAction } from "react";
import styles from "./InputStyles.module.css";
interface IInputProps {
  placeholder?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const Input = ({ placeholder = "", value, setValue }: IInputProps) => {
  const handleSetValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      autoFocus // использую, потому как нет сложной логики для управления фокусом, так можно useRef юзать
      value={value}
      onChange={(e) => handleSetValue(e)}
    />
  );
};

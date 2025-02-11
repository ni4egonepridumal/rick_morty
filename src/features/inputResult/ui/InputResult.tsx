import { Dispatch, SetStateAction } from "react";
import { Input } from "../../../shared/input/ui/Input";
import styles from "./InputResultsStyles.module.css";

interface IPropsInputWithCount {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  countCharacters: number;
  isError: boolean;
  isSuccess: boolean;
}

export const InputWithCount = ({
  inputValue,
  setInputValue,
  countCharacters,
  isError,
  isSuccess,
}: IPropsInputWithCount) => {
  return (
    <div>
      <Input
        placeholder="Search characters..."
        value={inputValue}
        setValue={setInputValue}
      />
      {isError ? null : (
        <>
          {inputValue.length > 2 && isSuccess && (
            <p className={styles.charactersCount}>
              Found characters: {countCharacters}
            </p>
          )}
        </>
      )}
    </div>
  );
};

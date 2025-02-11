import { useEffect, useState } from "react";
import styles from "./HomeStyles.module.css";
import { useLazyGetCharactersQuery } from "../model/api";
import { InputWithCount } from "../../../features/inputResult/ui/InputResult";
import { CharactersList } from "../../../widgets/cartList/ui/CartList";
import { ErrorComponent } from "../../../shared/errorComponent/ui/errorComponent";

export const Home = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [getCharacter, { data, isError, isLoading, isSuccess }] =
    useLazyGetCharactersQuery();
  useEffect(() => {
    if (inputValue.length > 2) {
      getCharacter(inputValue);
    }
  }, [getCharacter, inputValue]);
  return (
    <>
      <div className={styles.input}>
        <InputWithCount
          inputValue={inputValue}
          setInputValue={setInputValue}
          countCharacters={data?.results.length || 0}
          isError={isError}
          isSuccess={isSuccess}
        />
      </div>
      {isLoading ? (
        <div>Получаю Данные...</div>
      ) : (
        <>
          {isError ? (
            <ErrorComponent
              errorMessage="Не удалось получить персонажей"
              className={styles.errorComponent}
            />
          ) : (
            <>
              {data?.results.length && (
                <CharactersList
                  characters={inputValue.length > 2 && isSuccess ? data.results : []}
                />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

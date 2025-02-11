import { useLocation, useNavigate } from "react-router-dom";
import { useLazyGetOneCharacterQuery } from "../model/api";
import { useEffect } from "react";
import styles from "./CharacterStyles.module.css";
import { Button } from "../../../shared/button/ui/Button";
import { ErrorComponent } from "../../../shared/errorComponent/ui/errorComponent";
import { Loader } from "../../../shared/loader/ui/Loader";
import { getNumber } from "../../../shared/lib/getNumberFromUrl/getNumber";

export const OneCharacterItem = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const [getOneCharacter, { data, isLoading, isError }] =
    useLazyGetOneCharacterQuery();
  
    useEffect(() => {
    getOneCharacter(
      (location.state && location.state.id) || getNumber(location.pathname)
    );
  }, [getOneCharacter, isLoading, location.pathname, location.state]);

  return (
    <div className={styles.container}>
      {isError ? (
        <ErrorComponent
          errorMessage="Не удалось получить персонажа"
          className={styles.errorComponent}
        />
      ) : (
        <div className={styles.oneCharacterInner}>
          {isLoading ? (
            <Loader className={styles.loader}>Получаю Данные...</Loader>
          ) : (
            <div>
              <h2 className={styles.heading}>ДОСЬЕ</h2>

              <div>
                <p>Имя: {data?.name}</p>
                <p>Пол: {data?.gender}</p>
                <p>Место нахождения: {data?.location.name}</p>
              </div>

              <div className={styles.imgInner}>
                <img src={data?.image} className={styles.imgItem} />
              </div>
            </div>
          )}
          <Button onClick={() => navigate("/")} className={styles.button}>
            Вернуться на главную
          </Button>
        </div>
      )}
    </div>
  );
};

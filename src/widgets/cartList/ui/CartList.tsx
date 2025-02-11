import { CharacterItem } from "../../../entities/characterItem/ui/CharacterItem";
import { ICharacterResult } from "../../../shared/types";
import styles from "./CartListStyles.module.css";

interface IPropsCharactersList {
  characters: ICharacterResult[];
}

export const CharactersList = ({ characters }: IPropsCharactersList) => {
  return (
    <div className={styles.productList}>
      {characters.map((character: ICharacterResult) => {
        return <CharacterItem key={character.id} character={character} />;
      })}
    </div>
  );
};

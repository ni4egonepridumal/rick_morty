import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../shared/lib/formatDate/formatDate";
import { ICharacterResult } from "../../../shared/types";
import styles from "./CharacterItemStyles.module.css";

interface ICharacterItem {
  character: ICharacterResult;
}

export const CharacterItem = ({ character }: ICharacterItem) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/character/${character.id}`, { state: { id: character.id } });
  };
  return (
    <div className={styles.characterCard} onClick={handleClick}>
      {character.name} - {character.species}
      <div className={styles.footerCharacterCard}>
        <div className={styles.footerCharacterCardText}>
          <p>
            Status:{" "}
            <span
              style={{
                color: character.status === "Alive" ? "#267504" : "#821E0A",
              }}
            >
              {character.status}
            </span>
          </p>
          <p>Created: {formatDate(character.created)}</p>
        </div>
      </div>
    </div>
  );
};

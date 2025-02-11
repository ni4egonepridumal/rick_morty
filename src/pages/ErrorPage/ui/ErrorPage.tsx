import { useNavigate } from "react-router-dom";
import { Button } from "../../../shared/button/ui/Button";
import styles from "./ErrorPageStyles.module.css";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <p className={styles.text}>Возможно такой страницы не существует</p>
      <Button onClick={() => navigate("/")}>На главную</Button>
    </div>
  );
};

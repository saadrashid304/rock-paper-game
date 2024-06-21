import styles from "./Game.module.css";

import paper from "../../assets/icon-paper.svg";
import rock from "../../assets/icon-rock.svg";
import scissors from "../../assets/icon-scissors.svg";

const Game = ({ onOptionClick }) => {
  return (
    <div className={styles.game_container}>
      <div
        onClick={() => onOptionClick("paper")}
        className={`${styles.icon_container} ${styles.icon_container_paper}`}
      >
        <img src={paper} alt="paper" />
      </div>
      <div
        onClick={() => onOptionClick("scissors")}
        className={`${styles.icon_container} ${styles.icon_container_scissors}`}
      >
        <img src={scissors} alt="scissors" />
      </div>
      <div
        onClick={() => onOptionClick("rock")}
        className={`${styles.icon_container} ${styles.icon_container_rock}`}
      >
        <img src={rock} alt="rock" />
      </div>
    </div>
  );
};

export default Game;

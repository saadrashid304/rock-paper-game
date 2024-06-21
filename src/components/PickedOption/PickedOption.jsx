import { useState, useEffect } from "react";

import styles from "./PickedOption.module.css";

import paper from "../../assets/icon-paper.svg";
import rock from "../../assets/icon-rock.svg";
import scissors from "../../assets/icon-scissors.svg";

const PickedOption = ({ selectedOption, onScoreChange, onOptionClick }) => {
  const [computerPickedOption, setComputerPickedOption] = useState(null);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const optionList = [
      "rock",
      "paper",
      "scissors",
      "rock",
      "paper",
      "scissors",
      "rock",
      "paper",
      "scissors",
      "rock",
      "paper",
      "scissors",
      "rock",
      "paper",
      "scissors",
    ];
    const timer = setTimeout(() => {
      let option = optionList[Math.floor(Math.random() * 15) + 1];
      setComputerPickedOption(option);
      if (
        (selectedOption === "paper" && option === "rock") ||
        (selectedOption === "rock" && option === "scissors") ||
        (selectedOption === "scissors" && option === "paper")
      ) {
        onScoreChange(1);
        setWinner("you");
      } else if (selectedOption === option) {
        onScoreChange(0);
        setWinner("draw");
      } else {
        setWinner("computer");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${styles.game_container} ${
        winner && styles.game_container_width
      } `}
    >
      <div className={styles.game_container_left}>
        <h2>YOU PICKED</h2>
        <div
          className={`${styles.icon_container} ${
            selectedOption === "paper" && styles.icon_container_paper
          } ${selectedOption === "rock" && styles.icon_container_rock} ${
            selectedOption === "scissors" && styles.icon_container_scissors
          } ${winner === "you" && styles.glow_effect}`}
        >
          <img
            className={styles.icon}
            src={
              selectedOption === "paper"
                ? paper
                : selectedOption === "rock"
                ? rock
                : scissors
            }
            alt=""
          />
        </div>
      </div>
      {winner && (
        <div className={styles.game_container_left}>
          <h1>
            {winner === "you"
              ? "YOU WIN"
              : winner === "computer"
              ? "YOU LOSE"
              : "DRAW"}
          </h1>
          <button
            className={`${styles.btn} ${
              winner === "computer" && styles.btn_color
            }`}
            onClick={() => {
              onOptionClick(null);
            }}
          >
            PLAY AGAIN
          </button>
        </div>
      )}
      <div className={styles.game_container_left}>
        <h2>THE HOUSE PICKED</h2>
        {computerPickedOption === null ? (
          <div
            className={`${styles.icon_container} ${styles.icon_dummy}`}
          ></div>
        ) : (
          <div
            className={`${styles.icon_container} ${
              computerPickedOption === "paper" && styles.icon_container_paper
            } ${
              computerPickedOption === "rock" && styles.icon_container_rock
            } ${
              computerPickedOption === "scissors" &&
              styles.icon_container_scissors
            } ${winner === "computer" && styles.glow_effect}`}
          >
            <img
              className={styles.icon}
              src={
                computerPickedOption === "paper"
                  ? paper
                  : computerPickedOption === "rock"
                  ? rock
                  : scissors
              }
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PickedOption;

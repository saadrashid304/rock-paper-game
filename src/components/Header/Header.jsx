import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

const Header = ({ score }) => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="LOGO" />
      <div className={styles.score_card}>
        <span className={styles.score_card_p1}>SCORE</span>
        <span className={styles.score_card_p2}>{score}</span>
      </div>
    </header>
  );
};

export default Header;

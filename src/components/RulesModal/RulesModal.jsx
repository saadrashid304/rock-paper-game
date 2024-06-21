import styles from "./RulesModal.module.css";

import close from "../../assets/icon-close.svg";
import rules from "../../assets/image-rules.svg";

const RulesModal = ({ onModalHide }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onModalHide} />
      <div className={styles.rules_modal}>
        <div className={styles.rules_modal_header}>
          <h1>RULES</h1>
          <img src={close} alt="close icon" onClick={onModalHide} />
        </div>
        <div className={styles.rules_modal_rules}>
          <img src={rules} alt="rules" />
        </div>
      </div>
    </>
  );
};

export default RulesModal;

import { FunctionComponent } from "react";
import styles from "./modal.module.scss";

interface ConfirmationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}

export const ConfirmationModal: FunctionComponent<ConfirmationModalProps> = (
  props
) => {
  return (
    <>
      <div className={styles.message}>{props.message}</div>
      <div className={styles.confirmationButtons}>
        <div className={styles.yesButton} onClick={props.onConfirm}>
          Yes
        </div>
        <div className={styles.noButton} onClick={props.onCancel}>
          No
        </div>
      </div>
    </>
  );
};

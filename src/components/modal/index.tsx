import { FunctionComponent, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.scss";
import FocusLock from "react-focus-lock";
import { ModalProps } from "../../types/modal";

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
  const onKeyDown = (event: KeyboardEvent) =>
    event.keyCode === 27 && isShown && hide();

  useEffect(() => {
    const documentBodyStyleOverflow = (value: string) =>
      (document.body.style.overflow = value);
    isShown
      ? documentBodyStyleOverflow("hidden")
      : documentBodyStyleOverflow("auto");

    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [isShown]);

  const modal = (
    <>
      <div className={styles.backdrop} onClick={hide} />
      <FocusLock>
        <div
          className={styles.wrapper}
          aria-modal
          aria-labelledby={headerText}
          tabIndex={-1}
          role="dialog"
        >
          <div className={styles.styledModal}>
            <div className={styles.Header}>
              <div className={styles.headerText}>{headerText}</div>
              <button
                className={styles.closeButton}
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={hide}
              >
                X
              </button>
            </div>
            <div className={styles.content}>{modalContent}</div>
          </div>
        </div>
      </FocusLock>
    </>
  );

  return isShown ? createPortal(modal, document.body) : null;
};

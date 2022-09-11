import { useCallback, useState } from "react";
import { useModal } from "../../hooks/useModal";
import { ImpulseListProps } from "../../types/impuse";
import { ConfirmationModal } from "../modal/confirmation";
import styles from "./Box.module.scss";
import { ModalProps } from "../../types/modal";

type BoxProps = ImpulseListProps & {
  handleRemove: (id: number) => void;
};

const Box = ({
  id,
  name,
  details,
  handleRemove,
  backgroundColor,
}: BoxProps) => {
  return (
    <>
      <div
        key={id}
        className={styles.item}
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{details?.description}</div>
        <div className={styles.button} onClick={() => handleRemove(id)}>
          -
        </div>
      </div>
    </>
  );
};

export default Box;

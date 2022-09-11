import { useCallback, useState } from "react";
import { useModal } from "../../hooks/useModal";
import { ImpulseListProps } from "../../types/impuse";
import { ConfirmationModal } from "../modal/confirmation";
import styles from "./Box.module.scss";

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

const Modal = () => {
  const { isShown, toggle } = useModal();

  const onConfirm = () => toggle();
  const onCancel = () => toggle();

  return (
    <Modal
      isShown={isShown}
      hide={toggle}
      headerText="Confirmation"
      modalContent={
        <ConfirmationModal
          onConfirm={onConfirm}
          onCancel={onCancel}
          message="Are you sure you want to delete element?"
        />
      }
    />
  );
};

export default Box;

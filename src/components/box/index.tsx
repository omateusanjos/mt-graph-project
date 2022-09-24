import { BoxProps } from "../../types/box";
import styles from "./Box.module.scss";

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

import { ImpulseListProps } from "../../types/impuse";
import Box from "../box";
import styles from "./Impulse.module.scss";
import { useImpulse } from "../../hooks/useImpulse";

const ImpulseList: React.FC = () => {
  const { impulse: impulseList, count, handleRemove, handleAdd } = useImpulse();

  return (
    <div className={styles.impulse}>
      <div className={styles.title}>{count}</div>
      <div className={styles.list}>
        {impulseList.map((item: ImpulseListProps) => (
          <Box key={item.id} {...item} handleRemove={handleRemove} />
        ))}
      </div>

      <div className={styles.button} onClick={() => handleAdd()}>
        +
      </div>
    </div>
  );
};

const Impulse = () => {
  return (
    <div>
      teste
      <ImpulseList />
    </div>
  );
};

export default Impulse;

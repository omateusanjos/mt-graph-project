import { useState } from "react";
import { ImpulseListProps } from "../../types/impuse";
import Box from "../box";
import styles from "./Impulse.module.scss";

const randomBackground = () => {
  const colors = [
    "#FFC0CB",
    "#FFB6C1",
    "#FF69B4",
    "#FF1493",
    "#DB7093",
    "#C71585",
    "#DA70D6",
    "#D8BFD8",
    "#DDA0DD",
    "#EE82EE",
    "#FF00FF",
    "#FF00FF",
    "#BA55D3",
    "#9400D3",
    "#9932CC",
    "#8A2BE2",
    "#9370DB",
    "#7B68EE",
    "#6A5ACD",
    "#483D8B",
    "#E6E6FA",
    "#D8BFD8",
    "#DDA0DD",
  ];
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

const Impulse = () => {
  const list = window?.localStorage?.getItem("impulseList");
  const [impulseList, setImpulseList] = useState<ImpulseListProps[]>(
    list ? JSON.parse(list) : []
  );
  const [count, setCount] = useState(impulseList.length);

  const handleAdd = () => {
    const bgColor = randomBackground();
    const id = count + 1;
    const payload = {
      id: id,
      name: `Impulse ${id}`,
      backgroundColor: bgColor,
      details: {
        description: `Description ${id}`,
      },
    };

    localStorage.setItem(
      "impulseList",
      JSON.stringify([...impulseList, payload])
    );

    setCount((previusState) => previusState + 1);
    setImpulseList([...impulseList, payload]);
  };

  const handleRemove = (id: number) => {
    const list = impulseList.filter((item) => item.id !== id);
    localStorage.setItem("impulseList", JSON.stringify(list));
    setImpulseList(list);
    setCount((previusState) => previusState - 1);
  };

  return (
    <div className={styles.impulse}>
      <div className={styles.title}>Impulsos registrados {count}</div>
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

export default Impulse;

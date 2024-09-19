"use client";

import { useState } from "react";
import styles from "./Tasktodo.module.css";

const TaskToDo = () => {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState<string>("");

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const clearData = () => {
    setItems([]);
  };

  const handleDoubleClick = (index: number) => {
    setEditIndex(index);
    setEditValue(items[index]);
  };

  const handleBlur = (index: number) => {
    saveEdit(index);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (event.key === "Enter") {
      saveEdit(index);
    }
  };

  const saveEdit = (index: number) => {
    const newItems = [...items];
    newItems[index] = editValue;
    setItems(newItems);
    setEditIndex(null);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addItem();
    }
  };
  return (
    <div className={styles.wrapp}>
      <div className={styles.container}>
        <h1>TaskToDo</h1>
        <input
          className={styles.additem}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button className={styles.addbtn} onClick={addItem}>
          Add
        </button>
        <button className={styles.addbtn} onClick={clearData}>
          Clear Data
        </button>
        <div className={styles.listitem}>
          <ul>
            {items.map((item, index) => (
              <li
                className={styles.liitems}
                key={index}
                onDoubleClick={() => handleDoubleClick(index)}
              >
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editValue}
                    onBlur={() => handleBlur(index)}
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    autoFocus
                  />
                ) : (
                  item
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskToDo;

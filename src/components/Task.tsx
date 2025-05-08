import { Trash } from "phosphor-react";

import styles from "./Task.module.css";

export interface TASKS {
  id: string;
  desc: string;
  completed: boolean;
}

interface PROPS {
  content: TASKS;
  fnDeleteTask: (id: string) => void;
  fnCompleteTask: (id: string, toogling: boolean) => void;
}

export const Task = ({ content, fnDeleteTask, fnCompleteTask }: PROPS) => {
  const toggleTask = () => {
    fnCompleteTask(content.id, !content.completed);
  };

  return (
    <div
      className={
        content.completed
          ? `${styles.task} ${styles.taskCompleted}`
          : `${styles.task}`
      }
    >
      <label>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={content.completed}
          id={content.id.toString()}
          onChange={toggleTask}
        />

        <span>{content.desc}</span>
      </label>
      <div className={styles.buttonDiv}>
        <button onClick={() => fnDeleteTask(content.id)}>
          <Trash size={18} />
        </button>
      </div>
    </div>
  );
};

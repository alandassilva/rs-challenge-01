import { ClipboardText } from "phosphor-react";
import styles from "./EmptyTaskList.module.css";

export const EmptyTaskList = () => {
  return (
    <div className={styles.taskList}>
      <ClipboardText size={56} />
      <span>Você ainda não tem tarefas cadastrada</span>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
};

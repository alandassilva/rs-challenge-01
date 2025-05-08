import styles from "./TaskCounter.module.css";

interface PROPS {
  totalTasks: number;
  completedTasks: number;
}

const TaskCounter = ({ totalTasks, completedTasks }: PROPS) => {
  return (
    <div className={styles.tasksTitle}>
      <div className={styles.tasksOngoing}>
        Tarefas Criadas<span>{totalTasks}</span>
      </div>
      <div className={styles.tasksCompleted}>
        Concluídas
        <span>
          {completedTasks} de {totalTasks}
        </span>
      </div>
    </div>
  );
};

export default TaskCounter;

import { PlusCircle } from "phosphor-react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { EmptyTaskList } from "./components/EmptyTaskList";
import TaskCounter from "./components/TaskCounter";
import TaskList from "./components/TaskList";

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([
    {
      id: uuidv4(),
      desc: "Essa é a tarefa 1 de algumas, eu preciso criar um texto grande pra encher linguiça, esse texto ainda está um pouco pequeno, mesmo eu tendo escrito um monte de abobrinha aqui",
      completed: false,
    },
    {
      id: uuidv4(),
      desc: "Essa é a tarefa 2 de algumas.",
      completed: false,
    },
  ]);
  const [tasksCounter, setTasksCounter] = useState(taskList.length);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  const handleNewTask = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const addNewTask = () => {
    setTaskList([
      ...taskList,
      { id: uuidv4(), desc: newTask, completed: false },
    ]);
    setNewTask("");
    setTasksCounter(tasksCounter + 1);
  };

  const deleteTask = (id: string) => {
    setTaskList(
      taskList.filter((task) => {
        if (task.id === id && task.completed === true)
          setTasksCompleted(tasksCompleted - 1);

        return task.id !== id;
      })
    );

    setTasksCounter(tasksCounter - 1);
  };

  const completeTask = (id: string, toogling: boolean) => {
    const updatedTasks = taskList.map((task) => {
      return task.id === id ? { ...task, completed: toogling } : { ...task };
    });

    setTaskList(updatedTasks);
    setTasksCompleted(tasksCompleted + (toogling ? 1 : -1));
  };

  return (
    <>
      <Header />
      <div className={styles.lookupDiv}>
        <input
          onChange={handleNewTask}
          value={newTask}
          className={styles.lookupInput}
          placeholder="Adicione uma nova tarefa"
        />
        <a onClick={addNewTask} href="#" className={styles.taskCreate}>
          Criar <PlusCircle size={22} />
        </a>
      </div>

      <div className={styles.tasksWrapper}>
        <div className={styles.wrappedDiv}>
          <TaskCounter
            totalTasks={tasksCounter}
            completedTasks={tasksCompleted}
          />

          {!taskList.length ? (
            <EmptyTaskList />
          ) : (
            <TaskList
              taskList={taskList}
              fnDeleteTask={deleteTask}
              fnCompleteTask={completeTask}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default App;

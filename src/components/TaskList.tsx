import { Task, TASKS } from "./Task";

interface PROPS {
  taskList: TASKS[];
  fnDeleteTask: (id: string) => void;
  fnCompleteTask: (id: string, status: boolean) => void;
}

const TaskList = ({ taskList, fnDeleteTask, fnCompleteTask }: PROPS) => {
  // alert(JSON.stringify(taskList));
  return (
    <>
      {taskList.map((task) => {
        // {
        //   // alert(JSON.stringify(task));
        // }
        return (
          <Task
            key={task.id}
            content={task}
            fnDeleteTask={fnDeleteTask}
            fnCompleteTask={fnCompleteTask}
          />
        );
      })}
    </>
  );
};

export default TaskList;

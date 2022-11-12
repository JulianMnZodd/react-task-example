import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext(); //contexto

export function TaskContextProvider(props) {
  //componente que va a englobar a todos

  const [tasks, setTasks] = useState([]); //contiene el estado(las tareas)

  useEffect(() => {
    setTasks(data);
  }, []); //esta actulizando el estado(los datos)

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

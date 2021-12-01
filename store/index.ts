import create from "zustand";
import { v4 as uuidv4 } from "uuid";
import { Task, TaskSafeUpdateObject } from "./types";

type State = {
  tasks: Array<Task>;
  createTask: (task: Task) => void;
  updateTask: (updateObject: TaskSafeUpdateObject) => void;
  deleteTask: (id: string) => void;
};

/* Could move tasks setters in other files later on or use factory function taking set as an argument
and returning a CRUD object but this is not needed at this scale */
const useStore = create<State>((set) => ({
  tasks: [{ id: "1", title: "hey", checked: false }],
  createTask: (task) =>
    set(({ tasks }) => ({
      tasks: [...tasks, { ...task, id: uuidv4(), checked: false }],
    })),
  updateTask: ({ id, ...updateValues }) =>
    set(({ tasks }) => ({
      tasks: tasks.reduce(
        (acc, task) => [
          ...acc,
          task.id === id ? { ...task, ...updateValues } : task,
        ],
        [] as Array<Task>
      ),
    })),
  deleteTask: (id) =>
    set(({ tasks }) => ({ tasks: tasks.filter((task) => task.id !== id) })),
}));

// Export types
export type { Task };
export default useStore;

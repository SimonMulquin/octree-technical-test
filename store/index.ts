import create from "zustand";
import { v4 as uuidv4 } from "uuid";
import { Task } from "./types";

type State = {
  tasks: Array<Task>;
  createTask: (task: Task) => void;
  deleteTask: (id: string) => void;
};

const useStore = create<State>((set) => ({
  tasks: [],
  createTask: (task) =>
    set(({ tasks }) => ({
      tasks: [...tasks, { ...task, id: uuidv4(), checked: false }],
    })),
  deleteTask: (id) =>
    set(({ tasks }) => ({ tasks: tasks.filter((task) => task.id !== id) })),
}));

// Export types
export type { Task };
export default useStore;

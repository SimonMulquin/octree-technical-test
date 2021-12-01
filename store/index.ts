import create from "zustand";
import { v4 as uuidv4 } from "uuid";
import { Task } from "./types";

type State = {
  tasks: Array<Task>;
};

const useStore = create<State>((set) => ({
  tasks: [],
  createTask: (task: Task) =>
    set(({ tasks }) => ({
      tasks: [...tasks, { ...task, id: uuidv4(), checked: false }],
    })),
  deleteTask: (id: string) =>
    set(({ tasks }) => ({ tasks: tasks.filter((task) => task.id !== id) })),
}));

// Export types
export type { Task };
export default useStore;

type TaskMandatoryFields = {
  id: string;
};

type TaskEditableFields = {
  title: string;
  checked: boolean;
};

export type Task = TaskMandatoryFields & TaskEditableFields;

export type TaskSafeUpdateObject = {
  [K in keyof TaskEditableFields]: TaskEditableFields[K] | undefined;
} & TaskMandatoryFields;

// @flow
import * as React from "react";
import { TaskType } from "../../types/Task";
import { Task } from "../Task/Task.component";

type Props = {
  taskList: TaskType[];
};

export const TaskList = ({ taskList }: Props) => {
  return (
    <div>
      {taskList.map((item, index) => (
        <Task task={item} />
      ))}
    </div>
  );
};

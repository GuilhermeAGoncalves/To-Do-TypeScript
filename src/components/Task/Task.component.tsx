// @flow
import { useState } from "react";
import { TaskType } from "../../types/Task";
import * as C from "./Task.style";
import { BsTrash } from "react-icons/bs";

type Props = {
  task: TaskType;
};

export const Task = ({ task }: Props) => {
  const [isChecked, setIsChecked] = useState(task.done);

  return (
    <C.Container done={isChecked}>
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label>{task.name}</label>
      </div>
      <span>
        <BsTrash />
      </span>
    </C.Container>
  );
};

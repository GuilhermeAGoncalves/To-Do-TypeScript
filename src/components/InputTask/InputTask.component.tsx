// @flow
import * as C from "./InputTask.style";
import { IoAdd } from "react-icons/io5";
import { useState, KeyboardEvent } from "react";

type Props = {
  addTask: (taskName: string) => void;
};

export const InputTask = ({ addTask }: Props) => {
  const [task, setTask] = useState("");

  const handleKeyUp = ($event: KeyboardEvent) => {
    if (
      ($event.code === "Enter" || $event.code === "NumpadEnter") &&
      task !== ""
    ) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <C.Container>
      <input
        type="text"
        placeholder="Adicionar Tarefa"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button>
        <IoAdd />
      </button>
    </C.Container>
  );
};

import { useState } from "react";
import * as C from "./App.style";
import { TaskType } from "./types/Task";
import { Title } from "./components/Title/Title.component";
import { InputTask } from "./components/InputTask/InputTask.component";
import { TaskList } from "./components/TaskList/TaskList.component";

function App() {
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  const handleAddTask = (taskName: string) => {
    let newTaskList = [...taskList];

    newTaskList.push({
      id: taskList.length + 1,
      name: taskName,
      done: false,
    });

    setTaskList(newTaskList);
  };

  return (
    <>
      <C.Container>
        <C.Area>
          <C.Header>
            <Title>Lista De Tarefas</Title>
          </C.Header>
          <InputTask addTask={handleAddTask} />
          <TaskList taskList={taskList} />
        </C.Area>
      </C.Container>
    </>
  );
}

export default App;

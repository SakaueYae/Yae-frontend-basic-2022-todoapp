import React, { useState } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";
import COLOR from "../../../variables/color";

const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);

  const onClick = () => {
    setTaskList([...taskList, { name: "", initializing: true }]);
  };

  const onTaskChange = (value, renameIndex) => {
    if (value === "") {
      setTaskList(
        taskList.filter((value, index) => {
          return index !== renameIndex;
        })
      );
    } else {
      setTaskList(
        taskList.map((task, index) =>
          index === renameIndex
            ? { name: value, initializing: task.initializing }
            : task
        )
      );
    }
  };

  const onTaskComplete = (removeIndex) => {
    setTaskList(
      taskList.filter((value, index) => {
        return index !== removeIndex;
      })
    );
  };

  return (
    <StyledCard>
      <AddTaskButton onClick={onClick} />
      <StyledTaskList>
        {taskList.map((task, index) => (
          <Task
            onTaskChange={(value) => {
              onTaskChange(value, index);
            }}
            onTaskComplete={() => onTaskComplete(index)}
            taskName={task.name}
            defaultIsEditing={task.initializing}
            key={index}
          />
        ))}
      </StyledTaskList>
    </StyledCard>
  );
};
export default TodoCard;

const StyledCard = styled.div`
  background-color: ${COLOR.LIGHT_BLACK};
  border-radius: 4px;
  padding: 20px;
`;

const StyledTaskList = styled.div`
  margin-top: 12px;

  & > div {
    margin-bottom: 12px;
  }

  div:last-child {
    margin: 0px;
  }
`;

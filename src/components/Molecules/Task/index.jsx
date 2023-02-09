import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "../../Atoms/Checkbox";
import Input from "../../Atoms/Input";
import EditButton from "../../Atoms/EditButton";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Task = ({ onTaskChange, onTaskComplete, taskName, defaultIsEditing }) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);

  const onEditComplete = (value) => {
    setIsEditing(false);
    onTaskChange(value);
  };

  const onEditButtonClick = () => {
    setIsEditing(true);
  };

  return (
    <StyledTask>
      <Checkbox onClick={onTaskComplete} />
      {isEditing ? (
        <Input defaultValue={taskName} onEditComplete={onEditComplete} />
      ) : (
        <>
          <StyledTaskName>{taskName}</StyledTaskName>
          <EditButton onClick={onEditButtonClick} />
        </>
      )}
    </StyledTask>
  );
};
export default Task;

const StyledTask = styled.div`
  display: flex;
  padding: 2px 6px;
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S}

  input {
    margin-left: 10px;
  }
`;

const StyledTaskName = styled.div`
  width: 100%;
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

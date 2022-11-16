import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Checkbox from "../../Atoms/Checkbox";
import Input from "../../Atoms/Input";
import EditButton from "../../Atoms/EditButton";

const Task = ({ onEditComplete, defaultValue, taskName, taskNameChange }) => {
  const [onEdit, setOnEdit] = useState(false);
  const ref = useRef(null);

  if (onEdit === true) {
    return (
      <StyledTask taskName={taskName}>
        <Checkbox
          onClick={() => {
            setOnEdit(!onEdit);
            console.log("task completed");
          }}
        />
        <Input
          onEditComplete={() => {
            setOnEdit(!onEdit);
            onEditComplete();
            taskNameChange();
          }}
          defaultValue={defaultValue}
          ref={ref}
        />
      </StyledTask>
    );
  } else {
    return (
      <StyledTask>
        <Checkbox
          onClick={() => {
            setOnEdit(!onEdit);
            console.log("task completed");
          }}
        />
        <div>{taskName}</div>
        <EditButton
          onClick={() => {
            setOnEdit(!onEdit);
            console.log("onEdit:" + onEdit);
          }}
        />
      </StyledTask>
    );
  }
};
export default Task;

const StyledTask = styled.div`
  display: flex;
`;

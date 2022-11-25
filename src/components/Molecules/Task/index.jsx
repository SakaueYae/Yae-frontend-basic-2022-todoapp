import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Checkbox from "../../Atoms/Checkbox";
import Input from "../../Atoms/Input";
import EditButton from "../../Atoms/EditButton";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Task = ({ onEditComplete, defaultValue, taskName, taskNameChange }) => {
  const [onEdit, setOnEdit] = useState(false);
  const [text, setText] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref.current);
  }, []);

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
            onEditComplete(ref.current);
            //onEditComplete({ taskName });
            //setText(ref.current);
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
        <StyledTaskName>taskname</StyledTaskName>
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
  padding: 2px 6px;
  width: fit-content;
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S}
  input {
    margin-left: 10px;
  }
`;

const StyledTaskName = styled.div`
  width: 196px;
  margin-left: 10px;
`;

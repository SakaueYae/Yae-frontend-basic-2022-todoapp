import React from "react";
import styled from "styled-components";
import plus from "../../../assets/svg/plus.svg";
import COLOR from "../../../variables/color";

const AddTaskButton = (props) => {
  return (
    <PlusButton onClick={props.onClick}>
      <img src={plus} alt="タスク追加ボタン" />
      <p>タスクを追加</p>
    </PlusButton>
  );
};
export default AddTaskButton;

const PlusButton = styled.button`
  width: fit-content;
  border-radius: 12px;
  padding: 2px 6px;
  display: flex;
  background-color: inherit;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(70, 163, 129, 0.2);
  }

  p {
    color: ${COLOR.GREEN};
    margin: 0px;
    margin-left: 10px;
  }
`;

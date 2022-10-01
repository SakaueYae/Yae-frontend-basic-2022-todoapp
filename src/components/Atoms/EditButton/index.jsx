import React from "react";
import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color";

const EditButton = (props) => {
  return (
    <PencilButton onClick={props.onClick}>
      <div></div>
      <img src={pencil} alt="編集ボタン" />
    </PencilButton>
  );
};
export default EditButton;

const PencilButton = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  display: flex;

  div {
    width: 20px;
    height: 20px;
    background-color: ${COLOR.LIGHT_GRAY};
    border-radius: 50%;
    position: relative;
    top: 0px;
    left: 0px;
    opacity: 0;
  }

  img {
    width: 20px;
    position: absolute;
  }

  &:hover {
    div {
      opacity: 0.2;
    }
  }
`;

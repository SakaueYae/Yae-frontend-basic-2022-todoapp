import React from "react";
import styled from "styled-components";
import check from "../../../assets/svg/check.svg";
import COLOR from "../../../variables/color";

const Checkbox = (props) => {
  return (
    <SquareButton onClick={props.onClick}>
      <img src={check} alt="チェックボックス" />
    </SquareButton>
  );
};
export default Checkbox;

const SquareButton = styled.button`
  width: 20px;
  height: 20px;
  padding: 0px;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  background-color: inherit;
  cursor: pointer;

  img {
    width: 15px;
    visibility: hidden;
  }

  &:hover {
    img {
      visibility: visible;
    }
  }
`;

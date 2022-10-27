import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Input = ({ defaultValue, onEditComplete }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
    ref.current.onblur = onEditComplete;
    ref.current.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        onEditComplete;
      }
    });
  }, []);

  return (
    <InputForm id="input" defalutValue={defaultValue} ref={ref}></InputForm>
  );
};
export default Input;

const InputForm = styled.input`
  width: 232px;
  background-color: ${COLOR.BLACK};
  border: none;
  outline: none;
  border-radius: 2px;
  caret-color: ${COLOR.WHITE};
  ${TEXT.S}
  color: ${COLOR.LIGHT_GRAY};
  font-weight: 500;
  padding: 0px 4px;
`;

import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Input = (props) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
    ref.current.addEventListener("blur", function () {
      props.onEditComplete(ref.current.value);
    });
    ref.current.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        props.onEditComplete(ref.current.value);
      }
    });
  }, []);

  return <InputForm ref={ref} defaultValue={props.defaultValue}></InputForm>;
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

import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const Input = (props) => {
  const ref = useRef(null);

  //Javaでいうコンストラクタ？
  useEffect(() => {
    ref.current.focus();
    ref.current.onblur = onEditComplete;
  }, []);

  return (
    <InputForm
      id="input"
      value={props.defaultValue}
      ref={ref}
      //  onBlur={onEditComplete}
    ></InputForm>
  );
};
export default Input;

const InputForm = styled.input`
  background-color: ${COLOR.BLACK};
  border: none;
  outline: none;
  border-radius: 2px;
  caret-color: ${COLOR.WHITE};
  color: ${COLOR.LIGHT_GRAY};
  padding: 0px 4px;
`;

const onEditComplete = () => {
  console.log("end");
};

import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const Input = ({ defaultValue, onEditComplete, color }) => {
  const ref = useRef(null);

  //Javaでいうコンストラクタ？
  useEffect(() => {
    ref.current.focus();
    ref.current.onblur = onEditComplete;
    ref.current.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        onEditComplete;
      }
    });
    ref.current.style.color = color;
  }, []);

  return (
    <InputForm
      id="input"
      defalutValue={defaultValue}
      ref={ref}
      onEditComplete={() => console.log("(o A o)")}
      color="red"
      //onKeyDown={onEditComplete}
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

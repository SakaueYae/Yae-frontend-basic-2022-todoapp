import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const Input = () => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.value = "";
  }, []);

  return <InputForm id="input" ref={ref}></InputForm>;
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

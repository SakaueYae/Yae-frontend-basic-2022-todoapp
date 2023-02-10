import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Input = ({ defaultValue, onEditComplete }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
    ref.current.addEventListener("blur", () => {
      onEditComplete(ref.current.value);
    });
    ref.current.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        onEditComplete(ref.current.value);
      }
    });
  }, []);

  return <StyledInput ref={ref} defaultValue={defaultValue} />;
};
export default Input;

const StyledInput = styled.input`
  width: 100%;
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

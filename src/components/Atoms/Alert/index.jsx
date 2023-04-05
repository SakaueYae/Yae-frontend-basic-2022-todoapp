import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Alert = ({ text, isActive = true }) => {
  return <Container isActive={isActive}>{text}</Container>;
};
export default Alert;

const Container = styled.div`
  color: ${COLOR.WHITE};
  background-color: ${COLOR.RED};
  ${TEXT.S}
  padding: 10px 20px;
  max-width: 400px;
  border-radius: 4px;

  display: ${(props) => (props.isActive ? "" : "none")};
`;

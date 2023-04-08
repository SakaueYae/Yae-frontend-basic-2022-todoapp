import React, { useEffect } from "react";
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
  width: 100%;
  max-width: 400px;
  border-radius: 4px;
  position: absolute;
  transition: all 0.2s ease;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  top: ${(props) => (props.isActive ? "20px" : "0px")};
`;

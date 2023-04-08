import React from "react";
import styled from "styled-components";
import Title from "../../Atoms/Title";
import TodoCard from "../../Organisms/TodoCard";
import AlertManager from "../../Organisms/AlertManager";
import BREAKPOINT from "../../../variables/breakpoint";

const MainPage = () => {
  return (
    <StyledMainPage>
      <Title />
      <AlertContainer>
        <AlertManager />
      </AlertContainer>
      <TodoCard />
    </StyledMainPage>
  );
};
export default MainPage;

const StyledMainPage = styled.div`
  position: relative;

  & > div:first-child {
    text-align: center;
    margin: 20px auto;

    @media screen and (min-width: ${BREAKPOINT.MEDIUM}) {
      margin-top: 60px;
    }
  }

  & > div:last-child {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const AlertContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  top: 20px;
`;

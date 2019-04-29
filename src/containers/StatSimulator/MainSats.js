import React from 'react';
import styled from 'styled-components';

const MainStat = () => {
  return (
    <>
      <div>Main Stats Tab</div>
      <Main>
        <span>HP</span>
        <span>SP</span>

        <span>Weapon</span>
        <span>STR</span>

        <span>ATK</span>
        <span>AGI</span>

        <span>SPD</span>
        <span>END</span>

        <span>ACC</span>
        <span>EVA</span>
        <span>BRK</span>
        <span>DEF</span>
        <span>CRT</span>
        <span>RES</span>
      </Main>
    </>
  );
};

export default MainStat;

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

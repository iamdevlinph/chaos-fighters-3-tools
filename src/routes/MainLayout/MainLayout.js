import React from 'react';
import styled from 'styled-components';
import { Sidebar } from '../../components';

export default (props) => {
  return (
    <MainLayout>
      <SidebarArea>
        <Sidebar></Sidebar>
      </SidebarArea>
      <ContentArea>
        {props.children}
      </ContentArea>
    </MainLayout>
  )
}

const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 185px 1fr;
  grid-template-areas: "sidebar content";

  @media only screen and (max-width: 950px) {
    grid-template-columns: 0 1fr;
  }
`;
const SidebarArea = styled.div`
  grid-area: sidebar;
  position: fixed;

  @media only screen and (max-width: 950px) {
    z-index: 2;
  }
`;
const ContentArea = styled.div`
  grid-area: content;
  box-shadow: inset 4px 0px 18px -5px rgba(0,0,0,0.75);
  padding: 20px;
  /* height: 100vh; */
  overflow: auto;
  margin-left: -1px;
  height: 94.5vh;
`;

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
  grid-template-columns: min-content 1fr;
  grid-template-areas: "sidebar content";
`;
const SidebarArea = styled.div`
  grid-area: sidebar;
`;
const ContentArea = styled.div`
  grid-area: content;
  box-shadow: inset 4px 0px 18px -5px rgba(0,0,0,0.75);
  padding: 20px;
  height: 100vh;
  overflow: auto;
`;

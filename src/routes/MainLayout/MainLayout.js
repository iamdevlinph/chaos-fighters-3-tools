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
  grid-template-columns: 300px 1fr;
  grid-template-areas: "sidebar content";
`;
const SidebarArea = styled.div`
  grid-area: sidebar;
`;
const ContentArea = styled.div`
  grid-area: content;
`;

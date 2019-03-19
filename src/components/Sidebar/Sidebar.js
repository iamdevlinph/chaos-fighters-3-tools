import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const urls = [
  'fighters',
  'tower'
]

export default (props) => {
  const sidebarOptions = urls.map((val) => {
    return (
      <Link key={val}>
        <NavLink to={`/${val}`}
          activeClassName="active-route">{val}</NavLink>
      </Link>
    )
  })
  return (
    <Sidebar>
      <SidebarHeader>
        <NavLink to="/">Chaos Fighters 3</NavLink>
      </SidebarHeader>
      <SidebarOptionsArea>
        {sidebarOptions}
      </SidebarOptionsArea>
    </Sidebar>
  )
}

const Sidebar = styled.div`
  white-space: nowrap;
  min-height: 100vh;
  height: 100%;
  background: #d4d4d4;
`;
const SidebarHeader = styled.div`
  background: #FF4D00;
  font-weight: bold;
  font-size: 20px;
  padding: 10px 15px;
  box-shadow: 0 4px 2px -2px gray;
  margin-bottom: 5px;
  a {
    color: white;
  }
`;
const SidebarOptionsArea = styled.div`
  text-transform: uppercase;
  text-align: center;
`;
const Link = styled.div`
  a {
    display: block;
    padding: 10px 0;
    color: black;
    /* color: white; */
    &.active-route {
      background: white;
      font-weight: bold;
    }
  }
`;

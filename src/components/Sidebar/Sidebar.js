import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const urls = [
  'fighters',
  'tower',
  'glossary'
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
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
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

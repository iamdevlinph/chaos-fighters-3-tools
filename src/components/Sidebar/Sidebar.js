import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const urls = [
  'fighters',
  'tower'
]

export default () => {
  const sidebarOptions = urls.map((val) => {
    return (<Link key={val}><NavLink to={`/${val}`}>{val}</NavLink></Link>)
  })
  return (
    <div>
      <SidebarHeader>
        <NavLink to="/">Chaos Fighter 3</NavLink>
      </SidebarHeader>
      <SidebarOptionsArea>
        {sidebarOptions}
      </SidebarOptionsArea>
    </div>
  )
}

const SidebarHeader = styled.div``;
const SidebarOptionsArea = styled.div``;
const Link = styled.div``;

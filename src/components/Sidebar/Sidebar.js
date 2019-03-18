import React from 'react';
import styled from 'styled-components';

const urls = [
  'fighters',
  'demon-tower'
]

export default () => {
  const sidebarOptions = urls.map((val) => {
    return (<div key={val}>{val}</div>)
  })
  return (
    <div>
      <SidebarHeader>Chaos Fighter 3</SidebarHeader>
      <SidebarOptionsArea>
        {sidebarOptions}
      </SidebarOptionsArea>
    </div>
  )
}

const SidebarHeader = styled.div``;
const SidebarOptionsArea = styled.div``;

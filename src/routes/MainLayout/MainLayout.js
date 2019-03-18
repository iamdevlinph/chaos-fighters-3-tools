import React from 'react';
import { Sidebar } from '../../components';

export default (props) => {
  return (
    <div>
      <h1>Main Layout</h1>
      <Sidebar></Sidebar>
      {props.children}
    </div>
  )
}

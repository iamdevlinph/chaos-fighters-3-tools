import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <>
      <h1>Welcome to Chaos Fighters 3 Tools</h1>
      <p>This is still a work in progress.</p>
      <p>Will provide you some info and tools to guide you.</p>

      <h5>Contents</h5>
      <ul>
        <li>
          <NavLink to="/fighters">Fighters</NavLink>
        </li>
        <li>
          <NavLink to="/tower">Demon Tower</NavLink>
        </li>
        <li>
          <NavLink to="/glossary">Glossary</NavLink>
        </li>
        <li>
          <NavLink to="/vip">Vip Conversion</NavLink>
        </li>
      </ul>

      <strong>Recruitment Code: 1000351510</strong>
      <br />
      <strong>IGN: DevBT</strong>
      <br />
      <strong>Server: S019</strong>
      <br />

      <br />
      <br />
      <a href="https://github.com/iamdevlinph/chaos-fighters-3-tools">
        Source Code
      </a>
    </>
  );
};

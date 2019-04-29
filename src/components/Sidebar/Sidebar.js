import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const urls = ['fighters', 'tower', 'glossary', 'stat-simulator'];

class SidebarComponent extends Component {
  constructor() {
    super();
    this.state = {
      shown: false,
    };
  }

  showHideSidebar(forceHide) {
    const { shown } = this.state;
    this.setState({
      shown: forceHide ? !forceHide : !shown,
    });
  }

  render() {
    const sidebarOptions = urls.map(val => {
      const label = val.replace('-', ' ');
      return (
        <Link key={val}>
          <NavLink
            to={`/${val}`}
            activeClassName="active-route"
            onClick={() => this.showHideSidebar(true)}
          >
            {label}
          </NavLink>
        </Link>
      );
    });
    const { shown } = this.state;
    return (
      <>
        {shown && <SidebarBG onClick={() => this.showHideSidebar(true)} />}
        <ToggleSideBar className="toggle">
          {shown ? (
            <i
              className="fas fa-times"
              title="menu"
              onClick={() => this.showHideSidebar()}
            />
          ) : (
            <i
              className="fas fa-bars"
              title="menu"
              onClick={() => this.showHideSidebar()}
            />
          )}
        </ToggleSideBar>
        <Sidebar shown={shown}>
          <SidebarHeader>
            <NavLink to="/" onClick={() => this.showHideSidebar(true)}>
              Chaos Fighters 3
            </NavLink>
          </SidebarHeader>
          <SidebarOptionsArea>{sidebarOptions}</SidebarOptionsArea>
        </Sidebar>
      </>
    );
  }
}

export default SidebarComponent;

const Sidebar = styled.div`
  white-space: nowrap;
  min-height: 100vh;
  height: 100%;
  background: #fff;
  z-index: 2;

  @media only screen and (max-width: 950px) {
    display: ${({ shown }) => (shown ? 'block' : 'none')};
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  }
`;
const SidebarHeader = styled.div`
  background: #ff4d00;
  font-weight: bold;
  font-size: 20px;
  padding: 10px 15px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin-bottom: 5px;
  a {
    color: white;
    margin: -10px;
    padding: 10px;
    display: inline-block;
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
      background: #353535;
      font-weight: bold;
      color: white;
    }
  }
`;
const ToggleSideBar = styled.div`
  display: none;
  z-index: 2;
  @media only screen and (max-width: 950px) {
    position: absolute;
    display: block;
    cursor: pointer;
    opacity: 1;
    color: #007cff;
    i {
      font-size: 28px;
      position: absolute;
      &.fa-times {
        left: 185px;
      }
      &.fa-bars {
        left: 5px;
      }
    }
  }
`;
const SidebarBG = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.3;
  position: absolute;
  z-index: -11;
`;

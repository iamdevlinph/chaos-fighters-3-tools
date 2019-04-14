import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const urls = [
  'fighters',
  'tower',
  'glossary'
]

class SidebarComponent extends Component {
  constructor() {
    super();
    this.state = {
      shown: false
    }
  }
  showHideSidebar() {
    this.setState({
      shown: !this.state.shown
    })
  }
  render() {
    const sidebarOptions = urls.map((val) => {
      return (
        <Link key={val}>
          <NavLink to={`/${val}`}
            activeClassName="active-route">{val}</NavLink>
        </Link>
      )
    })
    const { shown } = this.state;
    return (
      <>
        <ToggleSideBar className="toggle">
          {shown ?
            (
              <i className="fas fa-times" title="menu" onClick={() => this.showHideSidebar()}></i>
            )
            :
            (
              <i className="fas fa-bars" title="menu" onClick={() => this.showHideSidebar()}></i>
            )
          }
        </ToggleSideBar>
        <Sidebar shown={shown}>
          <SidebarHeader>
            <NavLink to="/">Chaos Fighters 3</NavLink>
          </SidebarHeader>
          <SidebarOptionsArea>
            {sidebarOptions}
          </SidebarOptionsArea>
        </Sidebar>
      </>
    )
  }
}

export default SidebarComponent;

const Sidebar = styled.div`
  white-space: nowrap;
  min-height: 100vh;
  height: 100%;
  background: #d4d4d4;

  @media only screen and (max-width: 950px) {
    display: ${({ shown }) => shown ? 'block' : 'none'};
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
  }
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
      background: white;
      font-weight: bold;
    }
  }
`;
const ToggleSideBar = styled.div`
  display: none;
  @media only screen and (max-width: 950px) {
    position: absolute;
    display: block;
    cursor: pointer;
    opacity: 1;
    color: #007cff;
    i {
      font-size: 28px;
      &.fa-times {
        margin-left: 185px;
      }
      &.fa-bars {
        margin-left: 5px;
      }
    }
  }
`;

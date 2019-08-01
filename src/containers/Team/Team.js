import React, { Component } from 'react';
import styled from 'styled-components';
// import _ from 'lodash';

import teamData from './team.json';

class Team extends Component {
  constructor() {
    super();
    this.state = {
      teamList: [],
    };
  }

  componentDidMount = () => {
    this.updateList();
  };

  updateList = (data = teamData) => {
    const teamList = [];
    data.forEach((team, idx) => {
      teamList.push(
        <tr key={team[0]}>
          <td>{team[1]}</td>
          <td>{team[2]}</td>
          <td>{team[3]}</td>
          <td>{team[4]}</td>
          <td>{team[5]}</td>
          <td>{team[6]}</td>
          <td>{team[7]}</td>
          <td>{team[8]}</td>
          <td>{team[9]}</td>
        </tr>
      );
    });

    this.setState({ teamList });
  };

  search = e => {
    const keywords = e.currentTarget.value.split(',').filter(Boolean);
    if (keywords.length === 0) {
      this.updateList();
    } else {
      // console.log('search', keywords);
      // const filteredData = teamData.filter(team => {
      //   // console.log('team', team);
      //   let show = false;
      //   keywords.forEach(word => {
      //     team.forEach((fighter, idx) => {
      //       // console.log(word, fighter);
      //       if (idx !== 0 && fighter.toLowerCase().includes(word)) {
      //         show = true;
      //         console.log(team);
      //         console.log(fighter, word);
      //       }
      //     });
      //   });
      //   return show;
      // });

      teamData.forEach(team => {
        // loop team data
        // check if each team has all the keywords
        // console.log(team, keywords);
        this.teamHasKeywords(team, keywords);
      });

      const filteredData = [];

      this.updateList(filteredData);
    }
  };

  teamHasKeywords = (team, keywords) => {
    console.log(team, keywords);
    // let matches = 0;
    // team.forEach(fighter => {
    //   // loop all fighters in a team
    //   if (fighter)
    // });
    // team.filter(fighter => {
    //   console.log(object)
    //   return fighter.includes(keywords[0])
    // });
    // keywords.filter(word => {

    // })
  };

  render() {
    const { teamList } = this.state;

    return (
      <div>
        <div className="page-title">Episode 24 System Merce Combinations</div>
        <label>
          <span>Search Keywords </span>
          <SearchBox type="text" onChange={e => this.search(e)} />
        </label>
        <table border="1">
          <tbody>{teamList}</tbody>
        </table>
      </div>
    );
  }
}

export default Team;

const SearchBox = styled.input``;

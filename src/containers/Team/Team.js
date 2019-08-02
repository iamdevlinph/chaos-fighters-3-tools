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
      const filteredData = teamData.filter((team, teamIdx) => {
        return this.teamHasKeywords(team, keywords, teamIdx);
      });

      this.updateList(filteredData);
    }
  };

  teamHasKeywords = (team, keywords, teamIdx) => {
    let keywordsFound = 0;
    keywords.forEach(word => {
      team.forEach((fighter, idx) => {
        if (
          idx !== 0 &&
          fighter
            .toLowerCase()
            .replace(' ', '')
            .includes(word)
        ) {
          keywordsFound += 1;
        }
      });
    });

    return keywordsFound === keywords.length;
  };

  render() {
    const { teamList } = this.state;

    return (
      <div>
        <div className="page-title">Episode 24 System Merce Combinations</div>
        <Note>Episode 24 is annoying as hell so here it is.</Note>
        <Note>
          Combinations of system mercenaries I had luck in Episode 24. My
          character is always on the last 1. This is auto skip so I have no idea
          if my charater actually helped.
        </Note>
        <label>
          <SearchBox
            type="text"
            onChange={e => this.search(e)}
            placeholder="Search Keywords"
          />
        </label>
        <Note>
          Example: <strong>lu,orie,mech,bride</strong>
          <br />
          This will search teams with Lu Bu, Oriental, Mech, Bride, etc
        </Note>
        <Note>
          No need for whole word. As long as some characters are matching. And
          each fighter is comma separated
        </Note>
        <Note>
          Feel free to give to me your combinations so I can add them here.
        </Note>
        <TeamTable>
          <thead>
            <tr>
              <th>1st Merce</th>
              <th>2nd Merce</th>
              <th>3rd Merce</th>
              <th>4th Merce</th>
              <th>5th Merce</th>
              <th>6th Merce</th>
              <th>7th Merce</th>
              <th>8th Merce</th>
              <th>9th Merce</th>
            </tr>
          </thead>
          <tbody>{teamList}</tbody>
        </TeamTable>
      </div>
    );
  }
}

export default Team;

const SearchBox = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #797979;
  border-radius: 4px;
`;
const TeamTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  th,
  td {
    text-align: left;
    padding: 8px;
  }
  th {
    background-color: #4caf50;
    color: white;
  }
  tr:nth-child(even) {
    background-color: #e0e0e0;
  }
`;
const Note = styled.p`
  margin: 5px 0;
  font-size: 14px;
`;

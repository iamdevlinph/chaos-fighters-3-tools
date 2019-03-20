import React, { Component } from 'react';
import MaterialTable from 'material-table'
import styled from 'styled-components';
import { columns, makeData, tableOptions } from './utils';

import fighterslist from './data/fighters.json';


class FightersContainer extends Component {
  constructor() {
    super();
    this.state = {
      level: 25
    }
  }
  levelChange(e) {
    this.setState({
      level: e.currentTarget.value
    })
  }
  render() {
    const { level } = this.state;
    const calculatedData = makeData(fighterslist, level);
    const tableTitle = 'Fighter Stats'
    return (
      <>
        <FighterLevel>
          <label htmlFor="">Fighter Level </label>
          <input type="number" value={level} onChange={(e) => this.levelChange(e)} />
        </FighterLevel>
        <MaterialTable
          columns={columns}
          data={calculatedData}
          title={tableTitle}
          options={tableOptions(calculatedData.length)}
        />
      </>
    )
  }
}

export default FightersContainer;

const FighterLevel = styled.div`
  margin-bottom: 10px;
  input {
    text-align: center;
    width: 50px;
  }
`;

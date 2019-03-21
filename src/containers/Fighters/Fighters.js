import React, { Component } from 'react';
import MaterialTable from 'material-table'
import styled from 'styled-components';
import { columns, makeData, tableOptions } from './utils';
import _ from 'lodash';
import { StringUtil } from 'common-utils-pkg';
import FighterDetails from './FighterDetails';
import DisplaySwitch from './DisplaySwitch';

import fighterslist from './data/fighters.json';


const getHighestValue = (array, field) => Math.max.apply(Math, array.map((o) => o[field]))
const getLowestValue = (array, field) => Math.min.apply(Math, array.map((o) => o[field]))

class FightersPage extends Component {
  constructor() {
    super();
    this.state = {
      level: 30,
      displayType: 'text'
    }
    this.displayChange = this.displayChange.bind(this);
  }
  levelChange(e) {
    this.setState({
      level: e.currentTarget.value
    })
  }
  displayChange(val) {
    this.setState({
      displayType: val
    })
  }
  render() {
    const { level, displayType } = this.state;
    const calculatedDataTable = makeData(fighterslist, level, 'table');
    const calculatedDataText = makeData(fighterslist, level, 'text');
    console.log(calculatedDataText);
    console.log(calculatedDataTable);
    const highestStats = {
      str: getHighestValue(calculatedDataTable, 'str'),
      agi: getHighestValue(calculatedDataTable, 'agi'),
      end: getHighestValue(calculatedDataTable, 'end'),

      // strGrowth: getHighestValue(calculatedDataTable, 'strGrowth'),
      // agiGrowth: getHighestValue(calculatedDataTable, 'agiGrowth'),
      // endGrowth: getHighestValue(calculatedDataTable, 'endGrowth'),

      strBmv: getLowestValue(calculatedDataTable, 'strBmv'),
      agiBmv: getLowestValue(calculatedDataTable, 'agiBmv'),
      endBmv: getLowestValue(calculatedDataTable, 'endBmv'),

      calcStr: getHighestValue(calculatedDataTable, 'calcStr'),
      calcAgi: getHighestValue(calculatedDataTable, 'calcAgi'),
      calcEnd: getHighestValue(calculatedDataTable, 'calcEnd'),

      calcAtk: getHighestValue(calculatedDataTable, 'calcAtk'),
      calcSpd: getHighestValue(calculatedDataTable, 'calcSpd'),
      calcHp: getHighestValue(calculatedDataTable, 'calcHp'),
    }
    console.log(highestStats);
    const tableTitle = 'Fighter Stats'
    return (
      <>
        <div className="page-title">Fighters</div>
        <FightersContaine>
          <Options>
            <FighterLevel>
              <label>Fighter Level </label>
              <input type="number" value={level} onChange={(e) => this.levelChange(e)} />
            </FighterLevel>
            <DisplaySwitchArea>
              <DisplaySwitch displayType={displayType} onClick={this.displayChange}></DisplaySwitch>
            </DisplaySwitchArea>
          </Options>
          <ContentArea>
            {displayType === 'text' ?
              (
                <TextDisplay>
                  The colored stats are the BEST value for each type.
                  {_.map(calculatedDataText, (val) =>
                    (
                      <div key={val[0]}>
                        <FighterTypeText>{StringUtil.toSentenceCase(val[0])} Expert Fighters</FighterTypeText>
                        {_.map(val[1], (fighter) => (
                          <FighterDetails fighter={fighter} key={fighter.name} bestValues={highestStats}></FighterDetails>
                        ))}
                      </div>
                    )
                  )}
                </TextDisplay>
              ) :
              (
                <MaterialTable
                  columns={columns}
                  data={calculatedDataTable}
                  title={tableTitle}
                  options={tableOptions(calculatedDataTable.length)}
                />
              )}
          </ContentArea>
        </FightersContaine>
      </>
    )
  }
}

export default FightersPage;

const FightersContaine = styled.div`
  display: grid;
  grid-template-areas:
    "options"
    "content";
  grid-template-rows:
    "1fr"
    "max-content";
`;
const FighterLevel = styled.div`
  grid-area: level;
  margin-bottom: 10px;
  input {
    text-align: center;
    width: 50px;
  }
`;
const DisplaySwitchArea = styled.div`
  grid-area: switch;
`;
const ContentArea = styled.div`
  grid-area: content;
`;
const TextDisplay = styled.div`
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
  padding: 20px 24px;
  background: #FFF;
`;
const Options = styled.div`
  grid-area: options;
  display: grid;
  grid-template-areas: "level switch";
  grid-template-columns: repeat(2, max-content);
  column-gap: 10px;
`;
const FighterTypeText = styled.div`
  /* text-align: center; */
  font-weight: bold;
  text-decoration: underline;
  font-size: 16px;
  margin: 10px 0;
`;

import React from 'react';
import styled from 'styled-components';

const isHighest = (val, fieldToCheck, bestValues) => (
  +val === bestValues[fieldToCheck] ?
    <HighestValueCell>{val}</HighestValueCell> :
    <span>{val}</span>
)

const FighterDetailsComponent = (props) => {
  const { fighter, bestValues } = props;
  return (
    <FighterDetails>
      <FighterName id={fighter.name} color={fighter.typeColor}>{fighter.name}</FighterName>
      <FighterStats>
        {/* <div>
          ISV: {`STR ${fighter.str} AGI ${fighter.agi} END ${fighter.end}`}
        </div>
        <div>
          Growth: {`STR ${fighter.strGrowth} AGI ${fighter.agiGrowth} END ${fighter.endGrowth}`}
        </div>
        <div>
          BMV: {`STR ${fighter.strBmv} AGI ${fighter.agiBmv} END ${fighter.endBmv}`}
        </div>
        <div>
          MAX: {`STR ${fighter.calcStr} AGI ${fighter.calcAgi} END ${fighter.calcEnd}`}
        </div>
        <div>
          MAX: {`1% ATK ${fighter.calcAtk} SPD/EVA ${fighter.calcSpd} 1% HP ${fighter.calcHp}`}
        </div> */}
        <Table>
          <tbody>
            <tr>
              <td>ISV</td>
              <td>STR</td>
              <td>{isHighest(fighter.str, 'str', bestValues)}</td>
              <td>AGI</td>
              <td>{isHighest(fighter.agi, 'agi', bestValues)}</td>
              <td>END</td>
              <td>{isHighest(fighter.end, 'end', bestValues)}</td>
            </tr>

            {/* <tr>
              <td>Growth</td>
              <td>STR</td>
              <td>{isHighest(fighter.strGrowth, 'strGrowth', bestValues)}</td>
              <td>AGI</td>
              <td>{isHighest(fighter.agiGrowth, 'agiGrowth', bestValues)}</td>
              <td>END</td>
              <td>{isHighest(fighter.endGrowth, 'endGrowth', bestValues)}</td>
            </tr> */}

            <tr>
              <td>BMV</td>
              <td>STR</td>
              <td>{isHighest(fighter.strBmv, 'strBmv', bestValues)}</td>
              <td>AGI</td>
              <td>{isHighest(fighter.agiBmv, 'agiBmv', bestValues)}</td>
              <td>END</td>
              <td>{isHighest(fighter.endBmv, 'endBmv', bestValues)}</td>
            </tr>

            <tr>
              <td>MAX</td>
              <td>STR</td>
              <td>{isHighest(fighter.calcStr, 'calcStr', bestValues)}</td>
              <td>AGI</td>
              <td>{isHighest(fighter.calcAgi, 'calcAgi', bestValues)}</td>
              <td>END</td>
              <td>{isHighest(fighter.calcEnd, 'calcEnd', bestValues)}</td>
            </tr>

            <tr>
              <td>MAX</td>
              <td>ATK</td>
              <td>{isHighest(fighter.calcAtk, 'calcAtk', bestValues)} %</td>
              <td>SPD<br />EVA</td>
              <td>{isHighest(fighter.calcSpd, 'calcSpd', bestValues)}</td>
              <td>HP</td>
              <td>{isHighest(fighter.calcHp, 'calcHp', bestValues)} %</td>
            </tr>
          </tbody>
        </Table>
      </FighterStats>
    </FighterDetails>
  );
};

export default FighterDetailsComponent;

const FighterName = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: ${({ color }) => `${color}`};
`;
const FighterStats = styled.div`
  margin-left: 10px;
`;
const Table = styled.table`
  font-size: 14px;
  border-collapse: collapse;
  tr {
    td:nth-child(1) {
      font-weight: bold;
      border-right: 1px solid black;
    }
  }
  td {
    /* border: 1px solid black; */
    width: 75px;
    height: 30px;
    border-bottom: 1px solid black;
  }
`;
const FighterDetails = styled.div`
  margin-bottom: 10px;
`;
const HighestValueCell = styled.span`
  color: red;
  font-weight: bold;
`;

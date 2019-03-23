import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import skills from './data/skills';
import towerSkills from './data/tower.json';

export default () => {
  // console.log(Object.keys(towerSkills));
  console.log(towerSkills);
  const mappedTowerSkills = _.chain(towerSkills)
    .groupBy('tower')
    .toPairs()
    .value();
  console.log(mappedTowerSkills);
  return (
    <>
      <div className="page-title">Demon Tower</div>
      <p>Skills I used to clear the floors of Demon Tower. Missing the first tower and a few floors on others</p>
      {
        _.map(mappedTowerSkills, (tower) => (
          <TowerItem key={tower[0]}>
            <div>Tower {tower[0]}</div>
            {
              _.map(tower[1], (floor) => (
                <div key={floor.floor}>
                  {floor.floor}
                  {
                    _.map()
                  }
                </div>
              ))
            }
          </TowerItem>
        ))
      }
      {/* {_.map(towerSkills, (tower, towerName) => {
        return _.map(tower, (skill) => {
          <h5>{towerName}</h5>
          // console.log(tower, skill);
          return (
            <TowerItem>
            </TowerItem>
          )
        })
      })} */}
      {/* {
        _.map(Object.keys(towerSkills), (tower) => {
          console.log(tower);
          console.log(towerSkills[tower]);
          _.map(towerSkills[tower], (skill) => {

          })
        })
      } */}
      {/* {
        _.map(Object.keys(towerSkills), (tower) => {
          // console.log(towerSkills[tower]);
          return (
            <TowerItem key={tower}>
              <h5>{tower}</h5>
              {
                _.map(towerSkills[tower], (skill, idx) => {
                  console.log(skill);
                  // console.log(skill[idx + 1], idx);
                })
              }
            </TowerItem>
          )
        })
      } */}
      {/* {
        _.forEach(towerSkills, (tower) => {
          console.log(tower);
          return (<div></div>)
        })
      } */}
    </>
  )
}

const TowerItem = styled.div``;

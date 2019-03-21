import React from 'react';
import styled from 'styled-components';

const DisplaySwitch = (props) => {
  const { displayType, onClick } = props;
  return (
    <>
      Switch Display:
      <DisplayOption displayType={displayType} type="text" onClick={() => onClick('text')}><i className="fas fa-font"></i> Text</DisplayOption>
      <DisplayOption displayType={displayType} type="table" onClick={() => onClick('table')}><i className="fas fa-table"></i> Table</DisplayOption>
    </>
  );
};

export default DisplaySwitch;

const DisplayOption = styled.button`
  margin: 0 10px;
  cursor: pointer;
  background-color: ${({ displayType, type }) => displayType === type ? '#4CAF50' : '#909090'};
  border: none;
  color: white;
  padding: 5px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import glossaryList from './data/glossary.json';

const Glossary = () => {
  const glossary = _.map(glossaryList, val => {
    return (
      <GlossaryEntry key={val.term}>
        <Term>{val.term}</Term>
        {_.map(val.description, description => (
          <Desc key={description}>- {description}</Desc>
        ))}
      </GlossaryEntry>
    );
  });
  return (
    <div>
      <div className="page-title">Chaos Fighters 3 Glossary</div>
      {glossary}
    </div>
  );
};

export default Glossary;

// const GlossaryPage = styled.div`
//   box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
//   padding: 5px 20px;
// `;
const GlossaryEntry = styled.div`
  margin-bottom: 10px;
`;
const Term = styled.div`
  font-weight: bold;
`;
const Desc = styled.div`
  margin-left: 10px;
`;

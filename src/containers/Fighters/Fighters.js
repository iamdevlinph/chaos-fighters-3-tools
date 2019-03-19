import React from 'react';
import MaterialTable from 'material-table'
import { columns, makeData, tableOptions } from './utils';

import fighterslist from './data/fighters.json';

export default () => {
  const calculatedData = makeData(fighterslist);
  const tableTitle = 'Fighter Stats'
  return (
    <>
      <MaterialTable
        columns={columns}
        data={calculatedData}
        title={tableTitle}
        options={tableOptions(calculatedData.length)}
      />
    </>
  )
}

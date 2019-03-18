import React from 'react';
import MaterialTable from 'material-table'
import { columns } from './FightersUtil';

export default () => {
  const data = [
    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
  ];
  const tableTitle = 'Fighter Stats'
  return (
    <>
      <MaterialTable
        columns={columns}
        data={data}
        title={tableTitle}
      />
    </>
  )
}

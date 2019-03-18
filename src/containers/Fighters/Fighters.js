import React from 'react';
import MaterialTable from 'material-table'

export default () => {
  const columns = [
    { title: 'Adı', field: 'name' },
    { title: 'Soyadı', field: 'surname' },
    { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
    {
      title: 'Doğum Yeri',
      field: 'birthCity',
      lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    },
  ];
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

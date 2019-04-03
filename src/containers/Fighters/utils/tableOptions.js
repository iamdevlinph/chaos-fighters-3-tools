const tableOptions = dataLen => {
  return {
    emptyRowsWhenPaging: false,
    pageSize: dataLen,
    pageSizeOptions: [10, 25, 50, 100],
    rowStyle(rowData) {
      return {
        background: rowData.typeColor,
      };
    },
    columnsButton: true,
    filtering: true,
    actionsColumnIndex: -1,
  };
};

export default tableOptions;

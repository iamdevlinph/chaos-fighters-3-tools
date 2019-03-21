const tableOptions = (dataLen) => {
  return {
    emptyRowsWhenPaging: false,
    pageSize: dataLen,
    pageSizeOptions: [
      10, 25, 50, 100
    ],
    rowStyle: function (rowData) {
      return {
        background: rowData.typeColor,
      }
    },
    columnsButton: true,
    filtering: true
  }
}

export default tableOptions;

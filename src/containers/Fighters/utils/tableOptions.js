const rowColors = {
  ordinary: '#CBC783',
  rare: '#76BBC4',
  epic: '#DB69AC',
  legendary: '#FFA51A'
}

const tableOptions = (dataLen) => {
  return {
    emptyRowsWhenPaging: false,
    pageSize: dataLen,
    pageSizeOptions: [
      10, 25, 50, 100
    ],
    rowStyle: function (rowData) {
      return {
        background: rowColors[rowData.type],
      }
    },
    columnsButton: true,
    filtering: true
  }
}

export default tableOptions;

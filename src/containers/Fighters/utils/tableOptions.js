const pageSizeOptionsFromLen = (len) => {
  const base = len / 5;
  return [
    Math.floor(1 * base),
    Math.floor(2 * base),
    Math.floor(3 * base),
    Math.floor(4 * base),
    Math.floor(5 * base),
  ]
}

const rowColors = {
  ordinary: '#CBC783',
  rare: '#76BBC4',
  epic: '#DB69AC',
  legendary: '#FFA51A'
}

const tableOptions = (dataLen) => {
  return {
    pageSize: dataLen,
    pageSizeOptions: pageSizeOptionsFromLen(dataLen),
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

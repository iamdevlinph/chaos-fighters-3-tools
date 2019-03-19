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

const tableOptions = (dataLen) => {
  return {
    pageSize: dataLen,
    pageSizeOptions: pageSizeOptionsFromLen(dataLen)
  }
}

export default tableOptions;

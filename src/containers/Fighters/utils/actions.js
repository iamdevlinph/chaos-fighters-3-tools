const actions = ({ addFn, list }) => {
  return [
    rowData => ({
      icon: 'library_add',
      tooltip: 'Add to compare',
      onClick: () => {
        addFn(rowData.name);
      },
      iconProps: {
        style: {
          fontSize: 30,
          color: list.includes(rowData.name) ? 'red' : '#FFF',
        },
      },
    }),
  ];
};

export default actions;

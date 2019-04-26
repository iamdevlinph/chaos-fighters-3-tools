const actions = ({ addFn, list }) => {
  const added = name => {
    return list.includes(name);
  };
  return [
    rowData => ({
      icon: added(rowData.name) ? 'remove_circle' : 'add_circle',
      tooltip: added(rowData.name) ? 'Remove from compare' : 'Add to compare',
      onClick: () => {
        addFn(rowData.name);
      },
      iconProps: {
        style: {
          fontSize: 30,
          color: added(rowData.name) ? 'red' : '#FFF',
        },
      },
    }),
  ];
};

export default actions;

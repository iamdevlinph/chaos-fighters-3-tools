const columns = [
  { title: 'Adı', field: 'name' },
  { title: 'Soyadı', field: 'surname' },
  { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
  {
    title: 'Doğum Yeri',
    field: 'birthCity',
    lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
  },
]
export { columns };

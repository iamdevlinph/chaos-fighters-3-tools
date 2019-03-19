import { StringUtil } from 'common-utils-pkg';

const toTwoDecimal = (val) => val.toFixed(2);
const cellStyle = {
  whiteSpace: 'nowrap',
  padding: '0 10px',
}
const headerStyle = {
  padding: '0px 10px',
  textAlign: 'center'
}

const columns = [
  {
    title: 'Name',
    field: 'name',
    cellStyle,
    headerStyle,
  },
  {
    title: 'Type',
    field: 'type',
    cellStyle,
    headerStyle,
    render: ({ type }) => StringUtil.toTitleCase(type)
  },
  {
    title: 'STR',
    field: 'str',
    cellStyle,
    headerStyle,
  },
  {
    title: 'STR per level',
    field: 'strPerLevel',
    cellStyle,
    headerStyle,
  },
  {
    title: 'STR 1% ATK',
    field: 'strAtkPer',
    cellStyle,
    headerStyle,
  },
  {
    title: 'AGI',
    field: 'agi',
    cellStyle,
    headerStyle,
  },
  {
    title: 'AGI per level',
    field: 'agiPerLevel',
    cellStyle,
    headerStyle,
  },
  {
    title: 'AGI 1 SPD',
    field: 'agiSpdPer',
    cellStyle,
    headerStyle,
  },
  {
    title: 'AGI 1 EVA',
    field: 'agiEvaPer',
    cellStyle,
    headerStyle,
  },
  {
    title: 'END',
    field: 'end',
    cellStyle,
    headerStyle,
  },
  {
    title: 'END per level',
    field: 'endPerLevel',
    cellStyle,
    headerStyle,
  },
  {
    title: 'END 1% HP',
    field: 'endHpPer',
    cellStyle,
    headerStyle,
  },
  {
    title: 'Calculated STR',
    field: 'calcStr',
    cellStyle,
    headerStyle,
  },
  {
    title: 'Calculated ATK %',
    field: 'calcAtk',
    cellStyle,
    headerStyle,
    render: ({ calcAtk }) => `${toTwoDecimal(calcAtk)} %`
  },
  {
    title: 'Calculated AGI',
    field: 'calcAgi',
    cellStyle,
    headerStyle,
  },
  {
    title: 'Calculated SPD',
    field: 'calcSpd',
    cellStyle,
    headerStyle,
    render: ({ calcSpd }) => toTwoDecimal(calcSpd)
  },
  {
    title: 'Calculated EVA',
    field: 'calcEva',
    cellStyle,
    headerStyle,
    render: ({ calcEva }) => toTwoDecimal(calcEva)
  },
  {
    title: 'Calculated END',
    field: 'calcEnd',
    cellStyle,
    headerStyle,
  },
  {
    title: 'Calculated HP %',
    field: 'calcHp',
    cellStyle,
    headerStyle,
    render: ({ calcHp }) => `${toTwoDecimal(calcHp)} %`
  },
  {
    title: 'Expert',
    field: 'expert',
    cellStyle,
    headerStyle,
    render: ({ expert }) => StringUtil.toTitleCase(expert)
  },
  {
    title: 'Weapon',
    field: 'weapon',
    cellStyle,
    headerStyle,
    emptyValue: '-',
    render: ({ weapon }) => StringUtil.toTitleCase(weapon)
  }
];

export default columns;

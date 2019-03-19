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
const defaultColOptions = {
  filtering: false,
  cellStyle,
  headerStyle
}
const columns = [
  {
    ...defaultColOptions,
    title: 'Name',
    field: 'name',
  },
  {
    title: 'Type',
    field: 'type',
    lookup: {
      epic: 'Epic',
      legendary: 'Legendary'
    },
    render: ({ type }) => StringUtil.toTitleCase(type)
  },
  {
    ...defaultColOptions,
    title: 'STR',
    field: 'str',
    hidden: true,
  },
  {
    ...defaultColOptions,
    title: 'STR per level',
    field: 'strPerLevel',
    hidden: true,
  },
  {
    ...defaultColOptions,
    title: 'STR 1% ATK',
    field: 'strAtkPer',
    hidden: true,
  },
  {
    ...defaultColOptions,
    title: 'AGI',
    field: 'agi',
    hidden: true,
  },
  {
    ...defaultColOptions,
    title: 'AGI per level',
    field: 'agiPerLevel',
    hidden: true,
  },
  {
    ...defaultColOptions,
    title: 'AGI 1 SPD',
    field: 'agiSpdPer',
    hidden: true,
  },
  {
    ...defaultColOptions,
    title: 'AGI 1 EVA',
    field: 'agiEvaPer',
    hidden: true,
  },
  {
    ...defaultColOptions,
    title: 'END',
    field: 'end',
    hidden: true,
  },
  {
    ...defaultColOptions,
    title: 'END per level',
    field: 'endPerLevel',
    hidden: true,
  },
  {
    ...defaultColOptions,
    title: 'END 1% HP',
    field: 'endHpPer',
    hidden: true,
  },
  {
    ...defaultColOptions,
    title: 'Calculated STR',
    field: 'calcStr',
    render: ({ calcStr }) => toTwoDecimal(calcStr)
  },
  {
    ...defaultColOptions,
    title: 'Calculated ATK %',
    field: 'calcAtk',
    render: ({ calcAtk }) => `${toTwoDecimal(calcAtk)} %`
  },
  {
    ...defaultColOptions,
    title: 'Calculated AGI',
    field: 'calcAgi',
    render: ({ calcAgi }) => toTwoDecimal(calcAgi)
  },
  {
    ...defaultColOptions,
    title: 'Calculated SPD',
    field: 'calcSpd',
    render: ({ calcSpd }) => toTwoDecimal(calcSpd)
  },
  {
    ...defaultColOptions,
    title: 'Calculated EVA',
    field: 'calcEva',
    render: ({ calcEva }) => toTwoDecimal(calcEva)
  },
  {
    ...defaultColOptions,
    title: 'Calculated END',
    field: 'calcEnd',
    render: ({ calcEnd }) => toTwoDecimal(calcEnd)
  },
  {
    ...defaultColOptions,
    title: 'Calculated HP %',
    field: 'calcHp',
    render: ({ calcHp }) => `${toTwoDecimal(calcHp)} %`
  },
  {
    title: 'Expert',
    field: 'expert',
    lookup: {
      water: 'Water',
      fire: "Fire",
      earth: "Earth",
      thunder: "Thunder",
      wind: "Wind",
      taijutsu: "Taijutsu",
      ninjutsu: "Ninjutsu",
      fuinutsu: "Fuinutsu",
      genjutsu: "Genjutsu",
      healing: "Healing",
    },
    render: ({ expert }) => StringUtil.toTitleCase(expert),
    hidden: true,
  },
  {
    ...defaultColOptions,
    title: 'Weapon',
    field: 'weapon',
    emptyValue: '-',
    render: ({ weapon }) => StringUtil.toTitleCase(weapon)
  }
];

export default columns;

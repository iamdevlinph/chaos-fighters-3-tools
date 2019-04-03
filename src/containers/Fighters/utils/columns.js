import { StringUtil } from 'common-utils-pkg';

// const toTwoDecimal = (val) => val.toFixed(0);
const cellStyle = {
  whiteSpace: 'nowrap',
  padding: '0 10px',
};
const headerStyle = {
  padding: '0px 10px',
  textAlign: 'center',
};
const defaultColOptions = {
  filtering: false,
  cellStyle,
  headerStyle,
  hidden: true,
};
const columns = [
  {
    ...defaultColOptions,
    title: 'Name',
    field: 'name',
    hidden: false,
  },
  {
    ...defaultColOptions,
    title: 'Type',
    field: 'type',
    filtering: true,
    lookup: {
      ordinary: 'Ordinary',
      rare: 'Rare',
      epic: 'Epic',
      legendary: 'Legendary',
    },
    hidden: false,
    render: ({ type }) => StringUtil.toTitleCase(type),
    customSort: (a, b) => a.typeId - b.typeId,
  },
  {
    ...defaultColOptions,
    title: 'ISV STR',
    field: 'str',
  },
  {
    ...defaultColOptions,
    title: 'Growth STR',
    field: 'strGrowth',
  },
  {
    ...defaultColOptions,
    title: 'BMV STR', // 1% ATK
    field: 'strBmv',
  },
  {
    ...defaultColOptions,
    title: 'ISV AGI',
    field: 'agi',
  },
  {
    ...defaultColOptions,
    title: 'Growth AGI',
    field: 'agiGrowth',
  },
  {
    ...defaultColOptions,
    title: 'BMV AGI', // 1 SPD 1 EVA
    field: 'agiBmv',
  },
  // {
  //   ...defaultColOptions,
  //   title: 'AGI 1 EVA',
  //   field: 'agiEvaPer',
  // },
  {
    ...defaultColOptions,
    title: 'ISV END',
    field: 'end',
  },
  {
    ...defaultColOptions,
    title: 'Growth END',
    field: 'endGrowth',
  },
  {
    ...defaultColOptions,
    title: 'BMV END', // 1% HP
    field: 'endBmv',
  },
  {
    ...defaultColOptions,
    title: 'Max STR',
    field: 'calcStr',
    hidden: false,
    render: ({ calcStr }) => calcStr,
    customSort: (a, b) => a.calcStr - b.calcStr,
  },
  {
    ...defaultColOptions,
    title: 'Max %ATK',
    field: 'calcAtk',
    hidden: false,
    render: ({ calcAtk }) => `${calcAtk} %`,
    customSort: (a, b) => a.calcAtk - b.calcAtk,
  },
  {
    ...defaultColOptions,
    title: 'Max AGI',
    field: 'calcAgi',
    hidden: false,
    render: ({ calcAgi }) => calcAgi,
    customSort: (a, b) => a.calcAgi - b.calcAgi,
  },
  {
    ...defaultColOptions,
    title: 'Max SPD/EVA',
    field: 'calcSpd',
    hidden: false,
    render: ({ calcSpd }) => calcSpd,
    customSort: (a, b) => a.calcSpd - b.calcSpd,
  },
  // {
  //   ...defaultColOptions,
  //   title: 'Max EVA',
  //   field: 'calcEva',
  //   hidden: false,
  //   render: ({ calcEva }) => toTwoDecimal(calcEva)
  // },
  {
    ...defaultColOptions,
    title: 'Max END',
    field: 'calcEnd',
    hidden: false,
    render: ({ calcEnd }) => calcEnd,
    customSort: (a, b) => a.calcEnd - b.calcEnd,
  },
  {
    ...defaultColOptions,
    title: 'Max %HP',
    field: 'calcHp',
    hidden: false,
    render: ({ calcHp }) => `${calcHp} %`,
    customSort: (a, b) => a.calcHp - b.calcHp,
  },
  {
    ...defaultColOptions,
    title: 'Expert',
    field: 'expert',
    filtering: true,
    lookup: {
      water: 'Water',
      fire: 'Fire',
      earth: 'Earth',
      thunder: 'Thunder',
      wind: 'Wind',
      taijutsu: 'Taijutsu',
      ninjutsu: 'Ninjutsu',
      fuinutsu: 'Fuinutsu',
      genjutsu: 'Genjutsu',
      healing: 'Healing',
    },
    hidden: false,
    render: ({ expert }) => StringUtil.toTitleCase(expert),
  },
  {
    ...defaultColOptions,
    title: 'Weapon',
    field: 'weapon',
    emptyValue: '-',
    render: ({ weapon }) => StringUtil.toTitleCase(weapon),
  },
];

export default columns;

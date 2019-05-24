import _ from 'lodash';

const typeColors = {
  ordinary: '#CBC783',
  rare: '#76BBC4',
  epic: '#DB69AC',
  legendary: '#FFA51A',
};

const createObj = (val, level) => {
  const newLevel = level == 1 ? level - 1 : level;
  const calcStr = Math.ceil(val.str + val.strGrowth * newLevel);
  const calcAgi = Math.ceil(val.agi + val.agiGrowth * newLevel);
  const calcEnd = Math.ceil(val.end + val.endGrowth * newLevel);
  return {
    ...val,
    calcStr,
    calcAtk: Math.ceil(calcStr / val.strBmv),
    calcAgi,
    calcSpd: Math.ceil(calcAgi / val.agiBmv),
    calcEva: Math.ceil(calcAgi / val.agiEvaPer),
    calcEnd,
    calcHp: Math.ceil(calcEnd / val.endBmv),
    typeColor: typeColors[val.type],
  };
};

export default (data, level = 30, displayType = 'text') => {
  let calculatedData;
  switch (displayType) {
    case 'table':
      calculatedData = _.chain(data)
        .orderBy(['typeId', 'name'], ['asc', 'asc'])
        .map(val => createObj(val, level))
        .reject('__ignore')
        .value();
      break;
    default:
      calculatedData = _.chain(data)
        .reject('__ignore')
        .map(val => createObj(val, level))
        .orderBy(['expert', 'typeId', 'name'], ['asc', 'asc', 'asc'])
        .groupBy('expert')
        .toPairs()
        .value();
  }

  return calculatedData;
};

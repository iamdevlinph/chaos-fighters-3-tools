import _ from 'lodash';

const typeColors = {
  ordinary: '#CBC783',
  rare: '#76BBC4',
  epic: '#DB69AC',
  legendary: '#FFA51A',
};

const createObj = (val, level) => {
  const newLevel = level == 1 ? level - 1 : level;
  const calcStr = (val.str + val.strGrowth * newLevel).toFixed();
  const calcAgi = (val.agi + val.agiGrowth * newLevel).toFixed();
  const calcEnd = (val.end + val.endGrowth * newLevel).toFixed();
  return {
    ...val,
    calcStr,
    calcAtk: (calcStr / val.strBmv).toFixed(),
    calcAgi,
    calcSpd: (calcAgi / val.agiBmv).toFixed(),
    calcEva: (calcAgi / val.agiEvaPer).toFixed(),
    calcEnd,
    calcHp: (calcEnd / val.endBmv).toFixed(),
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

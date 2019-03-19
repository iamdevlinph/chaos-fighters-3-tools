import _ from 'lodash';

export default (data, level = 1) => {
  const calculatedData = _.chain(data)
    .orderBy(['type', 'name'], ['asc', 'asc'])
    .map((val) => {
      const calcStr = val.str + (val.strPerLevel * level);
      const calcAgi = val.agi + (val.agiPerLevel * level);
      const calcEnd = val.end + (val.endPerLevel * level);
      return {
        ...val,
        calcStr,
        calcAtk: calcStr / val.strAtkPer,
        calcAgi,
        calcSpd: calcAgi / val.agiSpdPer,
        calcEva: calcAgi / val.agiEvaPer,
        calcEnd,
        calcHp: calcEnd / val.endHpPer,
      }
    })
    .reject('__ignore')
    .value();

  return calculatedData;
}

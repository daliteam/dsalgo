const setValue = {
  S: (data) => data,
  D: (data) => Math.pow(data, 2),
  T: (data) => Math.pow(data, 3),
  "*": (data) => 2 * data,
  "#": (data) => -1 * data,
  "+": (strData, nextStrData) => strData + nextStrData,
};

const getScoresArr = (dartResult) => {
  const scoresArr = [];
  let isLastDataStr = false;

  const length = dartResult.length;
  for (let i = 0; i < length; i += 1) {
    const nowData = dartResult[i];
    const isNowDataStr = Number.isNaN(parseInt(nowData));

    if (isNowDataStr) {
      const lastScore = scoresArr.pop();
      scoresArr.push(
        ...(nowData === "*" && scoresArr.length
          ? [setValue[nowData](scoresArr.pop()), setValue[nowData](lastScore)]
          : [setValue[nowData](lastScore)])
      );
    } else {
      scoresArr.push(
        !i || isLastDataStr ? nowData : setValue["+"](scoresArr.pop(), nowData)
      );
    }

    isLastDataStr = isNowDataStr;
  }
  return scoresArr;
};

const solution = (dartResult) => {
  return getScoresArr(dartResult).reduce((acc, cur) => acc + parseInt(cur), 0);
};

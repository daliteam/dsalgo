function solution(info, query) {
  let answer = [];
  const infoArr = info.map((item) => {
    return item.split(" ");
  });
  const queryArr = query.map((item) =>
    item.split(" ").filter((item) => item !== "and")
  );

  for (let i = 0; i < queryArr.length; i++) {
    const answerArr = infoArr.filter(
      (info) =>
        (queryArr[i][0] === "-" || info[0] === queryArr[i][0]) &&
        (queryArr[i][1] === "-" || info[1] === queryArr[i][1]) &&
        (queryArr[i][2] === "-" || info[2] === queryArr[i][2]) &&
        (queryArr[i][3] === "-" || info[3] === queryArr[i][3]) &&
        parseInt(info[4]) >= parseInt(queryArr[i][4])
    );
    answer.push(answerArr.length);
  }
  return answer;
}

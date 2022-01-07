function solution(files) {
  const answer = [...files];

  answer.sort((a, b) => {
    const aHead = a.match(/^\D+/g)[0].toLowerCase();
    const bHead = b.match(/^\D+/g)[0].toLowerCase();
    const aNumber = parseInt(a.match(/\d+/)[0], 10);
    const bNumber = parseInt(b.match(/\d+/)[0], 10);

    if (aHead < bHead) {
      return -1;
    }

    if (aHead > bHead) {
      return 1;
    }

    return aNumber - bNumber;
  });

  return answer;
}

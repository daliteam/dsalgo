const makeInitDictionary = () => {
  const dictionary = {};

  for (let i = 65; i <= 90; i += 1) {
    dictionary[String.fromCharCode(i)] = i - 64;
  }

  return dictionary;
};

function solution(msg) {
  const answer = [];
  const dictionary = makeInitDictionary();
  let lastIndex = 26;

  for (let i = 0; i < msg.length; i += 1) {
    let w = msg[i];

    let right = i + 1;
    while (right < msg.length) {
      right += 1;

      const now = msg.slice(i, right);
      const before = msg.slice(i, right - 1);

      if (!dictionary[now]) {
        w = before;
        lastIndex += 1;
        dictionary[now] = lastIndex;
        break;
      } else {
        w = now;
      }
    }

    answer.push(dictionary[w]);

    if (w.length > 1) {
      i = w.length - 1 + i;
    }
  }

  return answer;
}

function solution(msg) {
  var answer = [];
  const lzwArr = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  let currentStr = msg[0];

  for (let i = 1; i < msg.length; i++) {
    const findStr = (str) => str === currentStr.slice(0, -1);
    currentStr += msg[i];

    if (!lzwArr.includes(currentStr)) {
      answer.push(lzwArr.findIndex(findStr) + 1);
      lzwArr.push(currentStr);
      currentStr = currentStr.slice(-1);
    }
  }
  answer.push(lzwArr.findIndex((item) => item === currentStr) + 1);
  return answer;
}

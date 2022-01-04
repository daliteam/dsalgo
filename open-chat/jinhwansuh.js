function solution(record) {
  let answer = [];
  let id = {};

  // 고유한 아이디를 찾는 로직
  for (const chatting of record) {
    var userName = chatting.split(' ');
    if (userName[0] == 'Enter') {
      id[userName[1]] = userName[2];
    } else if (userName[0] == 'Change') {
      id[userName[1]] = userName[2];
    }
  }

  // 마지막에 출력될 메세지를 찾는 로직
  let message = '';
  for (const chatting of record) {
    message = '';
    var userName = chatting.split(' ');
    if (userName[0] == 'Enter') {
      message = id[userName[1]] + '님이 들어왔습니다.';
      answer.push(message);
    } else if (userName[0] == 'Leave') {
      message = id[userName[1]] + '님이 나갔습니다.';
      answer.push(message);
    }
  }
  return answer;
}

function solution(record) {
  const answer = [];
  let id = {};

  // 고유한 아이디를 찾는 로직
  for (const chatting of record) {
    const chattingArray = chatting.split(' ');
    // chattingArray = [ 'Enter', 'uid1234', 'Muzi' ]
    if (chattingArray[0] == 'Enter') {
      id[chattingArray[1]] = chattingArray[2];
    } else if (chattingArray[0] == 'Change') {
      id[chattingArray[1]] = chattingArray[2];
    }
  }

  // 마지막에 출력될 메세지를 찾는 로직
  let message = '';
  for (const chatting of record) {
    message = '';
    const chattingArray = chatting.split(' ');
    if (chattingArray[0] == 'Enter') {
      message = id[chattingArray[1]] + '님이 들어왔습니다.';
      answer.push(message);
    } else if (chattingArray[0] == 'Leave') {
      message = id[chattingArray[1]] + '님이 나갔습니다.';
      answer.push(message);
    }
  }
  return answer;
}

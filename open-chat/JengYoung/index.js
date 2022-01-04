const ENTER_MESSAGE = '님이 들어왔습니다.';
const LEAVE_MESSAGE = '님이 나갔습니다.';

const solution = record => {
  const nicknames = {};
  const result = [];

  const updateNickname = (id, nickname) => nicknames[id] = nickname;
  const handler = {
    Enter: (id, nickname) => {
      updateNickname(id, nickname)
      result.push([id, ENTER_MESSAGE]);
    },
    Leave: (id) => result.push([id, LEAVE_MESSAGE]),
    Change: (id, nickname) => updateNickname(id, nickname)
  };

  record.forEach((commands) => {
    const [command, id, nickname] = commands.split(' ');
    handler[command](id, nickname)
  })

  return result.map(([id, message]) => `${nicknames[id]}${message}`);
}
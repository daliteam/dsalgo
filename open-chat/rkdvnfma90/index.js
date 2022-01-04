function solution(record) {
  const answer = [];
  const userNameInformation = {};

  const createAlertMessage = (userId, behavior) => {
    if (behavior === 'Enter') {
      return `${userNameInformation[userId]}님이 들어왔습니다.`;
    }

    return `${userNameInformation[userId]}님이 나갔습니다.`;
  };

  record.forEach(rec => {
    const [behavior, userId, userName] = rec.split(' ');

    if (behavior === 'Leave') {
      answer.push([userId, behavior]);
      return;
    }

    if (behavior === 'Enter') {
      answer.push([userId, behavior]);
    }

    userNameInformation[userId] = userName;
  });

  return answer.map(([userId, behavior]) =>
    createAlertMessage(userId, behavior)
  );
}

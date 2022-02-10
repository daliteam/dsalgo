const removeDuplicate = arr => {
  return [...new Set(arr.join('@').split('@'))].map(v => v.split(','));
};

const getPermutations = (arr, number) => {
  const result = [];

  if (number === 1) return arr.map(data => [data]);

  arr.forEach((now, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, number - 1);
    const added = permutations.map(permutation => [now, ...permutation]);
    result.push(...added);
  });

  return result;
};

const isEqualId = (userId, banndedId) => {
  if (userId.length !== banndedId.length) {
    return false;
  }

  for (let i = 0; i < banndedId.length; i += 1) {
    const b = banndedId[i];
    const u = userId[i];

    if (b === '*') {
      continue;
    }

    if (b !== u) {
      return false;
    }
  }

  return true;
};

const isEqualArray = (users, bans) => {
  const newUsers = [...users];

  for (const ban of bans) {
    let result = false;

    for (let i = 0; i < newUsers.length; i += 1) {
      const user = newUsers[i];

      if (isEqualId(user, ban)) {
        result = true;
        newUsers.splice(i, 1);
        break;
      }
    }
  }

  return newUsers.length === 0;
};

function solution(userIds, banndedIds) {
  let answer = 0;

  const allPermutations = removeDuplicate(
    getPermutations(userIds, banndedIds.length).map(value => {
      return value.sort();
    })
  );

  for (const users of allPermutations) {
    if (!isEqualArray(users, banndedIds)) {
      continue;
    }

    answer += 1;
  }

  return answer;
}

// 이중우선 순위 큐 https://programmers.co.kr/learn/courses/30/lessons/42628

function solution(operations) {
  const newArr = operations.map((item) => item.split(' '));
  const queue = [];
  newArr.map((item) => {
    if (item[0] === 'I') {
      queue.push(+item[1]);
    } else {
      if (queue.length) {
        if (item[1] === '1') {
          const maxNum = Math.max(...queue);
          queue.splice(queue.indexOf(maxNum), 1);
        } else {
          const minNum = Math.min(...queue);
          queue.splice(queue.indexOf(minNum), 1);
        }
      }
    }
  });
  return queue.length ? [Math.max(...queue), Math.min(...queue)] : [0, 0];
}

function solution(id_list, report, k) {
  var answer = Array.from({ length: id_list.length }, () => 0);

  const set = new Set(report);
  const newReport = [...set];
  const reportArray = {};
  const reportedIds = [];
  id_list.map((id) => {
    reportArray[id] = [];
  });

  newReport.reduce((acc, cur) => {
    const [who, reported] = cur.split(' ');
    acc[reported] = (acc[reported] || 0) + 1;
    if (!reportArray[who].includes(reported)) reportArray[who].push(reported);
    if (acc[reported] >= k && !reportedIds.includes(reported))
      reportedIds.push(reported);
    return acc;
  }, {});

  let i = 0;
  for (const [id, num] of Object.entries(reportArray)) {
    reportedIds.map((id) => {
      if (num.includes(id)) {
        answer[i]++;
      }
    });
    i++;
  }

  return answer;
}

// 실패율 https://programmers.co.kr/learn/courses/30/lessons/42889?language=javascript

function solution(N, stages) {
  const array = [];
  const people = stages.length;
  let restPeople = people;

  const res = stages.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  for (let i = 0; i < N; i++) {
    let nowPeople = res[i + 1] || 0;
    array.push([i + 1, nowPeople / restPeople]);
    restPeople -= nowPeople;
  }

  array.sort((a, b) => b[1] - a[1]);
  return array.map((item) => item[0]);
}

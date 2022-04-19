// 신고 결과 받기

function solution(id_list, report, k) {
  const answer = [];
  const reportList = {};
  id_list.reduce((acc, curr) => {
    reportList[curr] = [];
    return acc;
  }, reportList);
  // console.log(reportList);

  report.forEach((reported) => {
    const [who, target] = reported.split(' ');
    const included = reportList[who].includes(target);
    included || reportList[who].push(target);
  });
  // console.log(reportList);

  const reportedIds = [];

  for (const id of id_list) {
    let count = 0;
    for (const who in reportList) {
      if (reportList[who].includes(id)) count++;
    }
    if (count >= k) reportedIds.push(id);
  }

  for (const who in reportList) {
    let reportCount = 0;
    for (const id of reportedIds) {
      if (reportList[who].includes(id)) reportCount++;
    }
    answer.push(reportCount);
  }

  // console.log(reportedIds);

  return answer;
}

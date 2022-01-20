function hourToMinute(time) {
  const timeArr = time.split(":");
  return parseInt(timeArr[0]) * 60 + parseInt(timeArr[1]);
}

function solution(fees, records) {
  const parkingRecords = [];

  // 차량 번호(carNum), 입출차기록(record-분으로 변환)을 키로 가진 객체 배열 만들기
  for (let i = 0; i < records.length; i++) {
    const record = records[i].split(" ");

    // 기존 기록에 동일 차량이 있는지 체크
    let carIndex = parkingRecords.findIndex(
      (item) => item.carNum === record[1]
    );

    if (carIndex === -1) {
      // 없으면, 객체 새로 생성
      const newCarRecord = {};
      newCarRecord.carNum = record[1];
      newCarRecord.record = [hourToMinute(record[0])];
      parkingRecords.push(newCarRecord);
    } else {
      // 있으면, 입출차기록을 추가
      parkingRecords[carIndex].record.push(hourToMinute(record[0]));
    }
  }
  // 주차 요금 계산
  parkingRecords.forEach((item) => {
    // 입출차기록 배열의 길이가 홀수인 경우, 마지막에 23*60+59 추가
    if (item.record.length % 2) {
      item.record.push(23 * 60 + 59);
    }

    let totalMin = 0;
    for (let i = 0; i < item.record.length - 1; i += 2) {
      totalMin += item.record[i + 1] - item.record[i];
    }
    totalMin <= fees[0]
      ? (item.fee = fees[1])
      : (item.fee =
          fees[1] + Math.ceil((totalMin - fees[0]) / fees[2]) * fees[3]);
  });

  // 차량 번호가 작은 순서대로 sort, 주차 요금만 배열에 담기
  const answer = parkingRecords
    .sort((a, b) => {
      return a.carNum - b.carNum;
    })
    .map((item) => item.fee);

  return answer;
}

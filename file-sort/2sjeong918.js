function solution(files) {
  const fileNameList = [];
  const isNumberReg = /[0-9]/;

  //1. 세개로 쪼갠다
  for (let i = 0; i < files.length; i++) {
    const file = {};
    let startIndex = 0;
    for (let j = 0; j < files[i].length; j++) {
      // tail이 있는 경우
      if (startIndex !== 0 && !isNumberReg.test(files[i][j])) {
        file.number = files[i].substring(startIndex, j);
        file.tail = files[i].substring(j);
        break;
      }
      // head 추출
      if (startIndex === 0 && isNumberReg.test(files[i][j])) {
        file.head = files[i].substring(startIndex, j);
        startIndex = j;
      }
      // tail이 없는 경우
      if (startIndex !== 0 && j === files[i].length - 1) {
        file.number = files[i].substring(startIndex);
        file.tail = "";
      }
    }
    fileNameList.push(file);
  }

  //2. head끼리 비교해서 1차 순서를 정리한다
  fileNameList.sort((a, b) => {
    let lowerA = a.head.toLowerCase();
    let lowerB = b.head.toLowerCase();
    if (lowerA < lowerB) {
      return -1;
    }
    if (lowerA > lowerB) {
      return 1;
    }

    //3. head가 같으면, number끼리 비교해서 2차 순서를 정리한다
    if (lowerA === lowerB) {
      let numA = parseInt(a.number);
      let numB = parseInt(b.number);
      return numA - numB;
    }
  });

  //4. 파일명을 합친다
  const answer = fileNameList.map((file) => {
    return file["head"] + file["number"] + file["tail"];
  });

  return answer;
}

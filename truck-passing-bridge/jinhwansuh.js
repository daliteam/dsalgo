function solution(bridge_length, weight, truck_weights) {
  let passingTruckArray = new Array(bridge_length).fill(0);
  let sumWeight = 0;
  let time = 1;
  let passedTruckArray = [];

  while (truck_weights.length || sumWeight) {
    if (sumWeight + truck_weights[0] <= weight) {
      const newPassingTruck = truck_weights.shift();
      sumWeight += newPassingTruck;
      passingTruckArray[0] = newPassingTruck;
    }

    const passedTruck = passingTruckArray.pop();
    passingTruckArray.unshift(0);

    if (passedTruck) {
      passedTruckArray.push(passedTruck);
      sumWeight -= passedTruck;
    }

    time += 1;
  }

  return time;
}

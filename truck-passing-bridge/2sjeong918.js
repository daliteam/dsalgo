function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let currentWeight = 0;
  let waitingTruckIndex = 0;
  const truckPassingBridge = Array.from({ length: bridge_length }, () => 0);

  while (truckPassingBridge.length) {
    // 트럭이 다리를 건너편에 도착한 경우
    // 출발할 트럭이 없고, 건너는 중인 트럭만 있을 경우
    if (
      truckPassingBridge.length >= bridge_length ||
      waitingTruckIndex >= truck_weights.length
    ) {
      const arrivedTruck = truckPassingBridge.shift();
      currentWeight -= arrivedTruck;
    }
    // 새로운 트럭이 출발할 수 있는 경우
    if (
      truckPassingBridge.length < bridge_length &&
      waitingTruckIndex < truck_weights.length
    ) {
      // 새로운 트럭을 출발시키는 경우
      if (currentWeight + truck_weights[waitingTruckIndex] <= weight) {
        truckPassingBridge.push(truck_weights[waitingTruckIndex]);
        currentWeight += truck_weights[waitingTruckIndex];
        waitingTruckIndex += 1;
        // 무게때문에 새로운 트럭을 출발시킬 수 없는 경우
      } else {
        truckPassingBridge.push(0);
      }
    }

    time++;
  }

  return time;
}

// solution(2, 10, [7, 4, 5, 6]);

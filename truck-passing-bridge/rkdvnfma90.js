const checkWeight = (weight, totalWeightOnBridge) => {
  return weight >= totalWeightOnBridge;
};

function solution(bridge_length, weight, truck_weights) {
  truck_weights.reverse();

  const bridge = [];
  const trucksCount = truck_weights.length;

  let passedTrucksCount = 0;
  let answer = 1;

  bridge.push(truck_weights.pop());

  while (passedTrucksCount < trucksCount) {
    if (bridge.length === bridge_length) {
      const firstOfBridge = bridge.shift();
      if (firstOfBridge !== 0) {
        passedTrucksCount += 1;
      }
    }

    const nowTruck = truck_weights[truck_weights.length - 1];
    const totalWeightOnBridge = bridge.reduce((acc, cur) => acc + cur) + nowTruck;

    if (checkWeight(weight, totalWeightOnBridge)) {
      bridge.push(truck_weights.pop());
    } else {
      bridge.push(0);
    }

    answer += 1;
  }

  return answer;
}

function solution(bridge_length, weight, truck_weights) {
  const bridge = Array.from({ length: bridge_length }, () => 0);
  const lastIndex = bridge_length - 1;

  const trucksAfterBridge = [];
  const truckLength = truck_weights.length;

  let count = 0;

  while (truck_weights.length > 0) {
    count++;

    unloadTruckOnBridge();
    loadTruckOnBridge();
  }

  while (trucksAfterBridge.length < truckLength) {
    count++;
    unloadTruckOnBridge();
  }

  return count;

  function loadTruckOnBridge() {
    const truckToGo = truck_weights.shift();
    const bridgePlusTruck = bridge.reduce((a, b) => a + b) + truckToGo;

    if (bridgePlusTruck <= weight) {
      bridge[lastIndex] = truckToGo;
    } else {
      truck_weights.unshift(truckToGo);
    }
  }

  function unloadTruckOnBridge() {
    const truckOnBridge = bridge.shift();
    bridge.push(0);

    if (truckOnBridge) {
      trucksAfterBridge.push(truckOnBridge);
    }
  }
}

function testAll() {
  const inputs = [
    { bridge_length: 2, weight: 10, truck_weights: [7, 4, 5, 6] },
    { bridge_length: 100, weight: 100, truck_weights: [10] },
    {
      bridge_length: 100,
      weight: 100,
      truck_weights: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    },
  ];
  const expecteds = [8, 101, 110];

  inputs.forEach((input, i) => {
    assert(
      expecteds[i],
      solution(input.bridge_length, input.weight, input.truck_weights)
    );
  });
}

function assert(expected, actual) {
  const result = JSON.stringify(expected) === JSON.stringify(actual);

  console.log({ expected, actual, result });
}

function testProcess() {
  const expected = 8;

  const limit = 10;
  const trucks = [7, 4, 5, 6];
  const size = 2;
  const bridge = Array.from({ length: size }, () => 0);
  console.log(bridge);

  const lastIndex = size - 1;

  const trucksAfterBridge = [];
  const truckLength = trucks.length;

  console.log(truckLength);

  let count = 0;

  while (trucks.length > 0) {
    console.log("남은트럭", trucks.length);

    // 1초가 흐르면
    count++;
    // console.log("경과시간", count);

    // console.log("현재 다리", bridge);

    // 다리 한칸씩 지나가기
    const truckOnBridge = bridge.shift();
    // console.log("다리에 있는 트럭", truckOnBridge);
    bridge.push(0);

    if (truckOnBridge) {
      trucksAfterBridge.push(truckOnBridge);
      // console.log("다리를 지난 트럭", trucksAfterBridge);
    }

    // 다리에 올리기
    const truckToGo = trucks.shift();
    // console.log("꺼낸트럭", truckToGo);
    const bridgePlusTruck = bridge.reduce((a, b) => a + b) + truckToGo;
    // console.log({ bridgePlusTruck });

    if (bridgePlusTruck <= limit) {
      bridge[lastIndex] = truckToGo;
    } else {
      trucks.unshift(truckToGo);
    }

    // console.log("다리를건너는트럭", bridge);

    console.log({
      count,
      trucksAfterBridge,
      bridge,
      trucks,
    });
  }

  console.log(trucksAfterBridge.length, truckLength);

  while (trucksAfterBridge.length < truckLength) {
    count++;
    const truckOnBridge = bridge.shift();
    bridge.push(0);

    if (truckOnBridge) {
      trucksAfterBridge.push(truckOnBridge);
    }
  }

  console.log(count);

  assert(8, count);
}

// testProcess();
testAll();

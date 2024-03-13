// Time complexity

// findNemo is O(n)

const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];
const large = new Array(100000).fill("nemo");

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
  let t1 = performance.now();
  console.log(`Call to find Nemo took ${t1 - t0} milliseconds`);
}

findNemo(large);

// logFirst is O(1)

const boxes = [0, 1, 2, 3, 4, 5];
function logFirst(boxes) {
  console.log(boxes[0]);
}

logFirst(boxes);

// logAllPairsOfArray is O(n^2)

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxes);

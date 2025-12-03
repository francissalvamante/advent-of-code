let batteries;
process.stdin.setEncoding("utf8");
process.stdin.on("data", function (chunk) {
  let total = 0;
  batteries = chunk.split("\n");

  for (battery of batteries) {
    total += +getMaxJoltage(battery);
  }
  console.log("total Joltage:", total);
});

const getMaxJoltage = (batt) => {
  const k = 12;
  const stack = [];
  const n = batt.length;

  for (let i = 0; i < n; i++) {
    const digit = batt[i];

    while (
      stack.length > 0 &&
      digit > stack[stack.length - 1] &&
      stack.length - 1 + (n - i) >= k
    ) {
      stack.pop();
    }

    if (stack.length < k) {
      stack.push(digit);
    }
  }

  return stack.slice(0, k).join("");
};

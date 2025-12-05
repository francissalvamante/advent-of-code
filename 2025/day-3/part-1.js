let batteries;
process.stdin.setEncoding("utf8");
process.stdin.on("data", function (chunk) {
  let total = 0;
  batteries = chunk.split("\n");
  for (battery of batteries) {
    total += getMaxJoltage(battery);
  }

  console.log("total Joltage:", total);
});

const getMaxJoltage = (batt) => {
  let maxJoltage = 0;
  for (var i = 0; i < batt.length - 1; i++) {
    let joltage = +batt[i] * 10;
    for (var j = i + 1; j < batt.length; j++) {
      joltage += +batt[j];
      if (joltage > maxJoltage) maxJoltage = joltage;

      joltage -= +batt[j];
    }
  }
  // console.log(maxJoltage);
  return maxJoltage;
};

process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  let houses = Array.from({ length: 1 }, () => Array(1).fill(0));
  let startI = 0;
  let startJ = 0;
  let first = true;
  let count = 0;

  for (dir of chunk) {
    if (first) {
      houses[startI][startJ] += 1;
      count++;
      first = false;
    }

    console.log(startI, startJ);

    if (dir === "^") {
      startI -= 1;
    } else if (dir === "v") {
      startI += 1;
    } else if (dir === "<") {
      startJ -= 1;
    } else {
      startJ += 1;
    }

    if (startI < 0) {
      // add new row on top
      houses.unshift(Array(houses[0].length).fill(0));
      startI = 0;
    }

    if (startI === houses.length) {
      // add new row at the bottom
      houses.push(Array(houses[0].length).fill(0));
    }

    if (startJ < 0) {
      // add column to the left
      houses = houses.map((row) => {
        row.unshift(0);
        return row;
      });

      startJ = 0;
    }

    if (startJ === houses[0].length) {
      // add column to the right
      houses = houses.map((row) => {
        row.push(0);
        return row;
      });
    }

    houses[startI][startJ] += 1;
    if (houses[startI][startJ] <= 1) {
      count++;
    }

    console.log(startI, startJ, dir);
    // console.log(houses);
    console.log("-------------------------");
  }

  console.log(count, "<- answer");
});

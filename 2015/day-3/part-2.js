process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  let instructions = chunk.trimEnd();
  let houses = Array.from({ length: 1 }, () => Array(1).fill(0));
  let santa = [0, 0];
  let roboSanta = [0, 0];
  let count = 0;

  for (let i = 0; i < instructions.length; i++) {
    if (i % 2 == 0) {
      // Santa's turn
      if (i == 0) {
        houses[santa[0]][santa[1]] += 1;
        count++;
      }

      if (instructions[i] === "^") {
        santa[0] -= 1;
      } else if (instructions[i] === "v") {
        santa[0] += 1;
      } else if (instructions[i] === "<") {
        santa[1] -= 1;
      } else {
        santa[1] += 1;
      }

      if (santa[0] < 0) {
        // add new row on top
        houses.unshift(Array(houses[0].length).fill(0));
        santa[0] = 0;
        roboSanta[0] += 1;
      }

      if (santa[0] === houses.length) {
        // add new row at the bottom
        houses.push(Array(houses[0].length).fill(0));
      }

      if (santa[1] < 0) {
        // add column to the left
        houses = houses.map((row) => {
          row.unshift(0);
          return row;
        });

        santa[1] = 0;
        roboSanta[1] += 1;
      }

      if (santa[1] === houses[0].length) {
        // add column to the right
        houses = houses.map((row) => {
          row.push(0);
          return row;
        });
      }

      houses[santa[0]][santa[1]] += 1;
      if (houses[santa[0]][santa[1]] <= 1) {
        count++;
      }
    } else {
      // Robo-Santa's turn
      if (i == 1) {
        houses[roboSanta[0]][roboSanta[1]] += 1;
      }

      if (instructions[i] === "^") {
        roboSanta[0] -= 1;
      } else if (instructions[i] === "v") {
        roboSanta[0] += 1;
      } else if (instructions[i] === "<") {
        roboSanta[1] -= 1;
      } else {
        roboSanta[1] += 1;
      }

      if (roboSanta[0] < 0) {
        // add new row on top
        houses.unshift(Array(houses[0].length).fill(0));
        roboSanta[0] = 0;
        santa[0] += 1;
      }

      if (roboSanta[0] === houses.length) {
        // add new row at the bottom
        houses.push(Array(houses[0].length).fill(0));
      }

      if (roboSanta[1] < 0) {
        // add column to the left
        houses = houses.map((row) => {
          row.unshift(0);
          return row;
        });

        roboSanta[1] = 0;
        santa[1] += 1;
      }

      if (roboSanta[1] === houses[0].length) {
        // add column to the right
        houses = houses.map((row) => {
          row.push(0);
          return row;
        });
      }

      houses[roboSanta[0]][roboSanta[1]] += 1;
      if (houses[roboSanta[0]][roboSanta[1]] <= 1) {
        count++;
      }
    }

    // console.log(i % 2 == 0 ? "Santa" : "Robo-Santa");
    // console.log(houses);
    // console.log("--------------");
  }

  console.log(count, "<- answer");
});

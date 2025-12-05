const fs = require("fs");

process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  let instructions = chunk.trim().split(/\r\n/);
  let lights = Array.from({ length: 1000 }, () => Array(1000).fill(false));

  instructions.forEach((instruction, idx) => {
    let split = instruction.split(" ");
    // console.log(split);
    if (split[0] === "toggle") {
      // console.log("toggle");
      let [x1, y1] = split[1].split(",").map(Number);
      let [x2, y2] = split[split.length - 1].split(",").map(Number);

      const x1f = Math.min(x1, x2),
        x2f = Math.max(x1, x2);
      const y1f = Math.min(y1, y2),
        y2f = Math.max(y1, y2);

      for (let i = y1f; i <= y2f; i++) {
        for (let j = x1f; j <= x2f; j++) {
          lights[i][j] = !lights[i][j];
        }
      }
    } else {
      // console.log("turn");
      let [x1, y1] = split[2].split(",").map(Number);
      let [x2, y2] = split[split.length - 1].split(",").map(Number);

      const x1f = Math.min(x1, x2),
        x2f = Math.max(x1, x2);
      const y1f = Math.min(y1, y2),
        y2f = Math.max(y1, y2);

      for (let i = y1f; i <= y2f; i++) {
        for (let j = x1f; j <= x2f; j++) {
          lights[i][j] = split[1] === "on" ? true : false;
        }
      }
    }
  });

  let lightsOn = 0;
  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
      lightsOn += lights[i][j] ? 1 : 0;
    }
  }
  console.log(lightsOn, "<- answer");
});

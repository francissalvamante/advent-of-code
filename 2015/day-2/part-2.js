process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  let packages = chunk.split("\n");
  let total = 0;
  packages.forEach((package) => {
    const min1 = +package.split("x").sort((a, b) => a - b)[0] * 2;
    const min2 = +package.split("x").sort((a, b) => a - b)[1] * 2;
    const [l, w, h] = package.split("x").map(Number);

    total += l * w * h + (min1 + min2);
  });

  console.log("total", total);
});

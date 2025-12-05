process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  let packages = chunk.split("\n");
  let total = 0;
  packages.forEach((package) => {
    const [l, w, h] = package.split("x");
    let lw = l * w;
    let wh = w * h;
    let hl = h * l;

    // console.log(
    //   l * w,
    //   w * h,
    //   h * l,
    //   "|",
    //   Math.min(lw, Math.min(wh, hl)),
    //   2 * (lw + wh + hl) + Math.min(l * w, Math.min(w * h, h * l)),
    //   "->",
    //   package
    // );
    // console.log("--------------------------------");

    total += 2 * (lw + wh + hl) + Math.min(lw, Math.min(wh, hl));
  });

  console.log("total", total);
});

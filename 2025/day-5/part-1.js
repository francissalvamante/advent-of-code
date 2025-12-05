process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  const raw = chunk.trimEnd();

  const [section1, section2] = raw.split(/\r?\n\r?\n/);
  const ranges = section1.split(/\r?\n/);
  const items = section2.split(/\r?\n/);

  let numFresh = 0;

  items.forEach((item) => {
    let fresh = false;
    ranges.forEach((range) => {
      const [min, max] = range.split("-").map(Number);
      if (+item >= min && +item <= max) {
        fresh = true;
        return;
      }
    });

    if (fresh) {
      numFresh++;
    }
  });

  console.log(numFresh, "<- answer");
});

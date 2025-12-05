process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  const raw = chunk.trimEnd();

  const [section1] = raw.split(/\r?\n\r?\n/);
  const ranges = section1.split(/\r?\n/);

  const intervals = ranges.map((range) => {
    const [min, max] = range.split("-").map(Number);
    return [min, max];
  });

  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [];
  let [currStart, currEnd] = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start <= currEnd + 1) {
      currEnd = Math.max(currEnd, end);
    } else {
      merged.push([currStart, currEnd]);
      [currStart, currEnd] = [start, end];
    }
  }
  merged.push([currStart, currEnd]);

  let freshCnt = 0;
  for (const [start, end] of merged) {
    freshCnt += end - start + 1;
  }

  // Brute force with Set isn't optimal for this problem (Memory Overflow)
  // const freshIds = new Set();
  // ranges.forEach((range) => {
  //   const [min, max] = range.split("-").map(Number);
  //   for (var i = min; i <= max; i++) {
  //     freshIds.add(i);
  //   }
  // });

  console.log(freshCnt, "<- answer");
});

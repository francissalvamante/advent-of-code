process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  let strings = chunk.split(/\r\n/);

  const letterPairNoOverlap = (s) => {
    for (let i = 0; i < s.length - 1; i++) {
      let pair = s[i] + s[i + 1];
      if (s.indexOf(pair, i + 2) !== i + 1 && s.indexOf(pair, i + 2) >= 0) {
        return true;
      }
    }

    return false;
  };

  const letterPairBetween = (s) => {
    for (let i = 0; i < s.length - 2; i++) {
      if (s[i] === s[i + 2]) {
        return true;
      }
    }

    return false;
  };

  let niceStrings = 0;
  for (str of strings) {
    let isNice = letterPairNoOverlap(str) && letterPairBetween(str);
    niceStrings += isNice ? 1 : 0;
  }

  console.log(niceStrings, "<- answer");
});

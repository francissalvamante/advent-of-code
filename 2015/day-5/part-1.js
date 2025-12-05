process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  let strings = chunk.split(/\r\n/);

  const countVowels = (s) => {
    return s
      .split("")
      .reduce(
        (acc, curr) =>
          acc +
          (curr === "a" ||
          curr === "e" ||
          curr === "i" ||
          curr === "o" ||
          curr === "u"
            ? 1
            : 0),
        0
      );
  };

  const hasRepeatingLetter = (s) => {
    for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i + 1]) return true;
    }

    return false;
  };

  const invalidStrings = (s) => {
    return (
      s.indexOf("ab") >= 0 ||
      s.indexOf("cd") >= 0 ||
      s.indexOf("pq") >= 0 ||
      s.indexOf("xy") >= 0
    );
  };

  let niceStrings = 0;
  strings.forEach((s) => {
    // console.log(
    //   s,
    //   countVowels(s) >= 3,
    //   hasRepeatingLetter(s),
    //   invalidStrings(s)
    // );
    niceStrings +=
      countVowels(s) >= 3 && hasRepeatingLetter(s) && !invalidStrings(s);
  });

  console.log(niceStrings, "<- answer");
});

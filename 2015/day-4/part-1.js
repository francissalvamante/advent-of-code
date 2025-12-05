const crypto = require("crypto");

try {
  const secretKey = "abcdef";
  const leadingZeroes = 5;
  const target = "0".repeat(leadingZeroes);

  const md5Hex = (s) => {
    return crypto.createHash("md5").update(s).digest("hex");
  };

  let iter = 1;
  while (true) {
    const tmp = secretKey + String(iter);
    const hash = md5Hex(tmp);

    if (hash.startsWith(target)) {
      console.log(iter, "<- answer");
      console.log(secretKey, iter, "->", hash);
      break;
    }

    iter++;
  }
} catch (err) {
  console.log("Oops!");
}

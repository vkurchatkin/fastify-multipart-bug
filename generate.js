const fs = require("fs");

let size = 73550;

const data = Buffer.from(
  Array(size)
    .fill(0)
    .map(() => 97)
);

fs.writeFileSync("./test.txt", data);

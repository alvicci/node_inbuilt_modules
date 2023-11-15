const fs = require("fs");

module.exports = function readFile(inputFilePath) {
  try {
    const content = fs.readFileSync(inputFilePath, "utf-8");
    return content;
  } catch (err) {
    console.log(`Error reading file: ${inputFilePath}`);
    throw err.message;
  }
};

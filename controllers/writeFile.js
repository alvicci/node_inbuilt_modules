const fs = require("fs");

module.exports = function writeFile(destination, content) {
  try {
    fs.writeFileSync(destination, content, "utf-8");
    console.log("File written successfully");
  } catch (err) {
    console.error(err.message);
  }
};

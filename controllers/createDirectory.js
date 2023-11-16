const fs = require("fs");

module.exports = function createDirectory(directoryPath) {
  try {
    if (fs.existsSync(directoryPath)) {
      console.log("Directory already exists");
      return;
    }
    fs.mkdirSync(directoryPath);
    console.log("Directory created successfully");
  } catch (err) {
    console.log(`Error creating directory: ${directoryPath}`);
    console.error(err.message);
    throw err.message;
  }
};

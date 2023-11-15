const path = require("path");
const readFile = require("./controllers/readFile");
const modifyContent = require("./controllers/modifyContent");

inputFilePath = path.join(__dirname, "input", "persons.json");

// Read the content of a file
const inputContent = readFile(inputFilePath);

// Modify the read content
const modifiedContent = modifyContent(inputContent);
console.log(modifiedContent);

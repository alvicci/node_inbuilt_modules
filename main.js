const path = require("path");
const readFile = require("./controllers/readFile");
const modifyContent = require("./controllers/modifyContent");
const createDirectory = require("./controllers/createDirectory");
const inputFilePath = path.join(__dirname, "input", "persons.json");
const outputDirectory = path.join(__dirname, "output"); //output.json

// Create the output directory
createDirectory(outputDirectory);

// Read the content of a file
const inputContent = readFile(inputFilePath);

// Modify the read content
// const modifiedContent = modifyContent(inputContent);
// console.log(modifiedContent);

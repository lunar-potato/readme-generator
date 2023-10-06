// Import required modules
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateReadme = require("./utils/generateReadme");
const { type } = require("os");

// Array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter the project description:",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information:",
  },
  {
    type: "input",
    name: "license",
    message: "What is the project's license:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter test instructions:",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// Function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function (userData) {
            // Calling a function to generate README with userData
            const readmeContent = generateReadme(userData);

            // Generating table of contents
            const tableOfContents = generateTableOfContents(readmeContent);

            // Combining README content and table of contents
            const finalReadme = combineReadmeWithTableOfContents(
                readmeContent,
                tableOfContents
            );

            // Writing final readme to a file
            writeToFile("README.md", finalReadme);
            console.log("README.md has been generated succesfully! :D");
        })
        .catch(function (err) {
            console.log(`An error occurred: ${err}`);
        });
}

// Function call to initialize program
init();

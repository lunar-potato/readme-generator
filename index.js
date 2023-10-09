// Import required modules
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateReadme = require("./utils/generateReadme");

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
    type: "list",
    name: "license",
    message: "Choose your project's license:",
    choices: ["MIT", "GNU GPL v3", "Apache 2.0", "Other"],
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
  {
    type: "input",
    name: "email",
    message: "What is your email:",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is your GitHub Username:",
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
      // Adding license file link based on chosen license
      switch (userData.license) {
        case "MIT":
          userData.licenseFileLink = "path/to/MIT/LICENSE.txt";
          break;
        case "GNU GPL v3":
          userData.licenseFileLink = "path/to/GPL/LICENSE.txt";
          break;
        case "Apache 2.0":
          userData.licenseFileLink = "path/to/Apache/LICENSE.txt";
          break;
        default:
          userData.licenseFileLink = "path/to/other/LICENSE.txt";
          break;
      }

      // Calling a function to generate README with userData
      const readmeContent = generateReadme(userData);

      // Writing final readme to a file
      writeToFile("README.md", readmeContent);
      console.log("README.md has been generated succesfully! :D");
    })
    .catch(function (err) {
      console.log(`An error occurred: ${err}`);
    });
}

// Function call to initialize program
init();

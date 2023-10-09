// Function to generate README
// Function to generate README
function generateReadme(data) {
    return `# ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## License
  
  This project is licensed under the ${data.license} License - see the [LICENSE](${data.licenseFileLink})
  
  ## Questions
  
  For additional questions, you can contact me on GitHub
  [${data.githubUsername}](https://github.com/${data.githubUsername})
  
  Or, you can email me at: ${data.email}`;
  }

// Exporting the generateReadme
module.exports = generateReadme;
// Selected licenses 
// 1) MIT License
// MIT Badge: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// MIT Link: https://choosealicense.com/licenses/mit/
// MIT Description: 

// 2) ISC License 
// ISC Badge: [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
// ISC Link: https://choosealicense.com/licenses/isc/
// ISC Description: 

// 3) Mozilla Public License 2.0 
// Mozilla Badge: [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
// Mozilla Link: https://choosealicense.com/licenses/mpl-2.0/
// Mozilla Description: 

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (license = { $data.license) {
//     return Text = [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//   } else {

//   }


// }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contribution}
  ## Test
  ${data.tests}
  ## Questions
  - Visit https://github.com/${data.username}
  - Contact me at ${data.email}
  `;
}

module.exports = generateMarkdown;

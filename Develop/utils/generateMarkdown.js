// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license == 'ISC') {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  } else if (license == 'Mozilla') {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else { return "no license" }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return "https://choosealicense.com/licenses/mit/"
  } else if (license == 'ISC') {
    return "https://choosealicense.com/licenses/isc/"
  } else if (license == 'Mozilla') {
    return "https://choosealicense.com/licenses/mpl-2.0/"
  } else { return "no license" }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'MIT') {
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else if (license == 'ISC') {
    return `A permissive license lets people do anything with your code with proper attribution and without warranty. The ISC license is functionally equivalent to the BSD 2-Clause and MIT licenses, removing some language that is no longer necessary.`
  } else if (license == 'Mozilla') {
    return "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work."
  } else { return "no license" }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Test](#test)
  - [License](#license)
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
  ## License
  - ${renderLicenseLink(data.license)}
  - ${renderLicenseSection(data.license)}
  ## Questions
  - Visit https://github.com/${data.username}
  - Contact me at ${data.email}
  `;
}

module.exports = generateMarkdown;

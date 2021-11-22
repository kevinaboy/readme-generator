// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  name: 'title',
  message: 'What is the name of your project?'
},
{
  type: 'input',
  name: 'description',
  message: 'Enter a description?'
},
{
  type: 'input',
  name: 'installation',
  message: 'Enter installation instructions'
},
{
  type: 'input',
  name: 'usage',
  message: 'Enter usage information?'
},
{
  type: 'input',
  name: 'contribution',
  message: 'Enter contribution guidelines?'
},
{
  type: 'input',
  name: 'tests',
  message: 'Enter test instructions?'
},
{
  type: 'list',
  name: 'license',
  message: 'What license would you like to select?',
  choices: ['MIT', 'ISC', 'Mozilla']
},
{
  type: 'input',
  name: 'username',
  message: 'What is your GitHub username?',
  choices: 'Enter username'
},
{
  type: 'input',
  name: 'email',
  message: 'What is your email address?',
  choices: 'Enter email address'
}
];



// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => { // chains functions that resturns Promises
      console.log(answers)
      const str = generateMarkdown(answers)
      console.log(str)
      fs.writeFileSync("./Output/Readme.md", str)
    })
}

// Function call to initialize app
init();

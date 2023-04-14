
const inquirer = require('inquirer');
const fs = require('fs');
const fileName = 'logo.svg'
const shapes = ['Circle', 'Square', 'Triangle'];


const questions = [
    {
        type: 'maxlength-input',
        name: 'characters',
        message: 'Enter your three characters',
        maxLength: 3
    },
    {
      type: 'input',
      message: 'What color will the text be? (Color keyword or hexidecimal)',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'What will the shape be?',
      name: 'shape',
      choices: shapes
    },
    {
      type: 'input',
      message: 'What will the background color be? (Color keyword or hexidecimal)',
      name: 'backgroundColor',
    }
  ];


function writeToFile(data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!'))
 }

function getLicenseBadgeUrl(license) {
  const licenseBadgeUrlStart = 'https://img.shields.io/badge/license-';
  const licenseBadgeUrlEnd = '-blue.svg';
  const indexStart = license.indexOf('(');
  const indexEnd = license.indexOf(')');
  let shortLicense = license.substring(indexStart + 1, indexEnd);
  shortLicense = shortLicense.replaceAll('-', '--');
  return licenseBadgeUrlStart + shortLicense + licenseBadgeUrlEnd
}

 function formatFileData(answers) {
    let fileData = '# ' + answers.title + '\n';
    writeToFile(fileData);
 }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
          formatFileData(answers);
        })
        .catch((error) => {
          console.log(error);
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();


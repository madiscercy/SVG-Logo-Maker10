
const inquirer = require('inquirer');
const fs = require('fs');
const fileName = 'logo.svg'
const shapes = ['Circle', 'Square', 'Triangle'];
const { Triangle, Circle, Square } = require('./lib/shapes');
const svgHeader = '<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">';
const svgFooter = '</svg>';



const questions = [
  {
    type: 'maxlength-input',
    name: 'characters',
    message: 'Enter up to three characters',
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







function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      handleAnswers(answers)
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


init();


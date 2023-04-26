
const inquirer = require('inquirer');
const fs = require('fs');
const fileName = 'logo.svg'
const shapes = ['Circle', 'Square', 'Triangle'];
const { Triangle, Circle, Square } = require('./lib/shapes');
const svgHeader = '<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">';
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




function handleAnswers(answers) {
  const textElement = `<text x="150" y="110" text-anchor="middle" font-size="24" fill="${answers.textColor}">${answers.characters}</text>`;
  let shapeAnswer = answers.shape;
  let shape;
  if (shapeAnswer === 'Triangle') {
    shape = new Triangle();
  } else if (shapeAnswer === 'Circle') {
    shape = new Circle();
  } else {
    shape = new Square();
  }

  shape.setColor(answers.backgroundColor);
  const shapeRender = shape.render();
  const fullSvgContent = `${svgHeader}\n${shapeRender}\n${textElement}\n${svgFooter}`;
  writeToFile(fullSvgContent);
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


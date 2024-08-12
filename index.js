// index.js

const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/Circle');
const Triangle = require('./lib/Triangle');
const Square = require('./lib/Square');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: (input) => input.length <= 3 || 'Text must be up to three characters long',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for the logo:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword or hexadecimal):',
    },
  ])
  .then((answers) => {
    let shape;

    switch (answers.shape) {
      case 'Circle':
        shape = new Circle();
        break;
      case 'Triangle':
        shape = new Triangle();
        break;
      case 'Square':
        shape = new Square();
        break;
    }

    shape.setColor(answers.shapeColor);
    shape.setText(answers.text, answers.textColor);

    const svgContent = shape.render();

    fs.writeFile('logo.svg', svgContent, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('Generated logo.svg');
      }
    });
  });

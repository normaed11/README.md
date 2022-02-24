// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const { generatetableofcontents } = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    'What is your username?',
    'What is your email?',
    'Please list your installation process.',
    'Please write a description of your project',

];
const sections = [
    'Descripcion',
    'Table of Contents',
    'Installation',
    'Usage',
    'License',
    'Contribution',
    'Test',
    'Question',
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, (error) => {
        if (error) {
            console.log('error en archivo');
        }
        else {
            console.log('sucessful');
        }
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            name: 'username',
            type: 'input',
            message: questions[0],

        },
        {
            name: 'email',
            type: 'input',
            message: questions[1],

        },
        {
            name: 'installation',
            type: 'input',
            message: questions[2],

        },
        {
            name: 'project',
            type: 'input',
            message: questions[3],

        },
    ])
        .then(answers => {
            var text = generatetableofcontents(sections)
            writeToFile(text);
            console.log(answers);
        })
}

// Function call to initialize app
init();

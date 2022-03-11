// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const { generatetableofcontents, generateMarkdown, generatestructure, renderLicenseBadge } = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project',
    'Please write a description of your project',
    'Please list your installation process.',
    'Please describe the use',
    'Please list licenses',
    'Please list names of contributors',
    'Please describe test',
    'What is your github username?',
    'What is your email?',

];
const sections = [
    'Description',
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
            console.log('error');
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
            name: 'title',
            type: 'input',
            message: questions[0],
            validate: (title) => {
                if (title) {
                    return true;
                }
                else {
                    return false;
                }
            }

        },
        {
            name: 'description',
            type: 'input',
            message: questions[1],
            validate: (description) => {
                if (description) {
                    return true;
                }
                else {
                    return false;
                }

            }
        },
        {
            name: 'installation',
            type: 'input',
            message: questions[2],
            validate: (installation) => {
                if (installation) {
                    return true;
                }
                else {
                    return false;
                }

            }
        },
        {
            name: 'usage',
            type: 'input',
            message: questions[3],
            validate: (usage) => {
                if (usage) {
                    return true;
                }
                else {
                    return false;
                }

            }
        },
        {
            name: 'licenses',
            type: 'checkbox',
            message: questions[4],
            choices:
                ['Apache', 'Boost', 'BSD', 'GNU', 'MIT', 'Perl'],
            validate: (licenses) => {
                if (licenses) {
                    return true;
                } else {
                    return false;

                }
            }
        },
        {
            name: 'contribution',
            type: 'input',
            message: questions[5],
            validate: (contribution) => {
                if (contribution) {
                    return true;
                }
                else {
                    return false;
                }

            }
        },
        {
            name: 'test',
            type: 'input',
            message: questions[6],
            validate: (test) => {
                if (test) {
                    return true;
                }
                else {
                    return false;
                }

            }
        },
        {
            name: 'github',
            type: 'input',
            message: questions[7],
            validate: (github) => {
                if (github) {
                    return true;
                }
                else {
                    return false;
                }

            }
        },
        {
            name: 'email',
            type: 'input',
            message: questions[8],
            validate: (email) => {
                if (email) {
                    return true;
                }
                else {
                    return false;
                }

            }
        },
    ])
        // Callback is done when all the answers are provided 
        .then(answers => {
            var text = generateMarkdown(answers.title);
            text += generatetableofcontents(sections)
            text += generatestructure({ subtitle: 'Description', body: answers.description });
            text += generatestructure({ subtitle: 'Installation', body: answers.installation });
            text += generatestructure({ subtitle: 'Contribution', body: answers.contribution });
            text += generatestructure({ subtitle: 'Licenses', body: renderLicenseBadge(answers.licenses) });
            text += generatestructure({ subtitle: 'Usage', body: answers.usage });
            text += generatestructure({ subtitle: 'Test', body: answers.test });
            text += generatestructure({ subtitle: 'Questions', body: `Please contact me using the following links:\n[GitHub](${answers.git}) \n[Email: ${answers.email}](mailto:${answers.email})` });
            console.log(text)
            writeToFile(text);
        })
}

// Function call to initialize app
init();

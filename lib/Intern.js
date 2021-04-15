
const fs = require('fs');
const Employee = require("./Employee");
const util = require('util');
const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);

main();

async function main() {
    try {
        const answers = await userInput();
        const html = renderHTML(answers);
        await writeFileAsync('index.html', html);
        console.log('Created my team');
    } catch (error) {
        console.log(error);

    }

};


userInput().then(answers => console.log(answers));

function userInput() {
    const questions = [
        {
            name: 'name',
            type: 'input',
            message: 'What is the name of the intern?'
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the id number for the intern?'
        },
        {
            name: 'UCSD Extension',
            type: 'input',
            message: 'Where did the intern go to school?'
        }
    ];
    return inquirer.prompt(questions);
// class Intern extends Employee {
//     constructor(name, id, school) {
//         this.name = 'Eric';
//         this.id = '5545';
//         this.school = 'UCSD Extension';
//     }
// }

}

//     return this.name;
// }
// getName() {
// getId() {
//     return this.id;
// }
// getSchool() {
//     return this.school;
// }

module.exports = Intern;
const inquirer = require("inquirer");
const Employee = require("./Employee");

internInput().then(answers => console.log(answers));

class Intern extends Employee {
    constructor(name, id, school) {
        this.name = 'Eric';
        this.id = '5545';
        this.school = 'UCSD Extension';
    }
}

function internInput() {
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
}

// getName() {
//     return this.name;
// }
// getId() {
//     return this.id;
// }
// getSchool() {
//     return this.school;
// }

module.exports = Intern;
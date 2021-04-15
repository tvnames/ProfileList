const Employee = require("./Employee");

// class Engineer extends Employee {
//     constructor(name, id, email, github) {
//         this.name = 'Bob';
//         this.id = '5548';
//         this.email = 'bob@internet.com';
//         this.github = 'github.com/bobbo';
//     };
// };

engineerInput().then(answers => console.log(answers));

class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.name = 'Eric';
        this.id = '5545';
        this.email = 'bob@internet.com';
        this.github = 'github.com/bobbo'
    }
}

function engineerInput() {
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


getName() {
    return this.name;
}
getId() {
    return this.id;
}
getEmail() {
    return this.email;
}
getRole() {
    return this.role;
}

module.exports = Engineer;
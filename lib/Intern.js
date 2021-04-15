const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, school) {
        this.name = 'Eric';
        this.id = '5545';
        this.school = 'UCSD Extension';

    }
}
getName() {
    return this.name;
}
getId() {
    return this.id;
}
getSchool() {
    return this.school;
}

module.exports = Intern;
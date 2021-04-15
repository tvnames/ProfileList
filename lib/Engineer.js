const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.name = 'Bob';
        this.id = '5548';
        this.email = 'bob@internet.com';
        this.github = 'github.com/bobbo';
    };
};




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
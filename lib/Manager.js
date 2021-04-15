class Manager extends Employee {
    constructor(name, id, email, office) {
        this.name = 'James';
        this.id = '2212';
        this.email = 'james@internet.com';
        this.officeNum = '201';

    }
}

getName() {
    return this.name;
};
getId() {
    return this.id;
};
getEmail() {
    return this.email;
}
getRole(Manager) {
    return this.role;
}
getOffice() {
    return this.office
}


module.exports = Manager;
class Manager extends Employee {
    constructor(name, id, email, office) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNum = office;

    }
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
getRole(Manager) {
    return this.role;
}
getOffice() {
    return this.office
}


module.exports = Manager;
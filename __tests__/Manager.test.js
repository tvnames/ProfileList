class Manager extends Employee {
    constructor(name, id, email, office)  {
        super(name, 122, 233);
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
    }
    
    getName() {
        return this.name;
}
}
module.exports = Employee;
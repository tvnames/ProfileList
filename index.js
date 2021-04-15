function employee(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email =  email;
    this.role = role;
    this.getName = () => {
        if(this.name === true) {
            console.log(this.name);
        }
    };
    this.getId = () => {
        if(this.id === true) {
            console.log(this.id);
        }
    };
    this.getEmail = () => {
        if(this.email === true) {
            console.log(this.email);
        }
    };
    this.getRole = () => {
        if(this.role === true) {
            console.log(employee);
        }
    };
}

    const manager = new employee(true, 'Jared', '155', 'jared@email.com', 'Manager', '101');
    const engineer = new employee(true, 'Bob', '177', 'bob@email.com', 'Engineer');
    const intern = new employee(true, 'James', '822', 'james@email.com', 'Intern');

    manager.getName();
    engineer.getName();
    intern.getName();

    employee.prototype.printInfo = function () {
     console.log(`
    Name: ${this.name}\nId: ${this.id}\nEmail: ${this.email}\n Role: ${this.role} `);
    console.log(`n-------------\n`);

 };


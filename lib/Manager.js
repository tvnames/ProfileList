const Employee = require("./Employee");


class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email, officeNum);
    this.officeNum = officeNum;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNum() {
    return this.officeNum;
  }
}

module.exports = Manager;

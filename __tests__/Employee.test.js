
const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("initialization", () => {
    it("should have a name", () => {
      const name = "Bob";
      const id = "2";
      const email = "bob@internet.com";
      const emp = new Employee(name, id, email);

      expect(emp.name).toBe(name);
      expect(emp.id).toBe(id);
      expect(emp.email).toBe(email);
    });
  });
  // getName()
  describe("getName()", () => {
    it("should have a name.", () => {
      const name = "Bob";
      const emp = new Employee(name, 1, "bob@internet.com");
      const empName = emp.getName();
      expect(empName).toBe(name);
    });
  });
  // getId()
  describe("getId()", () => {
    it("should have an id.", () => {
      const id = 2;
      const emp = new Employee("Bob", id, "bob@internet.com");
      const empId = emp.getID();
      expect(empId).toBe(id);
    });
  });
  // group for getEmail()
  describe("getEmail()", () => {
    it("should have an email.", () => {
      const email = "bob@gmail.com";
      const emp = new Employee("Bob", 1, email);
      const empEmail = emp.getEmail();
      expect(empEmail).toBe(email);
    });
  });
  // group for getRole() returns 'Employee'
  describe("getRole()", () => {
    it("Eshould have a role.", () => {
      const emp = new Employee("Bob", 1, "bob@internet.com");
      const empRole = emp.getRole();
      expect(empRole).toBe("Employee");
    });
  });
});

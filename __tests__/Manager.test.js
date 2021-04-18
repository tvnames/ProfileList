  
const Manager = require("../lib/manager");

describe("Manager", () => {
	// adds Office Number 
	describe("getOfficeNumber", () => {
		it("should have an office number.", () => {
			const officeNum = "123";
			const manager = new Manager("James", 1, "james@internet.com", officeNum);
			const managerOfficeNumber = manager.getOfficeNum();
			expect(managerOfficeNumber).toBe(officeNum);
		});
	});
	// role for manager
	describe("getRole", () => {
		it("should have the role of Manager", () => {
			const manager = new Manager("James", 1, "james@internet.com", "123");
			const managerRole = manager.getRole();
			expect(managerRole).toBe("Manager");
		});
	});
});
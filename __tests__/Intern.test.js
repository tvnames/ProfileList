
const Intern = require("../lib/intern");

describe("Intern", () => {
	// add school info
	describe("getSchool", () => {
		it("should have a school added", () => {
			const school = "UCSD";
			const intern = new Intern("Sam", 1, "sam@internet.com", school);
			const internSchool = intern.getSchool();
			expect(internSchool).toBe(school);
		});
	});
	//  for Intern role
	describe("getRole", () => {
		it("Employee role should be replaced with Intern role", () => {
			const intern = new Intern("Sam", 1, "sam@internet.com", "UCSD");
			const internRole = intern.getRole();
			expect(internRole).toBe("Intern");
		});
	});
});
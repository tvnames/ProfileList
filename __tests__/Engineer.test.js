
const Engineer = require("../lib/engineer");

describe("Engineer", () => {
	// add GitHub to engineer
	describe("getGitHub", () => {
		it("should add a github", () => {
			const github = "bobbo";
			const engineer = new Engineer("Bob", 1, "bob@internet.com", github);
			const engineerGitHub = engineer.getGitHub();
			expect(engineerGitHub).toBe(github);
		});
	});
	//  getRole() for engineer
	describe("getRole", () => {
		it("should have the role of engineer", () => {
			const engineer = new Engineer("Bob", 1, "bob@internet.com", "bobbo");
			const engineerRole = engineer.getRole();
			expect(engineerRole).toBe("Engineer");
		});
	});
});

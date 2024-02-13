// Import the Employee class
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // Invoke the Superclass constructor
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        // TODO: validate for empty input

        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

// Export the class
module.exports = Intern;
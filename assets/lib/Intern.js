// Import the Employee class
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // Validate for empty input
        if (!school) {
            throw new Error('School cannot be blank, please enter a value')
        }

        // Invoke the Superclass constructor
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

// Export the class
module.exports = Intern;
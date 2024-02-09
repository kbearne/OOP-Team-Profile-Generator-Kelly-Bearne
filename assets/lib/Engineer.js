// Import the Employee class
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Invoke the Superclass constructor
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        // TODO: validate for empty input

        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}
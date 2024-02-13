// Import the Employee class
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Basic error checking for blank constructor value
        if (!github) {
            throw new Error('GitHub username cannot be blank, please enter a value')
        }

        // Invoke the Superclass constructor
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

// Export the class
module.exports = Engineer;
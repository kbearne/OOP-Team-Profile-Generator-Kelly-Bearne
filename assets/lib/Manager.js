// Import the Employee class
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Error handling for an office number that isn't a number
        officeNumber = Number(officeNumber);
        if (isNaN(officeNumber)) {
            throw new Error('The office number must be a number');
        }

        // Invoke the Superclass constructor
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

// Export the class
module.exports = Manager;
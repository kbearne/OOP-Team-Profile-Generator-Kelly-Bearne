// Import the Employee class
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Error handling to catch an officeNumber that isn't a number (must be typecast as a number due to the terminal reading input as string by default)
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
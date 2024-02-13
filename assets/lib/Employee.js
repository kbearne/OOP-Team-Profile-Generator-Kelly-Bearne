class Employee {
    constructor(name, id, email) {
        // Basic error checking for blank constructor values
        if (!name) {
            throw new Error('Name cannot be blank!')
        }
        if (!id) {
            throw new Error('ID cannot be blank!')
        }
        if (!email) {
            throw new Error('Email cannot be blank!')
        }

        // Error handling to catch an ID that isn't a number (must be typecast as a number due to the terminal reading input as string by default)
        id = Number(id);
        if (isNaN(id)) {
            throw new Error('The id must be a number');
        }

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
};

// Export the Employee class
module.exports = Employee;
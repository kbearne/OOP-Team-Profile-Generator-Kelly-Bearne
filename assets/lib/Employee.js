class Employee {
    constructor(name, id, email) {
        // Basic error check for blank values
        if (!name || !id || !email) {
            throw new Error('Values cannot be blank. Please ensure that every field contains a value.')
        }
        // Error handling for an id that isn't a number
        if (typeof id !== 'number' || Number.isNaN(id)) {
            throw new Error('The ID must be a number');
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
}

// Export the Employee class
module.exports = Employee;
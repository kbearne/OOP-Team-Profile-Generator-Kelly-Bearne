class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        //TODO
        return this.name;
    }

    getId() {
        //TODO
        return this.id;
    }

    getEmail() {
        //TODO
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

// Export the Employee class
module.exports = Employee;
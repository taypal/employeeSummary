var fs = require("fs");
var Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super();

        this.github = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
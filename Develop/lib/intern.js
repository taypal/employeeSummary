var fs = require("fs");
var Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super();

        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
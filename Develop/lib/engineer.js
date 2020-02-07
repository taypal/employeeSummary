var fs = require("fs");
var Employee = require("./employee");


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super();

        this.github = github;
    }

    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
const fs = require("fs");
var inquirer = require("inquirer");
var axios = require("axios");

var engineer = require("./engineer");
var intern = require("./intern");
var manager = require("./manager");
var employee = require("./employee");


function startPrompt() {
    inquirer.prompt({
        type: "list",
        message: "Ready to create your team?",
        choices: ['Yes', 'No'],
        name: "start"
    })

        .then(function (res) {
            if (res.start === 'Yes') {
                console.log("Let's Start Building ");
                findRole();
            } else {
                console.log("Goodbye");
            }
        })
}

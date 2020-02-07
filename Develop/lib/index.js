var fs = require("fs");
var inquirer = require("inquirer");

var Engineer = require("./engineer");
var Intern = require("./intern");
var Manager = require("./manager");
var Employee = require("./employee");

//start creating the create yes continues on and no gives 404 error
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
                console.log("ERROR 404");
            }
        })
}

//this allows the application determine to send them to intern, engineer, or manager

function findRole() {
    inquirer.prompt(
        {
            type: "list",
            message: "Select one of the follow:",
            choices: ['School', 'Github Username', 'Office Number'],
            name: "role"
        }

    )
        .then(function (res) {
            switch (res.role) {
                case 'School':
                    buildIntern(res);
                    break;
                case 'Github Username':
                    buildEngineer(res);
                    break;
                case 'Office Number':
                    buildManager(res);
                    break;

            }
        })

    function buildIntern(res) {
        let intern = new Intern(res.school, res.name, res.id, res.email);
        inquirer.prompt([
            {
                type: "input",
                message: "What school do they attend?",
                name: "school"
            },
            {
                type: "input",
                message: "What is the intern's name?",
                name: "name"
            },
            {
                type: "input",
                message: "Create ID:",
                name: "id"
            },
            {
                type: "input",
                message: "What is their email?",
                name: "email"
            }
        ])
            .then(function (res) {
                intern.school = res.school;
                intern.name = res.name;
                intern.id = res.id;
                intern.email = res.email;

                handleSize();

            })
    }
    function buildEngineer(res) {
        let engineer = new Engineer(res.github, res.name, res.id, res.email);
        inquirer.prompt([
            {
                type: "input",
                message: "What is their Github username?",
                name: "github"
            },
            {
                type: "input",
                message: "What is the Engineer's Name?",
                name: "name"
            },
            {
                type: "input",
                message: "Enter ID:",
                name: "id"
            },
            {
                type: "input",
                message: "What is their email?",
                name: "email"
            }
        ])
            .then(function (res) {
                engineer.github = res.github;
                engineer.name = res.name;
                engineer.id = res.id;
                engineer.email = res.email;

                handleSize();
            })
    }
    function buildManager(res) {
        let manager = new Manager(res.officenumber, res.name, res.id, res.email);
        inquirer.prompt([
            {
                type: "input",
                message: "What is the Manager's office number:",
                name: "officenumber"
            },
            {
                type: "input",
                message: "What is the Manager's Name:",
                name: "name"
            },
            {
                type: "input",
                message: "Enter ID:",
                name: "id"
            },
            {
                type: "input",
                message: "What is their email?",
                name: "email"
            }
        ])
            .then(function (res) {
                manager.officenumber = res.officenumber;
                manager.name = res.name;
                manager.id = res.id;
                manager.email = res.email;

                handleSize();
            })
    }
}

function handleSize() {
    inquirer.prompt(
        {
            type: "list",
            message: "Want to continue and add a new member?",
            choices: ['Yes', 'No'],
            name: "add"
        }
    ).then(function (res) {
        if (res.add === 'Yes') {
            console.log("build team");
            findRole();
        } else {
            writeToHTML();
        }
    });

    function writeToHTML() {
        console.log("write to hmtl");
    }
    startPrompt();
};

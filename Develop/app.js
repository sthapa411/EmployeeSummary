const fs = require("fs");
const inquirer = require("inquirer");

const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");



function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter your first name:",
            name: "name"
        }, 
        {
            type: "input",
            message: "Enter your email address:",
            name: "email"
        }, 
        {
            type: "input",
            message: "What's your role?",
            name: "role",
            choices: ['manager', 'engineer', 'intern']
        },
        {
            type: "input",
            message: "Enter your github username:",
            name: "username"
        }, ]);
}
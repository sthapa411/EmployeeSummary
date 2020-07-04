const fs = require("fs");

const inquirer = require("inquirer");


const Employee = require("./library/Employee")
const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");




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
            message: "What's your role within the company?",
            name: "role",
            choices: ['manager', 'engineer', 'intern']
        },
        {
            type: "input",
            message: "Enter your github username:",
            name: "username"
        }, ]);
}
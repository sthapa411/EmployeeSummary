const fs = require("fs");
const inquirer = require("inquirer");

const Employee = require("./Develop/lib/Employee")
const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");

const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const writeFileAsync = util.promisify(fs.writeFile);

const teamData = []


function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter your first name:",
            name: "name"
        }, 
        {
            type: "input",
            message: "Enter your id:",
            name: "id"
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
        },
        {

            type: "input",
            message: "Enter your school name:",
            name: "school"
        },
        ]);
}

async function init() {
    console.log("Hello")
    try {
        const answers = await promptUser();

        const html = htmlRenderer(answers);

        //writeFile will creat html page with the answers
        await writeFileAsync("team.html", html);

        console.log("Successfully wrote to team.html");
    } catch (err) {
        console.log(err);
    }
}

init();
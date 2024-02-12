const Manager = require("./assets/lib/Manager");
const Engineer = require("./assets/lib/Engineer");
const Intern = require("./assets/lib/Intern");
const Employee = require("./assets/lib/Employee");
const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./assets/src/page-template.js");

// Prompt for the team manager details
const promptManager = async () => {
    const managerDetails = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager\'s name?',
        },
        {
            type: 'input',
            name: 'employeeid',
            message: 'What is the team manager\'s id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team manager\'s email address?',
        },
        {
            type: 'input',
            name: 'officenumber',
            message: 'What is the team manager\'s office number?',
        },
    ]);

    // Create a new manager object
    const manager = new Manager(managerDetails.name, managerDetails.employeeid, managerDetails.email, managerDetails.officenumber);

    return manager;
};

// Gather employee information and generate HTML page
const init = async () => {
    try {
        const manager = await promptManager();

        // TODO: Other team member prompts

        // Array if team member objects
        const teamMembers = [manager];

        // Generate HTML page with team members array
        const htmlPage = render(teamMembers);

        // Write (HTML) to file
        fs.writeFileSync(outputPath, htmlPage);

        console.log("New Team page creation successful")
    } catch (error) {
        console.error("Error caught:", error);
    }
};

init();
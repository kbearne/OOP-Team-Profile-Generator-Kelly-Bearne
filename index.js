// Import all required modules and classes
const Manager = require("./assets/lib/Manager");
const Engineer = require("./assets/lib/Engineer");
const Intern = require("./assets/lib/Intern");
const Employee = require("./assets/lib/Employee");
const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");

// Variables storing file paths
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./assets/src/page-template.js");

// Prompt for the team manager details (via inquirer) and create the manager object
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

    // Create a new manager object and return it
    const manager = new Manager(managerDetails.name, managerDetails.employeeid, managerDetails.email, managerDetails.officenumber);

    return manager;
};

// Prompt for engineer details and create the object
const promptEngineer = async () => {
    const engineerDetails = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name?',
        },
        {
            type: 'input',
            name: 'employeeid',
            message: 'What is the engineer\'s id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer\'s GitHub username?',
        },
    ]);

    // Create an engineer object and return it
    const engineer = new Engineer(engineerDetails.name, engineerDetails.employeeid, engineerDetails.email, engineerDetails.github);

    return engineer;
};

// Prompt for intern details and create the object
const promptIntern = async () => {
    const internDetails = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name?',
        },
        {
            type: 'input',
            name: 'employeeid',
            message: 'What is the intern\'s id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s email address?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the intern\'s school?',
        },
    ]);

    // Create an intern object and return it
    const intern = new Intern(internDetails.name, internDetails.employeeid, internDetails.email, internDetails.school);

    return intern;
};

// Gather employee information and generate HTML page
const init = async () => {
    try {
        // Prompt for the input of the manager details (by calling the promptManager function)
        const manager = await promptManager();

        // Push the new manager object to the team members array
        const teamMembers = [manager];

        // Set variable to record if we should prompt the user for another team member to be added (initially set to 'true')
        let addTeamMembers = true;

        // While true, prompt the user to select a choice from the following: add engineer, add intern or finish building the team (therefore generating the team.html page)
        while (addTeamMembers) {
            const { choice } = await inquirer.prompt({
                type: 'list',
                name: 'choice',
                message: 'Please select an option',
                choices: ['Add engineer', 'Add intern', 'Finish building team']
            });

            // Call the appropriate function to add a team member and push the new team member to the team members array, or finish building the team (setting the addTeamMembers variable to false) dependant on the user choice
            switch (choice) {
                case 'Add engineer':
                    const engineer = await promptEngineer();
                    teamMembers.push(engineer);
                    console.log("An engineer has been added to the team successfully");
                    break;
                case 'Add intern':
                    const intern = await promptIntern();
                    teamMembers.push(intern);
                    console.log("An intern has been added to the team successfully");
                    break;
                case 'Finish building team':
                    addTeamMembers = false;
                    console.log("Generating your completed team page");
                    break;
                default:
                    console.log("Error, invalid choice. Please select a valid option.");
                    break;
            };
        };

        // Generate HTML page with team members array
        const team = render(teamMembers);

        // Write (HTML) to file and print success message to console, otherwise if there is an error then catch the error and print it to console
        fs.writeFileSync(outputPath, team);

        console.log("New Team page creation successful")
    } catch (error) {
        console.error("Error caught:", error);
    };
};

// Initialise the main function
init();
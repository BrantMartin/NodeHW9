// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"Enter Project Title: ",
        name:"title"
    },
    {
        type:"input",
        message:"Enter Project Description: ",
        name:"description"
    },
    {
        type:"input",
        message:"Enter Installation Instructions: ",
        name:"installation"
    },
    {
        type:"input",
        message:"Enter User Information: ",
        name:"usage"
    },
    {
        type:"input",
        message:"Enter Cotribution Guidelines: ",
        name:"contributing"
    },
    {
        type:"input",
        message:"Enter Test Instructions: ",
        name:"tests"
    },
    {
        type:"input",
        message:"Enter Your Email: ",
        name:"email"
    },
    {
        type:"input",
        message:"Enter Your Github Username: ",
        name:"githubUsername"
    },
    {
        type:"list",
        choices: ['MIT', 'ISC', 'APACHE2.0', 'GPL'],
        message:"Choose license for your project: ",
        name:"license"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}
// Function call to initialize app
init();

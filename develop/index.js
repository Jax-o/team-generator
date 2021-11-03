const inquirer = require('inquirer');
const fs = require('fs');



// const generateHTML = ({ name, location, github, linkedin }) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${name}</h1>
//     <p class="lead">I am from ${location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${github}</li>
//       <li class="list-group-item">LinkedIn: ${linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;

const managerQuestions = [{
	type: 'input',
	name: 'name',
	message: 'What is your name?',
 },
 {
	type: 'input',
	name: 'ID',
	message: 'What is your employee ID?',
 },
 {
	type: 'input',
	name: 'email',
	message: 'What is your email address?',
 },
 {
	type: 'input',
	name: 'phone number',
	message: 'What is your office number?',
 },
 	
{
	type: 'list',
	name: 'employee',
	message: 'Who else is apart of your team?',
	choices: ['enginner', 'intern', 'complete'],
},

];


const engineerQuestions = [{
	type: 'input',
	name: 'name',
	message: 'What is your name?',
 },
 {
	type: 'input',
	name: 'ID',
	message: 'What is your employee ID?',
 },
 {
	type: 'input',
	name: 'email',
	message: 'What is your email address?',
 },
 {
	type: 'input',
	name: 'username',
	message: 'What is your GitHub username?',
 },

];

// need function to take back to menu

const internQuestions = [{
	type: 'input',
	name: 'name',
	message: 'What is your name?',
 },
 {
	type: 'input',
	name: 'ID',
	message: 'What is your employee ID?',
 },
 {
	type: 'input',
	name: 'email',
	message: 'What is your email address?',
 },
 {
	type: 'input',
	name: 'school',
	message: 'What school do you attend?',
 },

];
// need function to take back to menu



// function to initialize app
// function init() {
// 	inquirer.prompt(questions).then((answers) => {
// 		const readMeContent = markDown(answers)
// 		fs.writeFile('README.md', readMeContent, (err) =>
// 			err ? console.log(err) : console.log(answers))
// 	})
// };

// Function call to initialize app
init();

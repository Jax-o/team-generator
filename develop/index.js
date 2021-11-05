const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')



const employeeHTML = ({ name, position, id, email }) =>
	`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel= "reset" href="reset.css"> 
   <link rel="stylesheet" href="./dist/style.css">
	<title>Team Manager</title>
</head>

<body>
	<header>
		<h1>My Team</h1>
	</header>
	<div class="clearfix">
		<div class="cards">
		<h2>${name}</h2>
		<h2>${position}</h2>
		<div>ID: ${id}</div>
		<div>Email: ${email}</div>
		</div>
	</div>
</body>
</html>`;


const employeeQuestions = [{
	type: 'input',
	name: 'name',
	message: 'What is your name?',
},
{
	type: 'input',
	name: 'position',
	message: 'What is your position?',
},
{
	type: 'input',
	name: 'id',
	message: 'What is your employee ID?',
},
{
	type: 'input',
	name: 'email',
	message: 'What is your email address?',
},
];


// function to initialize app
function init() {
	inquirer.prompt(employeeQuestions).then((answers) => {
		const htmlPageContent = employeeHTML(answers)
		fs.writeFile('index.html', htmlPageContent, (err) =>
			err ? console.log(err) : console.log('Successfully created index.html!'))
	})
};
	// Function call to initialize app
init();


// const managerQuestions = [{
// 	type: 'input',
// 	name: 'name',
// 	message: 'What is your name?',
//  },
//  {
// 	type: 'input',
// 	name: 'ID',
// 	message: 'What is your employee ID?',
//  },
//  {
// 	type: 'input',
// 	name: 'email',
// 	message: 'What is your email address?',
//  },
//  {
// 	type: 'input',
// 	name: 'phone number',
// 	message: 'What is your office number?',
//  },

// {
// 	type: 'list',
// 	name: 'employee',
// 	message: 'Who else is apart of your team?',
// 	choices: ['enginner', 'intern', 'complete'],
// },

// ];


// const engineerQuestions = [{
// 	type: 'input',
// 	name: 'name',
// 	message: 'What is your name?',
//  },
//  {
// 	type: 'input',
// 	name: 'ID',
// 	message: 'What is your employee ID?',
//  },
//  {
// 	type: 'input',
// 	name: 'email',
// 	message: 'What is your email address?',
//  },
//  {
// 	type: 'input',
// 	name: 'username',
// 	message: 'What is your GitHub username?',
//  },

// ];

// // need function to take back to menu

// const internQuestions = [{
// 	type: 'input',
// 	name: 'name',
// 	message: 'What is your name?',
//  },
//  {
// 	type: 'input',
// 	name: 'ID',
// 	message: 'What is your employee ID?',
//  },
//  {
// 	type: 'input',
// 	name: 'email',
// 	message: 'What is your email address?',
//  },
//  {
// 	type: 'input',
// 	name: 'school',
// 	message: 'What school do you attend?',
//  },

/* 1) X Prompts the core manager information
   2) Prompts the new employee and type of employee if desired or be done
   3)if they want to make a new employee prompts employee indormation questions
   4) After new employee information is entered then it will prompt you to do step 2 again
   5) else completes input of commandline and generates html page
   */
const fs = require('fs');
const inquirer = require('inquirer');
const employeeData = []

const managerQuest = [
   {
      name: 'managerName',
      message: 'What is the Team Manager Name?',
      type: 'input',
   },
   {
      name: 'employeeId',
      message: 'What is the employee ID of the manager?',
      type: 'input'
   },
   {
      name: 'email',
      message: 'Enter manager email',
      type: 'input'
   },
   {
      name: 'officeNum',
      message: 'What is the manager Office Number?',
      type: 'input'
   }
];

function promptManager() {
   return inquirer.prompt(managerQuest).then(function (answers) {
      employeeData.push(answers)
      console.log(answers);
   })
}

function promptEmployee() {
   return inquirer.prompt(employeeQuest).then(function (answers) {
      employeeData.push(answers)
      console.log(answers);
   })
}

function writeToFile(writeFile, employeeInfo) {
   fs.writeFile(writeFile, emplyeeInfo, (error) => {
      error ? console.error(error) : console.log('New team member is created.')
   })
}

function init() {
   promptManager()
      .then(data => {
         console.log('Generating Team Manager...');
         // writeToFile('index.html', generateRoster({ ...data }));
         promptEmployee()
         .then(data => {
            console.log('Generating Team Member')
         })
      })
      .catch(function (error) {
         console.error(error);

      });
};

init();

const employeeQuest = [  
   {
      name: 'openingPrompt',
      message: 'What type of Team Member would you like to create on your company Roster?',
      type: 'list',
      choices:['Engineer', 'Intern', 'Exit']
   },
   {
      name: 'name',
      message: 'What is employee name?',
      type: 'input'
   },
   { 
      name: 'employeeId',
      message: 'Enter employee ID here.',
      type: 'input'
   },
   {
      name: 'email',
      message: 'Enter employee email',
      type: 'input'
   },
   {
      name: 'github',
      message: 'Enter employee github username.',
      type: 'input'
   }
];

// inquirer.prompt(employeeQuest)




// function writeToFile(writeFile, employeeInfo) {
//    fs.writeFile(writeFile, emplyeeInfo, (error) => {
//       error ? console.error(error) : console.log('New team member is created.')
//    })
// }

//  <a href = mailto


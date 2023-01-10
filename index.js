/* 1) X Prompts the core manager information
   2) Prompts the new employee and type of employee if desired or be done
   3)if they want to make a new employee prompts employee indormation questions
   4) After new employee information is entered then it will prompt you to do step 2 again
   5) else completes input of commandline and generates html page
   */


const {employeeQuest, managerQuest} = require('./lib/prompts');
const {Employee, Manager, TeamMember} = require('./lib/models'); 
const fs = require('fs');
const inquirer = require('inquirer');
const employeeData = []

console.log(employeeQuest);
function promptManager() {
   return inquirer.prompt(managerQuest).then(function (answers) {
      employeeData.push(answers)
      console.log(answers);
   })
}

inquirer.prompt(employeeQuest)

function writeToFile(writeFile, employeeInfo) {
   fs.writeFile(writeFile, emplyeeInfo, (error) => {
      error ? console.error(error) : console.log('New team member is created.')
   })
}



function init() {
   promptManager()
      .then(data => {
         console.log('Generating HTML...');
         writeToFile('index.html', generateMarkdown({ ...data }));
      })
      .catch(function (error) {
         console.error(error);

      });

};

//  <a href = mailto
// init();

const fs = require('fs');
const { type } = require("os");
const { choices } = require("yargs");

class employee {
   constructor( jobTitle, name, employeeId, email, githubUser){
   this.jobTitle = jobTitle;
   this.name = name;
   this.employeeId = employeeId;
   this.email = email;
   this.githubUser = githubUser;
   }
}

displayInfo() {
   console.log()
}

const employee = new employee(`Engineer, Joey, 1, joey@gmail.com, Imjoey`)


const employeeQuest = [
   {
      name: 'openingPrompt'
      message: 'Would you like to add a Team Memeber to your company Roster?',
      type: 'list',
      choices:[Yes, No]
   }
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
   }
   {
      name: 'github',
      message: 'Enter employee github username.',
      type: 'input'
   }
];

function writeToFile(writeFile, emplyeeInfo) {
   fs.writeFile(writeFile, emplyeeInfo, (error)=> {
      error? console.error(error): console.log('New team member is created.')  
   })
}

function init() {
   
}

// function init() {
//    inquirer.prompt(questions).then(data => {
//      console.log('Generating ReadMe...');
//      writeToFile('README.md', generateMarkdown({ ...data }));
//    });
//  };
 
//  init();
 
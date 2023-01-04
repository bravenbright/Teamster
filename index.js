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

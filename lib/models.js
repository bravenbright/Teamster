class Employee {
   constructor(name, employeeId, email) {
      this.name = name;
      this.employeeId = employeeId;
      this.email = email;
   }
}

class Manager extends Employee {
   constructor(name, employeeId, email, officeNum) {
      super(name, employeeId, email);
      this.officeNum = officeNum;
   }
}

class TeamMember extends Employee {
   constructor(name, employeeId, email, jobTitle, githubUser) {
      super(name, employeeId, email);
      this.jobTitle = jobTitle;
      this.githubUser = githubUser;
   }
}

const Employee = require("./Employee");
class Engineer extends Employee {

    constructor(name, id, email, github) {
         //super gets the employee properties
        super(name, id, email);
        //this. adds the employee properties
        this.github = github;
       

    };

      //returns github 
    getGithub() {
        return this.github;
    };

      //returns the role
    getRole() {
        return "Engineer";
    };

};
module.exports = Engineer;
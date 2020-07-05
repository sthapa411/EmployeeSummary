const Employee = require("./Employee");
class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
         //super gets the employee properties
        super(name, id, email);
         //this. adds the employee properties
        this.officeNumber = officeNumber;

    };

       //returns office number
    getOfficeNumber() {
        return this.officeNumber;
    };
    //returns role
    getRole() {
        return "Manager";
    };

};
module.exports = Manager;
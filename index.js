const employeesJSON = require('./employees.json');
const managersJSON = require('./managers.json');

// Code Here

class Employee {
 constructor (name, position, yearJoined, salary)
 {
    this.name = name;
    this.position =  position;
    this.yearJoined = yearJoined;
    this.salary = salary;
     }
        }
        idBadge = () => {
            return (`Shell
            ${this.position}: ${this.name}`)
        }

        class Manager extends Employee {
            constructor (name, position, yearJoined, salary, bonusPercentage) 
        { this.bonusPercentage = bonusPercentage;

            super(name, position, yearJoined, salary);
        }
        salaryIncrease = (increaseAmount) => {
            return increaseAmount = this.salary++
        }
    }
     const employees = new Employee();
     employees.map
     const managers = new Manager();
     managers.map

     logManagerInfo =() => {
        this.name
        "since" workingYears
        "Bonus%"  bonusPercentage
     }
     getWorkingYears =() => {
        return 
     }





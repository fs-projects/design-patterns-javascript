function Developer(name) {
  this.type = 1;
  this.name = name;
}

function Tester(name) {
  this.type = 2;
  this.name = name;
}

function EmployeeFactory() {
  this.createEmployee = function (name, type) {
    switch (type) {
      case 1: {
        return new Developer(name);
        break;
      }
      case 2: {
        return new Tester(name);
        break;
      }
    }
  };
}

const employeeData = [];
const dev1 = new EmployeeFactory().createEmployee("JohnDev", 1);
const Tester1 = new EmployeeFactory().createEmployee("MarkTest", 2);
employeeData.push(dev1);
employeeData.push(Tester1);
console.log(employeeData);



function Employee(name, designation, year) {
    this.name = name;
    this.designation = designation;
    this.year = year;
}

Employee.prototype.calculateAge = function calculateAge () {
    console.log("age of " + this.name + "=" + (2021 - this.year));
}


console.log(Employee.prototype);

let emp1 = new Employee("Alex", "Tester", 1995);
console.log(emp1);
emp1.calculateAge();

let emp2 = new Employee("Annie", "Developer", 1990);
console.log(emp2);
emp2.calculateAge();

"use strict";
let employee1 = {
    name: "Gulnar",
    age: 19,
    salary: 5000,
    department: "IT"
};
let employee2 = {
    name: "Sema",
    age: 20,
    salary: 5000,
    department: "Law"
};
let employees = [employee1, employee2];
console.log(employees.map(employee => employee.name));

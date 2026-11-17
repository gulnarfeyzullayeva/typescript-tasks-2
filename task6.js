"use strict";
let info = ["Gulnar", 1234567];
let students = [
    {
        id: 1,
        name: "Alice",
        age: 20,
        isActive: true
    },
    {
        id: 2,
        name: "Bob",
        age: 22,
        isActive: false
    },
    {
        id: 3,
        name: "Charlie",
        age: 19,
        isActive: true
    }
];
let activeStudents = students.filter(student => student.isActive);
let studentNames = students.map(student => student.name);
let course = {
    title: "Full Stack",
    duration: 120,
    price: 250
};
console.log(info);
console.log(students);
console.log(activeStudents);
console.log(studentNames);
console.log(course);

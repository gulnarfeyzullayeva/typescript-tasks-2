interface Person {
    name: string;
    age: number;
}
interface Employee extends Person {
    salary: number;
    department: string;
}
let employee1: Employee ={
    name: "Gulnar",
    age: 19,
    salary: 5000,
    department: "IT"
}
let employee2: Employee ={
    name: "Sema",
    age:20,
    salary: 5000,
    department: "Law"
}
let employees: Employee[]= [employee1, employee2];
console.log(employees.map(employee=>employee.name));


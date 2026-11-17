interface Student {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
}
type Course = {
    title: string;
    duration: number;
    price: number;
};
let info: [string, number] = ["Gulnar", 1234567]
let students: Student[] = [
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
let activeStudents=students.filter(student=>student.isActive);
let studentNames=students.map(student=>student.name);
let course: Course={
    title: "Full Stack",
    duration: 120,
    price:250
};
console.log(info);
console.log(students);
console.log(activeStudents);
console.log(studentNames);
console.log(course);






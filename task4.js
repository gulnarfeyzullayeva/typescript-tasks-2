"use strict";
let books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: 180,
        available: true,
        genre: "Fiction"
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        pages: 281,
        available: false,
        genre: "Fiction"
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        pages: 328,
        available: true,
        genre: "Dystopian Fiction"
    }
];
console.log(books.filter(book => book.available));

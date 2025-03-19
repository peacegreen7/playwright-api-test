interface Person {
    name: string;
    age: number;
    address?: string; //optional property
}

const user: Person = {
    name: 'Peter',
    age: 15
}

function greeting(person: Person): string {
    return `Hi ${person.name} and happy birthday ${person.age}`;
}

console.log(greeting(user));

// Nested object type for a block
interface Author {
    name: string;
    birthYear: number
}

interface Book {
    title: string;
    author: Author;
    pages: number;
    genre?: string; // optional
}

const myBook: Book = {
    title: 'Harry Potter',
    author: {
        name: 'JK Rowling',
        birthYear: 1965
    },
    pages: 500
}

function showBook(book: Book): string {
    return `This is one of the popular book of: ${book.author.name} has a title is: ${book.title}`
}

console.log(showBook(myBook));

// Function Parameter with Object Type
interface Rectangle {
    width: number,
    height: number,
}

function calculateArea(rectangle: Rectangle): number {
    return rectangle.width * rectangle.height
}

const rectangle: Rectangle = {
    width: 5,
    height: 10
}
console.log(`The result rectangle area is ${calculateArea(rectangle)}`)

// Interface in Class
interface Employee {
    name: string;
    age: number;
    position: string;
}
class Staff implements Employee {
    name: string;
    age: number;
    position: string;
    address: string;

    constructor(name: string, age: number, position: string, address: string) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.address = address;
    }

    show(): string {
        return `${this.name} has position is: ${this.position}`
    }
}

const staff = new Staff('Bob', 16, 'Fresher', '123 Street')
console.log(staff);
console.log('function in class: ' + staff.show());
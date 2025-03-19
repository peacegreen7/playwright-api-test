let message: string = 'Hello, typescript!';
console.log(message);

let number: number = 42;
console.log(number);
console.log(typeof number);

let isTrue: boolean = true;
console.log(isTrue);
console.log(typeof isTrue);

let array: number[] = [1, 2, 3, 4, 5];
console.log(array);
console.log(typeof array);

let city: string;
// console.log(city); // Output: undefined

function testScope() {
    if (true) {
        var functionScope = 'Function scope'; // Declare variable inside if block
    }
    console.log(functionScope); // Accessible here (function scope)
}
testScope();

function testBlockScope() {
    if (true) {
        let blockScope = 'Block scope'; // Declare variable inside if block
        console.log(blockScope); // Accessible here (block scope)
    }
    // console.log(blockScope); // Not accessible here (block scope): error TS2304: Cannot find name 'blockScope'.
}
testBlockScope();
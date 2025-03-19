// 1. Named Functions

// call simple function before it is defined
console.log(add(3, 5))

// simple function
function add(a: number, b: number): number {
    return a + b;
}

// call simple function after it is defined
console.log(add(3, 5))


// function with default parameter
function addWithDefault(a: number, b: number = 0): number {
    return a + b;
}
console.log(addWithDefault(3, 5))

// function with optional parameter
function addWithOptional(a: number, b?: number): number {
    return a + (b || 0);
}
console.log(addWithOptional(3))

// function with rest parameter
function addWithRest(a: number, ...rest: number[]): number {
    return a + rest.reduce((acc, val) => acc + val, 0);
}
console.log('addWithRest: ' + addWithRest(3, 5, 7, 9))

// function with return type void 
function printMessage(message: string): void {
    console.log(message);
}
printMessage('Hello, typescript!');

// function with return type any
function addAny(a: any, b: any): any {
    return a + b;
}
console.log(addAny(3, 5));
console.log(addAny('Hello, ', 'typescript!'));

// function with return type never
function throwError(message: string): never {
    throw new Error(message);
}
// throwError('Error message'); 

// --------------------------------------------


// 2. Anonymous Functions

const hello = function (name: string): string {
    return `Hello, ${name}!`;
}
console.log(hello('typescript'));

// --------------------------------------------
// 3. Arrow Functions
const helloArrow = (name: string): string => {
    return `Hello ${name}`
}
helloArrow('typescript');

// --------------------------------------------
// 4. Function Overloading
function addOverload(a: number, b: number): number;
function addOverload(a: string, b: string): string;
function addOverload(a: any, b: any): any {
    return a + b;
}

function testOverload() {
    console.log(addOverload(3, 5));
    console.log(addOverload('Hello', 'typescript'));
    // console.log(addOverload(3, 'typescript'));
}

testOverload();

// --------------------------------------------
// 5. Callback Functions
function addCallback(a: number, b: number, callback: (result: number) => void): void {
    let result = a + b;
    callback(result);
}

addCallback(3, 4, (result) => {
    console.log(result);
});
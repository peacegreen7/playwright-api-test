/**
 * What We’re Going to Create
 * We’ll build a counter app with the following features:
 * Increment the counter value.
 * Decrement the counter value (but not below zero).
 * Reset the counter to zero.
 */

// var counter = 0;

// function increaseCounter() {
//     counter++;
//     console.log('Counter: ' + counter);
// }

// function decreaseCounter() {
//     if (counter > 0) {
//         counter--;
//         console.log('Counter: ' + counter);
//     } else {
//         console.log('Counter cannot be less than 0');
//     }
// }

// function resetCounter() {
//     counter = 0;
//     console.log('Counter: ' + counter);
// }

// function testCounterApp() {
//     increaseCounter();
//     increaseCounter();
//     resetCounter();
//     decreaseCounter();
//     resetCounter();
// }
// testCounterApp();

// convert to basic class
class Counter {
    counter: number;

    constructor(counter: number) {
        this.counter = counter;
    }

    increaseCounter(): number {
        return this.counter++;
    }

    decreaseCounter(): any {
        if (this.counter > 0)
            return this.counter--;
        else
            console.log('Counter cannot less than 0')
    }

    resetCounter(): number {
        this.counter = 0;
        return this.counter;
    }
}

let counter1 = new Counter(5);
counter1.increaseCounter();
counter1.increaseCounter();
counter1.increaseCounter();
counter1.decreaseCounter();
counter1.decreaseCounter();
counter1.decreaseCounter();
counter1.increaseCounter();
counter1.resetCounter();
counter1.decreaseCounter();
counter1.increaseCounter();
console.log(counter1);

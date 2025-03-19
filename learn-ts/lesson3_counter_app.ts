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
    private counter: number;

    constructor(counter: number) {
        if (counter < 0) {
            throw new Error('Counter cannot be initialized with a negative value');
        }
        this.counter = counter;
    }

    getCounter(): number {
        return this.counter;
    }

    increaseCounter(): void {
        this.counter++;
        console.log(`counter increase to: ${this.getCounter()}`);
    }

    decreaseCounter(): void {
        if (this.counter > 0) {
            this.counter--;
            console.log(`Counter decrease to: ${this.getCounter()}`)
        }
        else
            console.log('Counter cannot be less than 0')
    }

    resetCounter(): void {
        this.counter = 0;
        console.log(`Counter reset to 0`);
    }
}

let counter1 = new Counter(5);
console.log(`Initial counter: ${counter1.getCounter()}`)
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
console.log(`Final counter: ${counter1.getCounter()}`);

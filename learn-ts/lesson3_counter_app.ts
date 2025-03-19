/**
 * What We’re Going to Create
 * We’ll build a counter app with the following features:
 * Increment the counter value.
 * Decrement the counter value (but not below zero).
 * Reset the counter to zero.
 */

var counter = 0;

function increaseCounter() {
    counter++;
    console.log('Counter: ' + counter);
}

function decreaseCounter() {
    if (counter > 0) {
        counter--;
        console.log('Counter: ' + counter);
    } else {
        console.log('Counter cannot be less than 0');
    }
}

function resetCounter() {
    counter = 0;
    console.log('Counter: ' + counter);
}

function testCounterApp() {
    increaseCounter();
    increaseCounter();
    resetCounter();
    decreaseCounter();
    resetCounter();
}
testCounterApp();
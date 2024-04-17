"use strict";
// TODO-- Question no#100 - Day 34
//?Finding the sqrt of 144?
Object.defineProperty(exports, "__esModule", { value: true });
function findingTheSquareRoot(sqrt) {
    return Math.sqrt(sqrt);
}
console.log(`The square root of 144 is ${findingTheSquareRoot(144)}`);
//TODO-- Question no#101 - Day 34
//?To generate a random integer number.
function genRandomIntegerNum() {
    return Math.floor(Math.random() * 10) + 1; //*Explination : We use math, to acces basic mathematicall functionalities and then random to generate random number ,also we set the conditon that gen number between 1 to 10. remember that math.random always generate number between 0 to 1 so to generate our desired number we used math.floor.
}
console.log(genRandomIntegerNum());
//TODO--Question no#102 - Day 34
//? Calculte and log the absoulute difference between the number -5 and 5?
const diff = Math.abs(-5 - 5);
console.log(`The absolute difference between -5 and 5 is ${diff}`);

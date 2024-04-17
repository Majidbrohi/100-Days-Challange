"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO-- Random bolean value.
// todo-- Question  no #103.
//? We use math.random to generate random number and then we use comparison operator to show theresults in boolean.
function randBolVal() {
    return Math.random() > 0.5;
}
console.log(randBolVal());
// todo-- Question  no #104.
//? Generating a random hexadecimal code.
//* Here we use math.floor and math.random generate the hexadecimal number, 
//* Then we use tostring to convert he number into string , & finally then we set the maximam lenght to  6.
function genHexDecColCode() {
    const color = '#' +
        Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color;
}
console.log(genHexDecColCode());
//TODO--// todo-- Question  no #104.
//?Simulate a dice roll using JavaScript/Typescript and return a random integar betweem 1 to 6.
//* We use math.random to generate the number between 1 to 6. that simulate's like a dice.
function diceroll() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(diceroll());

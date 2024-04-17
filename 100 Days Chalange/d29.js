//todo-- A fucntion that takes Nearast integer.
function roundofthenumber(decimal) {
    return Math.round(decimal);
}
console.log(roundofthenumber(110.99889));
//todo-- Converting strings into number.
//* Remember that , for whole ParseInt(); & for decimal parseFloat();
var wholeStr = "244466666";
console.log(parseInt(wholeStr));
var decimalStr = "24.54";
console.log(parseInt(decimalStr));
// checking the typeof realnumber.
console.log(typeof wholeStr);
console.log(typeof decimalStr);
//todo--Cheking if a value is NaN :
//* We use isNan() method to check specific elemet that eiather it's a number or not , and return boolean value accordingly.
function chekingNan(checkNan) {
    return isNaN(checkNan);
}
console.log(chekingNan("1234"));

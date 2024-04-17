// todo-- I have to create an array first.
//* Step 1)-
var samplearr = ["Ak-47", "Mp-5", "Zigana-30", "12 cuage repeator"];
//* Step 2)-
console.log(samplearr);
//* Step 3)-
samplearr.map(function (newarr) { return console.log(newarr.length); });
//todo--using filter method to creat a new aray that return number greator then 10.
function filtergreatorthen10(numbers) {
    return numbers.filter(function (number) { return number > 10; });
}
console.log("Numbers greator then 10 :", filtergreatorthen10([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26]));
//todo-- Demonstrate how to use reduce method to calculate the sum of all numbers.
function clacSumOfAllNum(numbers) {
    return numbers.reduce(function (acu, curr) { return acu + curr; }, 0);
}
var numbers = [12, 45, 66, 32, 12];
console.log("Total sum : ", clacSumOfAllNum(numbers));

// todo-- I have to create an array first.

//* Step 1)-
let samplearr : string[] = ["Ak-47" , "Mp-5" , "Zigana-30" , "12 cuage repeator"];
//* Step 2)-
console.log(samplearr)
//* Step 3)-
samplearr.map(newarr => console.log(newarr.length));

//todo--using filter method to creat a new aray that return number greator then 10.
 
function filtergreatorthen10 (numbers : number[]){
    return numbers.filter(number => number > 10);
}
console.log("Numbers greator then 10 :",filtergreatorthen10(  [ 2, 4, 6, 8,  10, 12, 14, 16, 18, 20, 22, 24, 26 ]));

//todo-- Demonstrate how to use reduce method to calculate the sum of all numbers.
function clacSumOfAllNum(numbers : number[]):number{
    return  numbers.reduce((acu , curr) => acu + curr , 0);
}


const  numbers : number[] = [12 , 45 , 66 , 32, 12];
console.log("Total sum : ",clacSumOfAllNum(numbers));
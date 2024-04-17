//TODO--Day 36 , Question no.106

// Okay , let's find out, if a year is a leap year or not.
function isLeapYear (year : number) : boolean {

    return(year % 4 === 0 && year % 100 !==0) || year % 400 === 0;  
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2024));


//TODO--Day 36 , Question no.107
//* Checking if the number is divisible by 2 and 3. *For this i have to use condition operatores.

function isDivBy2and3 (num: number) :boolean {
    return num % 2 === 0 &&  num % 3 === 0;
}
console.log(isDivBy2and3(11));


//TODO-- Question no108 Compare two strings ignoring case sensitivity.

function compTwoStr ( str1 : string , str2 : string ){
    return str1.toLowerCase() === str2.toLowerCase()
}

console.log(compTwoStr("Ali" , "ali")) //? TRUE
console.log(compTwoStr("MAJID" , "mjid")) //? FALSE

//*Bingoooooooooooooooooooo
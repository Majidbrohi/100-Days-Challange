//TODO__ Day 37 , Question no 109.
//? Question : Write an if else statement that logs Good morning if the current date time is before 12 PM.
var currTime = new Date();
if (currTime.getHours() < 12) {
    console.log("Good Morning");
}
else if (currTime.getHours() >= 12) {
    console.log("Good Afternoon");
}
else {
    console.log("Hello, How are you?");
}
//TODO__ Day 37 , Question no 110.
//? Creates a function that assigns grades based on students score.
function assignsGrades(name, score) {
    if (score >= 1100) {
        console.log("".concat(name, " A+ Grade"));
    }
    else if (score >= 900) {
        console.log("".concat(name, " A Grade"));
    }
    else if (score >= 800) {
        console.log("".concat(name, " B Grade"));
    }
    else if (score >= 650) {
        console.log("".concat(name, " C Grade"));
    }
    else if (score >= 500) {
        console.log("".concat(name, " D Grade"));
    }
    else {
        console.log("".concat(name, " FAIL"));
    }
}
assignsGrades("majid", 980);
//TODO__ Day 37 , Question no 111.
//?Arrange people by there age.
function ageGroup(age) {
    if (age >= 3) {
        console.log("you'r an KID.");
    }
    else if (age >= 13) {
        console.log("you'r a Teenager");
    }
    else if (age > 19) {
        console.log("You'r a Adult");
    }
    else if (age >= 40) {
        console.log("You'r a Senior Citizon");
    }
    else {
        console.log("please Enter a Valid age");
    }
}
ageGroup(12);
//TODO__ Day 37 , Question no 112.
//?Create a map to store countries name withe there capitals.
var countries = new Map();
countries.set("USA", "Washington D.C.");
countries.set("Pakistan", "Islamabad");
countries.set("UAE", "Dubai");
console.log(countries);
// bingooooooooooo.
// todo-- QUestion no 113.
//? Write a function that checks if a Map contians a key for "canada" and logs it's capital if it exists.
var countries2 = new Map();
countries2.set("Canada", "London");
countries2.set("Magolia", "Ulambatar");
countries2.set("Nepal", "kadmandu");
function logCapitalOfCanada(countries2) {
    if (countries2.has("Canada")) {
        console.log("The Capital of the Canda is ".concat(countries2.get("Canada")));
    }
    else {
        console.log("Canada is not in the Map");
    }
}
logCapitalOfCanada(countries2);
//TODO--Day 37 Question no# 114.
//?itraing over a Map.
var StudentsId = new Map();
StudentsId.set("Majid", 5420);
StudentsId.set("Sajid", 26220);
StudentsId.set("Wajid", 98920);
StudentsId.set("Shahid", 77220);
StudentsId.set("Zajid", 12220);
StudentsId.forEach(function (name, id) {
    console.log("Student ID: ".concat(name, " , Name: ").concat(id));
});

//TODO--- Day 48  Question no# 142
//?Create a promise that reveals withe hello , World ater 2 seconds.
var helloPromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hello, World");
    }, 2000);
});
//* When promise will fulfuiled .then statment will execute.
helloPromise.then(function (message) { return console.log(message); });
//TODO--- Day 48  Question no# 143
//? Show how to use .then() and .catch() mehtods to handle promise resolution and rejection.
var conditionalPromise = new Promise(function (resolve, reject) {
    var success = Math.random() > 0.5;
    if (success) {
        resolve("Success"); //it logs in the cae of succession of the promise;
    }
    else {
        reject(new Error("Failure"));
    }
});
conditionalPromise.then(function (result) { return console.log(result); }) //?Handles when our promise will be successfull
    .catch(function (error) { return console.log(error); }); //? when it founds any error.
//TODO__ Day 48 ,   question no#144
//? Explain the use of the promise.all() method with an example.
var promse1 = 5;
var promise2 = 555;
var promise3 = new Promise(function (resolve) {
    setTimeout(resolve, 350, "Yahoooooo");
});
Promise.all([promse1, promise2, promise3]).then(function (val) {
    console.log(val);
});

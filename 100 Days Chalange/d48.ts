//TODO--- Day 48  Question no# 142
//?Create a promise that reveals withe hello , World ater 2 seconds.


const helloPromise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("Hello, World")
    } , 2000);
})
//* When promise will fulfuiled .then statment will execute.
helloPromise.then((message) => console.log(message));


//TODO--- Day 48  Question no# 143
//? Show how to use .then() and .catch() mehtods to handle promise resolution and rejection.

const  conditionalPromise = new Promise<string>((resolve , reject) => {
    const success = Math.random() > 0.5;
    if(success){
        resolve("Success") //it logs in the cae of succession of the promise;
    }else{
        reject(new Error("Failure"));
    }

});

conditionalPromise.then((result) => console.log(result)) //?Handles when our promise will be successfull
 .catch((error) => console.log(error)); //? when it founds any error.

 
//TODO__ Day 48 ,   question no#144
//? Explain the use of the promise.all() method with an example.

const promse1 = 5;
const promise2 = 555;
const promise3 = new Promise<string>((resolve) => {
    setTimeout(resolve , 350 , "Yahoooooo");
});

Promise.all([promse1 , promise2 , promise3]).then((val) => {
    console.log(val)
});

//*In this example we practiced that how promise.all() works, 
//? it waits for all promises to finish , then it logs all at once.
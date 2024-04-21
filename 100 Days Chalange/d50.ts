// // //TODO-- Day 50 , question No# 148.
// // //? Demonstrate the use of the setTimeout() funtion to execute code after a delay.

// // const demoUseOfSetTimeOut = () => {
// //     console.log("data 1");

// //          setTimeout(() => {
// //         console.log("data 2 : " + " This meesage shown after 2 secs of delay ");//Using set timout to dealy this data for 2 secs.
// //       },  2000);
// //       console.log("data 3")
// //       console.log("data 4")
// //       console.log("data 5");

// // }


// // demoUseOfSetTimeOut();

// //TODO--- Day 50 , Question no# 149
// //? Explain the concept of event loop in js with an example.

// //* Event loop is one of the javascript background fundamentalls, basiclly javascript is a one threaded, syncronus language.  
// //* it means that it always preffer to work in flow. like 0 to 10 and waits the previous one complete first. 

// console.log("Start");

// setTimeout(() => {
//     console.log("This is a event loop")
// },0)

// console.log("End");

// //TODO-- Day 50, question no# 150.
// //? Describe how asyncronus function is different from the syncronuss code execution.

//* syncronuss code sexecution.
console.log("Before syncronuss code execution.");

for(let i = 0 ; i < 1e9; i++){  }

console.log("After syncronuss code execution.");

//* asyncronuss code sexecution.
console.log("Before asyncronuss code execution.");
setTimeout(() =>{
    console.log("code is executing");
}, 1000)
console.log("After asyncronuss code execution.");








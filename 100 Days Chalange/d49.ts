//TODO-- Day 49  question no# 145.
//? Create a function that accepts a callback and invokes it with some arguments .
 

 let callBackFunc = (
    callback : (arg1 : number , arg2 : number) =>   void,
arg1 : number ,
arg2 : number
)=>{
callback(arg1, arg2)
 }

 const add = (a : number , b : number) => {
    console.log(a + b) 
 }

callBackFunc(add , 112 , 333)
//invoking a callback function with arguments to perform addition.


//TODO__day 49 Question no# 146
//? Show an exapmle of callback fuction used to filter an array of numbers.

//An Array of numbers
const numArray : number[] = [2 , 4, 6, 8 , 10 , 12 , 14, 16, 18];

//Filtered array of numbers > 10
const FilteredArray : number[] =  numArray.filter((newArr) => newArr > 10);

console.log(FilteredArray);



//TODO-- Day 49 question no# 147.
//? Explian how to handle errors in  a callback function.

const fetchData = (
     callback: (error : Error | null, data? : string) => void
) =>{
    const error = new Error("Fail to fetch data")
    const data = "Data";

   if (Math.random() > 0.4){
    callback(null, data); //data will be fetch successfully.
   }else{
    callback(error); //Passes error to the callback
   }

}
//*using the fetchData function with error handling in the callback.
fetchData((error , data) => {
    if (error) {
        console.error(error.message)
    }else {
        console.log(data); // processess the data 
    }
});

//? Bingoooooooooooooo
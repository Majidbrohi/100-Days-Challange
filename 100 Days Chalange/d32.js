//  function getFrmatedDateToday(){
//     const now = new Date();
//     const day = String(now.getDay()).padStart(2 , '0');
//     const month = String(now.getMonth() + 1).padStart(2, '0');
//     const year = now.getFullYear();
//     return `${day}-${month}-${year};`
//  }
//  console.log("Today is " , getFrmatedDateToday());
// //  todo  -- see how many days are left untill new year.
// // for that i ahve to subract the one date to another.
// //create a fucntion 
// function daysUntilNewYear  (): number{
//    const Today = new Date();
//    const newYear = new Date(Today.getFullYear() + 1 , 0, 1);
//  //* Here I set the next year via "+1" and then in month index "0" means the first month of the year. and finaly then seted the date 1.
//  const diff = newYear.getTime() - Today.getTime();  // diference in millisecond
//  const convertingIntoDays = Math.ceil(diff / (1000 * 60 * 60 * 24)) 
//  //*Here I acces the access the "diff" and then converting miiliseconds into days, via math.ceil.
//  return  convertingIntoDays
// }
// // Finally log the results .
// console.log(`${daysUntilNewYear()} days untill the next year.`)
//Todo-- Generate a date object representing your next birthday and log it to the console.
function nextBirthDay(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    // We use let becuaese it'll may itrted. 
    var birthday = new Date(year, month - 1, day);
    //Now we have to add condition that if birthday has passed , in this case we will set next year.
    if (birthday < today) {
        birthday.setFullYear(year + 1); //Next year.
    }
    return birthday;
}
//*Now we have to invoke the function to add our Birthday.
var birthday = nextBirthDay(7, 20);
console.log("Your birthday on :", birthday.toLocaleDateString());
// Bingg0000000000000000000000000000000000000!
//? Author : Anziq Majid.

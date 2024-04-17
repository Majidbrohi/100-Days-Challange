// todo -- using push mehtod.
var favfruites = ["Mango", "Pineapple", "Strawberry"];
//* Here I remember that Love to eat goava too.
favfruites.push("Goava");
// todo -- using pop mehtod.
var storedfruites = ["Mango", "Pineapple", "Strawberry"];
//* Here I remember that the strabarirs are smelling bad deu to storing them too long so i decided to feed them to my goats.
storedfruites.pop();
console.log(favfruites);
console.log(storedfruites);
// todo-- Find the index of strawberry and replace it with grapes.
//? I did it in threee defferent steps , first I maje an array , then I use "indexOf" method to find the index of desired fruite. and finally then i sed splice method to remove and also add the desired fruite. bingoooooo.
//todo--Step 1)-
var fruites = ["Banana", "Orange", "Mango", "Strawberry"];
//todo--Step 2)-
console.log(fruites.indexOf("Strawberry"));
//todo--Step 3)-
fruites.splice(3, 1, "graps");
console.log(fruites);

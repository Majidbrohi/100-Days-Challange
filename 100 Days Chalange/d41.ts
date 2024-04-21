//TODO--Day 41 Question no# 121.
//? Question no# implement a for loop which loop throw 1 to 10 but skips 5 .
 for(let i = 0; i < 10+1 ; i++){
    if(i === 5){
    continue
    }
    console.log(i);
 };

 //TODO--Day 41 Question no# 122
//? cuse a whie loop to count down from 10 to 1 and breaks the loop when it reaches 5.
let i = 10;

while(i > 0){
    if(i === 5){
        break
    }
console.log(i)
i--;
}


//TODO-- day 41 Question no# 123
//? itrate throw strigs and break when it finds first vowel.

 function logUntilVowel (str : string) {
    const vowels = "aeiouAEIOU";
    for(const character of str){
        if(vowels.includes(character)){
            console.log(`First vowel found : ${character} `)
            break;
            
        }
        console.log(character);
    }

 }
 logUntilVowel("gaypsy"); //Logs the first vowel of our string.
  
//TODO--Day 41 Question no# 121.
//? Question no# implement a for loop which loop throw 1 to 10 but skips 5 .
for (var i_1 = 0; i_1 < 10 + 1; i_1++) {
    if (i_1 === 5) {
        continue;
    }
    console.log(i_1);
}
;
//TODO--Day 41 Question no# 122
//? cuse a whie loop to count down from 10 to 1 and breaks the loop when it reaches 5.
var i = 10;
while (i > 0) {
    if (i === 5) {
        break;
    }
    console.log(i);
    i--;
}
//TODO-- day 41 Question no# 123
//? itrate throw strigs and break when it finds first vowel.
function logUntilVowel(str) {
    var vowels = "aeiouAEIOU";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var character = str_1[_i];
        if (vowels.includes(character)) {
            console.log("First vowel found : ".concat(character, " "));
            break;
        }
        console.log(character);
    }
}
logUntilVowel("gaypsy"); //Logs the first vowel of our string.

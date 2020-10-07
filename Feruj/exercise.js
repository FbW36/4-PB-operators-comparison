// 0
let apples = 20;
let orange = 30;
//1, 2
let checkEqual = apples == orange ? "true" : "false";
console.log(checkEqual); //if apples and orange are equal- is true else false.
//3
let checkEqual1 = apples > orange ? "true" : "false";
console.log(checkEqual1); //if apples is greater than orange- is true else false.
// 4
let checkEqual2 = apples <= orange ? "true" : "false";
console.log(checkEqual2); // if apples is smaller or equal than orange- is true else false.
// 5
let checkEqual3 = apples < orange ? "true" : "false";
console.log(checkEqual3); // if apples is smaller than orange- is true else false.

// 6
let mangoes = 5;
let mA = mangoes * apples;
let mO = orange + mangoes;
console.log(mO > mA); // if mangoes multyply with apples is greater than mangoes and orange- is true else false.
//7
let manApp = apples - mangoes; // Subtract
let orngMango = orange / mangoes; // Devided
console.log(manApp < orngMango); // Smaller than
//8
console.log((mangoes == apples) == orange); // comparison
//9
let appreminder = apples % mangoes; //reminder
let oraReminder = orange % mangoes;
console.log(appreminder == oraReminder); // comparison

//10
let totalManApp = mangoes + apples;
let totalOraMang = orange - mangoes;
console.log(totalManApp >= totalOraMang); // greater than

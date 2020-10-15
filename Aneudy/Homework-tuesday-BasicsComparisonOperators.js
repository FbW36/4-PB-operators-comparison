// 0
var apples = 20;
var oranges = 30;
// 1 check if equal
console.log(apples == oranges? true : false); //false
// 2 check if not equal. 
console.log(apples != oranges? true : false); //true
// 3 check if apples is greater that orange
console.log(apples > oranges ? true : false); //false
// 4 Check if apples is less than or equal to oranges
console.log(apples >= oranges ? true : false); // false 
// 5 Check whether oranges is greater than apples.
console.log( apples < apples ? true : false); //false
// 6 Declare another variable "mangoes" and give it a value of 5. Multiply mangoes and apples, and check whether this result is greater than mangoes added to oranges.
var mangoes = 5;
console.log(mangoes);
var mul = mangoes * apples; //100
console.log(mul);
console.log(mul > mangoes + oranges ? true : false); //true
// 7 Subtract mangoes from apples and check whether this result is less than oranges divided by mangoes.
var sub = mangoes - apples;
console.log( sub); //15
console.log( sub < oranges / mangoes ? true : false);//true
// 8 Check whether mangoes, apples and oranges are equal.
console.log( mangoes == apples == oranges? true : false);//false
// 9 Check whether the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal.
console.log ( apples / mangoes == oranges / mangoes? true : false);//false
// 10 Check whether mangoes added to apples is greater than oranges minus mangoes. If it is not, find an operator which will give a result of true.
console.log (mangoes + apples > oranges - mangoes? true : false); //false
// 11 BONUS CHALLENGE: Try increasing script readability by adding question headings to your output before each result.
//this part I don't know
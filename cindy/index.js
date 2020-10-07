//0. Declare two variables "apples" and "oranges". Assign a value of 20 to apples. Assign a value of 30 to oranges.
let apples = 20;
let oranges = 30;
let mangoes = 5;
console.log(apples);
console.log(oranges);
//1. Check whether apples and oranges are equal.
console.log(oranges == apples ? "are equal" : "are not equal"); //false

//2. Check whether apples and oranges are *not* equal.
console.log(oranges != apples ? "true" : "false"); //true
//3. Check whether apples is greater than oranges.
console.log(
  apples > oranges
    ? "apples is greater than oranges"
    : "oranges is greater than apples"
); //false

//4. Check whether apples is less than or equal to oranges.
console.log(
  apples <= oranges
    ? "apples are less than oranges"
    : "oranges are less than apples"
);
//true
//5. Check whether oranges is greater than apples.
console.log(
  oranges >= apples //oranges = 30 - apples = 20
    ? "oranges is greater than apples"
    : "apples is greater than oranges"
); //true

//6. Declare another variable "mangoes" and give it a value of 5. Multiply mangoes and apples, and check whether this result is greater than mangoes added to oranges.
let mangapples = mangoes * apples; //True 'cause it's 100, greater than 25
console.log(mangapples > mangoes + oranges ? "true" : "false");

// 7. Subtract mangoes from apples and check whether this result is less than oranges divided by mangoes.
let apploes = apples - mangoes; //the result is 15
console.log(apploes < oranges / mangoes ? "true" : "false"); //the result is 6, so it's false

//8. Check whether mangoes, apples and oranges are equal.
console.log((mangoes == apples) == oranges ? "true" : "false");

//9. Check whether the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal.
let value1 = apples / mangoes;
let res1 = value1 % 2 == 0 ? "true" : "false";

let value2 = oranges / mangoes;
let res2 = value2 % 2 == 0 ? "true" : "false";
console.log(apples & mangoes) == oranges % mangoes;

//10. Check whether mangoes added to apples is greater than oranges minus mangoes. If it is not, find an operator which will give a result of true.
console.log(mangoes + apples >= oranges - mangoes ? "true" : "false");
//We can have a True result when adding "=" (using greater than OR equal)

//11. BONUS CHALLENGE: Try increasing script readability by adding question headings to your output before each result.

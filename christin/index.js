// 0

let apples = 20;
let oranges = 30;

// 1 Check whether apples and oranges are equal.

console.log("Apples are equal to oranges? ", apples === oranges); // false

// 2 Check whether apples and oranges are not equal.

console.log("Are apples and oranges NOT equal? ", apples !== oranges); // true

//3 Check whether apples is greater than oranges.

console.log("Apples are greater than oranges?", apples > oranges); // false

// 4 Check whether apples is less than or equal to oranges.

console.log("Apples are less or equal than oranges?", apples <= oranges); // true

// 5 Check whether oranges is greater than apples

console.log("Oranges are greater than apples?", apples < oranges); // true

// 6 Declare another variable "mangoes" and give it a value of 5. Multiply mangoes and apples, and check whether this result is greater than mangoes added to oranges.

let mangoes = 5;
let resultOne = apples * mangoes;

console.log(
  "Result of Mangoes multiply apples is bigger than addition of mangoes and oranges ",
  resultOne > mangoes + oranges
); // true

// 7 Subtract mangoes from apples and check whether this result is less than oranges divided by mangoes.

console.log(
  "Mangoes - apples is less than oranges div tue mangoes? ",
  mangoes - apples < oranges / mangoes
)
  ? true
  : false; // true

// 8 Check whether mangoes, apples and oranges are equal.

console.log(
  "Are Mangoes, apples and oranges equal?",
  (apples === mangoes) === oranges
)
  ? true
  : false; // false

// 9 Check whether the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal.

console.log(
  "Are the remainders equal?",
  apples % mangoes === oranges % mangoes ? true : false
); // true

// 10 Check whether mangoes added to apples is greater than oranges minus mangoes. If it is not, find an operator which will give a result of true.

console.log(
  "addition of mangoes and appls is equal or less than oranges - mangoes?",
  mangoes + apples >= oranges - mangoes
)
  ? true
  : false;

//11 BONUS CHALLENGE:
//Try increasing script readability by adding question headings to your output before each result.

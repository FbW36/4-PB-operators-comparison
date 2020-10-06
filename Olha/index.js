// 0. Declare two variables "apples" and "oranges". Assign a value of 20 to apples. Assign a value of 30 to oranges.
let apples = 20;
let oranges = 30;
console.log("apples:", apples, "oranges:", oranges);

// 1. Check whether apples and oranges are equal.
console.log("The number of apples is the same as the number of oranges:", apples == oranges);

// 2. Check whether apples and oranges are *not* equal.
console.log("The number of apples is NOT the same as the number of oranges:", apples != oranges);

// 3. Check whether apples is greater than oranges.
console.log("The number of apples is greater than the number of oranges:", apples > oranges);

// 4. Check whether apples is less than or equal to oranges.
console.log("The number of apples is smaller than or equal to the number of oranges:", apples <= oranges);

// 5. Check whether oranges is greater than apples.
console.log("The number of oranges is greater than the number of apples:", oranges > apples);

// 6. Declare another variable "mangoes" and give it a value of 5. Multiply mangoes and apples, and check whether this result is greater than mangoes added to oranges.
let mangoes = 5;
console.log("mangoes:", mangoes);

console.log("Mangoes multiplied by apples is greater than mangoes added to oranges:", (mangoes * apples) > (mangoes + oranges));

// 7. Subtract mangoes from apples and check whether this result is less than oranges divided by mangoes.
console.log("Mangoes subtracted from apples is less than oranges divided by mangoes:", (apples - mangoes) < (oranges / mangoes));

// 8. Check whether mangoes, apples and oranges are equal.
console.log("The number of mangoes is equal to the number of apples and the number of oranges:", mangoes == apples == oranges);

// 9. Check whether the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal.
console.log("the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal:", (apples % mangoes) == (oranges % mangoes));

// 10. Check whether mangoes added to apples is greater than oranges minus mangoes. If it is not, find an operator which will give a result of true.

let searchedOperator = (mangoes + apples) > (oranges - mangoes) ? "\"greater than\"" : (mangoes + apples) < (oranges - mangoes) ? "\"less than\"" : (mangoes + apples) == (oranges - mangoes) ? "\"equal to\"" : "\"no operator found\"";
console.log("An operator that compares (mangoes + apples) and (oranges - mangoes) and returns true:", searchedOperator);

// 11. BONUS CHALLENGE: Try increasing script readability by adding question headings to your output before each result.

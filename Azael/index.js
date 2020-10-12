// 0. Declare two variables "apples" and "oranges". Assign a value of 20 to apples. Assign a value of 30 to oranges.
let apples = 20;

let oranges = 30;

// 1. Check whether apples and oranges are equal.
let orapp = oranges == apples;
console.log("orapp==> " + orapp);

// 2. Check whether apples and oranges are *not* equal.
let fruits = apples != oranges;
console.log("fruits ==> " + fruits);

// 3. Check whether apples is greater than oranges.
let fruits1 = apples > oranges;
console.log("fruits1 ==> " + fruits1);

// 4. Check whether apples is less than or equal to oranges.
let fruits2 = apples <= oranges;
console.log("fruits2==> " + fruits2);

// 5. Check whether oranges is greater than apples.
let fruits3 = oranges > apples;
console.log("fruits3 ==> " + fruits3);

// 6. Declare another variable "mangoes" and give it a value of 5. Multiply mangoes and apples, and check whether this result is greater than mangoes added to oranges.

let mangoes = 5;

let mal = mangoes * apples;

console.log("mal ==> " + mal);

let fruits4 = mangoes + apples;
let fruits5 = mal > fruits4;
console.log("fruits5 ==> " + fruits5);

// 7. Subtract mangoes from apples and check whether this result is less than oranges divided by mangoes.

let rest = apples - mangoes;
let divide = oranges / mangoes;
let compare3 = rest < divide;

console.log("compare3 ==>" + compare3);

// 8. Check whether mangoes, apples and oranges are equal.

let equal = mangoes == apples && apples == oranges;
console.log("mangoes, apples and oranges are equal? " + equal);

// 9. Check whether the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal.

let remainder = apples % mangoes;
let remainder2 = oranges % mangoes;
let remainder3 = remainder == remainder2;
console.log("remainder3 ==>" + remainder3);

// 10. Check whether mangoes added to apples is greater than oranges minus mangoes. If it is not, find an operator which will give a result of true.

let add = mangoes + apples;
let rest2 = oranges - mangoes;

let compare = add > rest2;
console.log("compare ==>" + compare);

let compare2 = add >= rest2;
console.log("compare2 ==>" + compare2);

// 11. BONUS CHALLENGE: Try increasing script readability by adding question headings to your output before each result.

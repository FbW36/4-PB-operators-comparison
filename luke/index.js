// 0. Declare two variables "apples" and "oranges".Assign a value of 20 to apples.Assign a value of 30 to oranges.
let apples = 20;
let oranges = 30;

// 1. Check whether apples and oranges are equal.
console.log(apples == oranges);

// 2. Check whether apples and oranges are _not_ equal.
console.log(apples != oranges);

// 3. Check whether apples is greater than oranges.
console.log(apples > oranges);

// 4. Check whether apples is less than or equal to oranges.
console.log(apples <= oranges);

// 5. Check whether oranges is greater than apples.
console.log(oranges > apples);

// 6. Declare another variable "mangoes" and give it a value of 5. Multiply mangoes and apples, and check whether this result is greater than mangoes added to oranges.
let mangoes = 5;
console.log(mangoes * apples > mangoes + oranges);

// 7. Subtract mangoes from apples and check whether this result is less than oranges divided by mangoes.
console.log(apples - mangoes < oranges / mangoes);

// 8. Check whether mangoes, apples and oranges are equal.
console.log((mangoes == apples) == oranges);

// 9. Check whether the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal.
console.log(apples % mangoes == oranges % mangoes);

// 10. Check whether mangoes added to apples is greater than oranges minus mangoes. If it is not, find an operator which will give a result of true.
console.log(apples + mangoes >= oranges - mangoes);

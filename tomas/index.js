let apples = 20;
let oranges = 30;

// if equal
console.log('the result of this comparison is ' + (apples == oranges));
// if not equal
console.log('the result of this comparison is ' + (apples != oranges));
// if apples greater
console.log('the result of this comparison is ' + (apples > oranges));
//if apples are less
console.log('the result of this comparison is ' + (apples < oranges));
// if oranges are greater
console.log('the result of this comparison is ' + (oranges > apples));

let mangos = 5;
// Multiply mangoes and apples, and check whether this result is greater than mangoes added to oranges
console.log('the result of this comparison is ' + ((mangos * apples) > (mangos + oranges)));
// Subtract mangoes from apples and check whether this result is less than oranges divided by mangoes
let compare1 = (apples - mangos) < (oranges / mangos);
console.log('the result of this comparison is ' + compare1);
// Check whether mangoes, apples and oranges are equal
let compare2 = mangos == apples == oranges;
console.log('the result of this comparison is ' + compare2);
// Check whether the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal
let compare3 = (apples / mangos) == (oranges / mangos);
console.log('the result of this comparison is ' + compare3);
// Check whether mangoes added to apples is greater than oranges minus mangoes. If it is not, find an operator which will give a result of true
let compare4 = (mangos + apples) > (oranges - mangos);
console.log('the result of this comparison is ' + compare4);
